import GlitchText from '@/components/GlitchText';
import Head from 'next/head';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useState } from 'react';
import { Html, OrbitControls, useProgress } from '@react-three/drei';

const Tablet = () => {
  const tablet = useLoader(GLTFLoader, '/tablet.gltf');

  return (
    <>
      <primitive object={tablet.scene} />
    </>
  );
};

const Room = () => {
  const room = useLoader(GLTFLoader, '/room.gltf');
  room.scene.traverse((node) => {
    if (node.isObject3D) {
      node.receiveShadow = true;
    }
  });

  return (
    <>
      <primitive object={room.scene} />
    </>
  );
};

const BlinkingLight = () => {
  const [redLightIntensity, setRedLightIntensity] = useState(0);

  useFrame(() => {
    setRedLightIntensity(Number(Math.random().toFixed(1)));
  });

  return (
    <pointLight
      color={[1, 0, 0]}
      intensity={redLightIntensity}
      position={[1, -2, 4]}
      castShadow
    />
  );
};

function Loader() {
  const { progress } = useProgress();
  return <Html className='text-white'>{progress.toFixed(0)}%</Html>;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Theresa Baumgartner</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Canvas
        style={{ position: 'absolute', height: '100vh' }}
        camera={{ position: [4, 4, 1.5] }}
        shadows
      >
        <Suspense fallback={<Loader />}>
          <Room />
          <OrbitControls />
          {/* <directionalLight
            intensity={5}
            position={[2.5, 3.5, 2.5]}
            castShadow
          /> */}
          {/* <BlinkingLight /> */}
          <pointLight
            color={[0.7, 1, 0.7]}
            intensity={1}
            position={[2, -2, 4]}
            castShadow
          />
        </Suspense>
      </Canvas>
      <main>
        <div className='flex h-[100vh] w-full items-center justify-center'>
          <div className='w-96'></div>
        </div>
      </main>
    </>
  );
}
