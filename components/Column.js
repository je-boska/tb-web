import { useGLTF } from '@react-three/drei';

export default function Column() {
  const { nodes, materials } = useGLTF('/column.gltf');

  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Column.geometry}
        material={materials.Column}
        position={[0, 0.5, 0]}
      />
    </group>
  );
}
