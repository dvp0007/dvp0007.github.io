import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function generateSpherePoints(count) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 1.2 + Math.random() * 0.8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

function StarPoints(props) {
  const ref = useRef();
  const [sphere] = useState(() => generateSpherePoints(2000));

  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 25;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#818cf8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function StarsCanvas() {
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
    <div ref={containerRef} className="w-full h-full absolute inset-0 z-[-1]">
      {visible && (
        <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]} frameloop="always">
          <Suspense fallback={null}>
            <StarPoints />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
