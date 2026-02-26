"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

function AnimatedSphere() {
  const mesh = useRef<Mesh>(null!);

  useFrame(({ mouse }) => {
    if (!mesh.current) return;

    // Continuous rotation
    mesh.current.rotation.x += 0.003;
    mesh.current.rotation.y += 0.003;

    // Mouse parallax movement
    mesh.current.position.x = mouse.x * 0.5;
    mesh.current.position.y = mouse.y * 0.5;
  });

  return (
    <Sphere ref={mesh} args={[1.5, 64, 64]}>
      <meshStandardMaterial wireframe color="#00ffff" />
    </Sphere>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}