import { Woman } from "./Woman";

const Experience = () => {
  return (
    <>
      <group position={[0,-1,0]}>
        <Woman />
      </group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeGeometry args={[170, 170]} />
        <shadowMaterial transparent opacity={0.5} />
      </mesh>
    </>
  );
};

export default Experience;
