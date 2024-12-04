import { useEffect } from "react";
import { useCharacterCustomization } from "../context/CharacterCustomizationProvider";
import { Woman } from "./Woman";
import { useThree } from "@react-three/fiber";

const Experience = () => {
  const { gl } = useThree();
  const { takeScreenShot, setTakeScreenShot } = useCharacterCustomization();

  const ScreenShot = () => {
    const link = document.createElement("a");
    link.setAttribute("download", "screenshot.png");
    link.setAttribute(
      "href",
      gl.domElement
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream")
    );
    link.click();

    setTimeout(() => {
      setTakeScreenShot(false);
    }, 2000);
  };

  useEffect(() => {
    if (takeScreenShot) ScreenShot();
  }, [takeScreenShot]);
  return (
    <>
      <group position={[0, -1, 0]}>
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
