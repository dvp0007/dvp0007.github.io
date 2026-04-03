import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function TechScene() {
  const sceneRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    sceneRef.current.rotation.y = Math.sin(t * 0.2) * 0.08;
  });

  return (
    <group ref={sceneRef} position={[0, -0.2, 0]}>
      {/* === MAIN LAPTOP === */}
      <Float speed={1.5} rotationIntensity={0.08} floatIntensity={0.15}>
        <group position={[0, 0, 0]} rotation={[-0.1, -0.3, 0]}>
          {/* Laptop base */}
          <RoundedBox args={[1.6, 0.06, 1.1]} radius={0.03} position={[0, 0, 0]}>
            <meshStandardMaterial color="#1a1a2e" metalness={0.7} roughness={0.2} />
          </RoundedBox>
          {/* Keyboard surface */}
          <mesh position={[0, 0.035, 0.05]}>
            <planeGeometry args={[1.4, 0.85]} />
            <meshStandardMaterial color="#111127" roughness={0.8} />
          </mesh>
          {/* Keyboard keys grid */}
          <KeyboardKeys />
          {/* Trackpad */}
          <RoundedBox args={[0.35, 0.005, 0.22]} radius={0.02} position={[0, 0.035, 0.35]}>
            <meshStandardMaterial color="#1e1b4b" roughness={0.5} />
          </RoundedBox>

          {/* Screen */}
          <group position={[0, 0.58, -0.52]} rotation={[-0.35, 0, 0]}>
            <RoundedBox args={[1.55, 1.05, 0.04]} radius={0.02}>
              <meshStandardMaterial color="#111127" metalness={0.5} roughness={0.3} />
            </RoundedBox>
            {/* Screen display */}
            <mesh position={[0, 0, 0.025]}>
              <planeGeometry args={[1.4, 0.9]} />
              <meshStandardMaterial color="#0a0a1a" emissive="#06b6d4" emissiveIntensity={0.08} />
            </mesh>
            {/* Code on screen */}
            <ScreenCode />
            {/* Screen glow */}
            <pointLight position={[0, 0, 0.3]} intensity={0.3} color="#06b6d4" distance={2} />
          </group>

          {/* Hinge */}
          <mesh position={[0, 0.03, -0.52]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.025, 0.025, 1.4, 12]} />
            <meshStandardMaterial color="#2d2d3d" metalness={0.6} roughness={0.3} />
          </mesh>
        </group>
      </Float>

      {/* === FLOATING HOLOGRAPHIC PANELS === */}
      <HoloPanel
        position={[-1.3, 0.8, -0.2]}
        rotation={[0, 0.4, 0]}
        width={0.7}
        height={0.5}
        color="#6366f1"
      />
      <HoloPanel
        position={[1.4, 0.6, 0.1]}
        rotation={[0, -0.3, 0.05]}
        width={0.55}
        height={0.4}
        color="#8b5cf6"
      />

      {/* === FLOATING GEOMETRIC ELEMENTS === */}
      <FloatingCube position={[-1.0, 1.4, 0.3]} color="#06b6d4" size={0.12} speed={1.2} />
      <FloatingCube position={[1.2, 1.3, -0.3]} color="#8b5cf6" size={0.1} speed={1.5} />
      <FloatingCube position={[0.5, 1.6, 0.5]} color="#6366f1" size={0.08} speed={1.8} />

      {/* Floating spheres */}
      <FloatingOrb position={[-0.7, 1.6, 0.5]} color="#06b6d4" size={0.04} speed={1.3} />
      <FloatingOrb position={[0.9, 1.5, 0.3]} color="#818cf8" size={0.035} speed={1.6} />
      <FloatingOrb position={[-1.3, 0.3, 0.6]} color="#8b5cf6" size={0.03} speed={2.0} />
      <FloatingOrb position={[1.5, 0.2, -0.2]} color="#06b6d4" size={0.025} speed={1.4} />

      {/* Spinning rings */}
      <SpinRing position={[0, 1.5, 0]} color="#6366f1" size={0.25} />
      <SpinRing position={[-1.5, 1.0, 0]} color="#06b6d4" size={0.15} />

      {/* Connection lines / circuit traces */}
      <CircuitTrace from={[-1.0, 1.4, 0.3]} to={[-0.7, 1.6, 0.5]} color="#06b6d4" />
      <CircuitTrace from={[1.2, 1.3, -0.3]} to={[0.9, 1.5, 0.3]} color="#8b5cf6" />
    </group>
  );
}

function KeyboardKeys() {
  const keys = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 12; col++) {
      keys.push(
        <mesh
          key={`${row}-${col}`}
          position={[-0.6 + col * 0.105, 0.04, -0.25 + row * 0.17]}
        >
          <boxGeometry args={[0.08, 0.008, 0.12]} />
          <meshStandardMaterial color="#1e1b4b" roughness={0.6} />
        </mesh>
      );
    }
  }
  return <group>{keys}</group>;
}

function ScreenCode() {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // Subtle scroll effect
    if (ref.current) {
      ref.current.position.y = (Math.sin(t * 0.3) * 0.05);
    }
  });

  const lines = [
    { x: -0.35, y: 0.32, w: 0.25, color: "#818cf8" },
    { x: -0.25, y: 0.27, w: 0.4, color: "#06b6d4" },
    { x: -0.15, y: 0.22, w: 0.3, color: "#e2e8f0" },
    { x: -0.25, y: 0.17, w: 0.5, color: "#818cf8" },
    { x: -0.35, y: 0.12, w: 0.2, color: "#8b5cf6" },
    { x: -0.15, y: 0.07, w: 0.35, color: "#06b6d4" },
    { x: -0.25, y: 0.02, w: 0.45, color: "#e2e8f0" },
    { x: -0.35, y: -0.03, w: 0.15, color: "#818cf8" },
    { x: -0.2, y: -0.08, w: 0.38, color: "#06b6d4" },
    { x: -0.1, y: -0.13, w: 0.28, color: "#8b5cf6" },
    { x: -0.25, y: -0.18, w: 0.42, color: "#e2e8f0" },
    { x: -0.35, y: -0.23, w: 0.3, color: "#818cf8" },
    { x: -0.15, y: -0.28, w: 0.22, color: "#06b6d4" },
    { x: -0.25, y: -0.33, w: 0.5, color: "#e2e8f0" },
  ];

  return (
    <group ref={ref} position={[0, 0, 0.028]}>
      {/* Line numbers gutter */}
      <mesh position={[-0.6, 0, 0]}>
        <planeGeometry args={[0.08, 0.85]} />
        <meshStandardMaterial color="#1a1a3e" transparent opacity={0.8} />
      </mesh>
      {lines.map((line, i) => (
        <mesh key={i} position={[line.x, line.y, 0]}>
          <planeGeometry args={[line.w, 0.025]} />
          <meshStandardMaterial
            color={line.color}
            emissive={line.color}
            emissiveIntensity={0.6}
            transparent
            opacity={0.85}
          />
        </mesh>
      ))}
      {/* Cursor blink */}
      <CursorBlink />
    </group>
  );
}

function CursorBlink() {
  const ref = useRef();
  useFrame((state) => {
    ref.current.visible = Math.sin(state.clock.elapsedTime * 4) > 0;
  });

  return (
    <mesh ref={ref} position={[0.15, -0.33, 0]}>
      <planeGeometry args={[0.012, 0.03]} />
      <meshStandardMaterial color="#e2e8f0" emissive="#e2e8f0" emissiveIntensity={1} />
    </mesh>
  );
}

function HoloPanel({ position, rotation, width, height, color }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.position.y = position[1] + Math.sin(t * 0.8 + position[0]) * 0.06;
  });

  return (
    <group ref={ref} position={position} rotation={rotation}>
      {/* Panel background */}
      <mesh>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.15}
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Panel border */}
      <mesh>
        <edgesGeometry args={[new THREE.PlaneGeometry(width, height)]} />
        <lineBasicMaterial color={color} transparent opacity={0.5} />
      </mesh>
      {/* Fake data lines */}
      {Array.from({ length: 4 }, (_, i) => (
        <mesh key={i} position={[-width * 0.3 + i * 0.02, height * 0.3 - i * 0.08, 0.001]}>
          <planeGeometry args={[width * 0.5 - i * 0.05, 0.015]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.8}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingCube({ position, color, size, speed }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    ref.current.rotation.x = t * 0.5;
    ref.current.rotation.y = t * 0.3;
    ref.current.position.y = position[1] + Math.sin(t) * 0.08;
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        wireframe
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

function FloatingOrb({ position, color, size, speed }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    ref.current.position.y = position[1] + Math.sin(t) * 0.08;
    ref.current.position.x = position[0] + Math.cos(t * 0.5) * 0.03;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 10, 10]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        transparent
        opacity={0.65}
      />
    </mesh>
  );
}

function SpinRing({ position, color, size }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.6;
    ref.current.rotation.z = t * 0.4;
    ref.current.position.y = position[1] + Math.sin(t * 0.8) * 0.05;
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[size, 0.005, 6, 24]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.5}
        transparent
        opacity={0.45}
      />
    </mesh>
  );
}

function CircuitTrace({ from, to, color }) {
  const ref = useRef();
  useFrame((state) => {
    ref.current.material.opacity = 0.2 + Math.sin(state.clock.elapsedTime * 2) * 0.15;
  });

  const points = [new THREE.Vector3(...from), new THREE.Vector3(...to)];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line ref={ref} geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.3} />
    </line>
  );
}

export default function Avatar3D() {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {visible && (
        <Canvas
          camera={{ position: [0, 1.2, 3.5], fov: 40 }}
          dpr={[1, 1.5]}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 8, 5]} intensity={0.9} />
          <directionalLight position={[-4, 3, 2]} intensity={0.2} color="#818cf8" />
          <pointLight position={[0, 3, 2]} intensity={0.4} color="#06b6d4" />
          <pointLight position={[-2, 0, 2]} intensity={0.2} color="#8b5cf6" />
          <TechScene />
        </Canvas>
      )}
    </div>
  );
}
