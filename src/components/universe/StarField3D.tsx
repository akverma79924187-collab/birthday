'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Text } from '@react-three/drei';
import * as THREE from 'three';
import { BIRTHDAY_DATA } from '@/data/content';

function OrbitingStars(props: any) {
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() => {
    const coords = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000 * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 8;
      coords[i] = r * Math.sin(phi) * Math.cos(theta);
      coords[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      coords[i + 2] = r * Math.cos(phi);
    }
    return coords;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#e6ca85"
          size={0.035}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function StarField3D() {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const isSupported = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      setHasWebGL(isSupported);
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return (
      <div className="w-full h-[500px] flex items-center justify-center bg-radial from-[#120e1e] to-[#07060a] rounded-3xl border border-[#e6ca85]/30">
        <div className="text-center space-y-4">
          <h2 className="font-serif-display text-5xl font-bold text-gold-gradient">
            {BIRTHDAY_DATA.herName}
          </h2>
          <p className="font-serif-display text-[#df95a6] italic">
            In every universe, I&apos;d choose you.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[550px] sm:h-[650px] relative rounded-3xl overflow-hidden border border-[#e6ca85]/30 shadow-[0_0_50px_rgba(230,202,133,0.15)] bg-[#07060a]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <OrbitingStars />

        {/* Floating 3D Text Name in Center */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Text
            font="https://fonts.gstatic.com/s/cormorantgaramond/v16/co3bmX5slLCN5-_4h4AogW3-C4S9_H0.woff"
            fontSize={0.8}
            color="#e6ca85"
            anchorX="center"
            anchorY="middle"
          >
            {BIRTHDAY_DATA.herName}
          </Text>
        </Float>
      </Canvas>

      {/* Floating 3D Universe Watermark Note */}
      <div className="absolute bottom-6 inset-x-0 text-center pointer-events-none">
        <span className="font-serif-display text-sm sm:text-base text-stone-300 italic px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
          Drag cursor or touch to rotate 3D camera
        </span>
      </div>
    </div>
  );
}
