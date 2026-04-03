import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from "@react-three/drei";

function AnimatedSphere({ position, color, speed, distort, scale }) {
  const meshRef = useRef();
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
  });

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </Float>
  );
}

function AnimatedTorus({ position, color, speed, scale }) {
  const meshRef = useRef();
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
  });

  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={1.5}>
      <Torus ref={meshRef} args={[1, 0.3, 16, 100]} position={position} scale={scale}>
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.9}
          transparent
          opacity={0.5}
        />
      </Torus>
    </Float>
  );
}

function AnimatedIcosahedron({ position, color, speed, scale }) {
  const meshRef = useRef();
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.4;
    meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.2;
  });

  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[1, 1]} position={position} scale={scale}>
        <meshStandardMaterial
          color={color}
          wireframe
          roughness={0.2}
          metalness={0.9}
          transparent
          opacity={0.4}
        />
      </Icosahedron>
    </Float>
  );
}

export default function FloatingShapes() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
        <AnimatedSphere position={[-3, 1.5, -2]} color="#6366f1" speed={1.5} distort={0.4} scale={0.8} />
        <AnimatedSphere position={[3.5, -1, -1]} color="#06b6d4" speed={1} distort={0.3} scale={0.6} />
        <AnimatedTorus position={[2.5, 2, -3]} color="#8b5cf6" speed={0.8} scale={0.5} />
        <AnimatedIcosahedron position={[-2.5, -2, -2]} color="#818cf8" speed={1.2} scale={0.7} />
      </Canvas>
    </div>
  );
}
