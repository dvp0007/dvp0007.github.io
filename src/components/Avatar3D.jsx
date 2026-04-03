import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";

const DEFAULT_MODEL_PATH = "/models/my-avatar.glb";

function PersonalAvatarModel({ url }) {
  const { scene } = useGLTF(url);
  const rootRef = useRef();

  const avatarScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return clone;
  }, [scene]);

  useFrame((state) => {
    if (!rootRef.current) {
      return;
    }
    rootRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.18;
  });

  return (
    <group ref={rootRef} position={[0, -1.15, 0]} scale={1.6}>
      <primitive object={avatarScene} />
    </group>
  );
}

function FallbackAvatar() {
  const avatarRef = useRef();

  useFrame((state) => {
    if (!avatarRef.current) {
      return;
    }
    avatarRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.25;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={avatarRef} position={[0, -0.15, 0]}>
        <mesh position={[0, 1.1, 0]}>
          <sphereGeometry args={[0.42, 42, 42]} />
          <meshStandardMaterial color="#c2a48e" roughness={0.6} metalness={0.08} />
        </mesh>

        <mesh position={[0, 0.25, 0]}>
          <capsuleGeometry args={[0.55, 1.0, 12, 32]} />
          <meshStandardMaterial color="#1f2a44" roughness={0.55} metalness={0.12} />
        </mesh>

        <mesh position={[0, 1.45, -0.05]}>
          <sphereGeometry args={[0.2, 20, 20]} />
          <meshStandardMaterial color="#17192a" roughness={0.9} metalness={0.02} />
        </mesh>

        <mesh position={[0, -0.6, 0]} rotation={[-0.08, 0, 0]} receiveShadow>
          <cylinderGeometry args={[0.95, 1.05, 0.16, 48]} />
          <meshStandardMaterial color="#2b2f4f" roughness={0.35} metalness={0.28} />
        </mesh>
      </group>
    </Float>
  );
}

export default function Avatar3D({ modelPath = DEFAULT_MODEL_PATH }) {
  const [visible, setVisible] = useState(true);
  const [modelReady, setModelReady] = useState(false);
  const [modelChecked, setModelChecked] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let active = true;

    async function checkModel() {
      try {
        const response = await fetch(modelPath, { method: "HEAD" });
        if (active) {
          setModelReady(response.ok);
        }
      } catch {
        if (active) {
          setModelReady(false);
        }
      } finally {
        if (active) {
          setModelChecked(true);
        }
      }
    }

    checkModel();

    return () => {
      active = false;
    };
  }, [modelPath]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {visible && (
        <Canvas
          camera={{ position: [0, 1.15, 3.2], fov: 35 }}
          dpr={[1, 1.75]}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          shadows
        >
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[4, 7, 5]}
            intensity={1.2}
            color="#f8fafc"
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <directionalLight position={[-4, 3, 2]} intensity={0.5} color="#7c83ff" />
          <pointLight position={[0, 2.4, 1.2]} intensity={0.35} color="#22d3ee" />

          {modelReady ? (
            <Suspense fallback={<FallbackAvatar />}>
              <PersonalAvatarModel url={modelPath} />
            </Suspense>
          ) : (
            <FallbackAvatar />
          )}

          <mesh receiveShadow position={[0, -0.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[1.8, 64]} />
            <shadowMaterial transparent opacity={0.25} />
          </mesh>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.8}
            rotateSpeed={0.5}
          />
          <Environment preset="city" />
        </Canvas>
      )}

      {modelChecked && !modelReady && (
        <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center text-xs md:text-sm text-[#94a3b8] bg-[#0f172a]/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#334155]/70">
          Add your 3D model at public/models/my-avatar.glb
        </p>
      )}
    </div>
  );
}
