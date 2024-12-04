import { OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";
import { useCharacterCustomization } from "../context/CharacterCustomizationProvider";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CameraControls = () => {
  const orbitControlsRef = useRef();
  const { CameraModes, cameraMode } = useCharacterCustomization();

  const cameraPosition = {
    [CameraModes.Free]: {
      position: new THREE.Vector3(1, 1.5, 2.9),
      target: new THREE.Vector3(0, 0, 0),
    },
    [CameraModes.Head]: {
      position: new THREE.Vector3(0, 0.5, 0.9),
      target: new THREE.Vector3(0, 0.5, 0),
    },
    [CameraModes.Top]: {
      position: new THREE.Vector3(0, 0.4, 1.2),
      target: new THREE.Vector3(0, 0.2, 0),
    },
    [CameraModes.Bottom]: {
      position: new THREE.Vector3(0, -0.5, 1.7),
      target: new THREE.Vector3(0, -0.5, 0),
    },
  };

  useFrame(({ camera, scene }, delta) => {
    camera.position.lerp(cameraPosition[cameraMode].position, 3 * delta);
    orbitControlsRef.current.target.lerp(
      cameraPosition[cameraMode].target,
      3 * delta
    );
  });
  return (
    <>
      <OrbitControls ref={orbitControlsRef} />
    </>
  );
};

export default CameraControls;
