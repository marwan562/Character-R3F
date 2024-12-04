import React, { useEffect } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import { useCharacterAnimation } from "../context/CharacterAnimationsProvider";
import { useCharacterCustomization } from "../context/CharacterCustomizationProvider";

export function Woman(props) {
  const group = React.useRef();
  const { scene, animations } = useGLTF("/models/woman.gltf");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions, names } = useAnimations(animations, group);
  const { setAnimations, animationIndex } = useCharacterAnimation();
  const {
    hairColor,
    setHairColor,
    eyesColor,
    setEyesColor,
    mouthColor,
    setMouthColor,
    glassesColor,
    setGlassesColor,
    skinColor,
    setSkinColor,
    shirtColor,
    setShirtColor,
    pantsColor,
    setPantsColor,
    shoesColor,
    setShoesColor,
    lacesColor,
    setLacesColor,
    soleColor,
    setSoleColor,
  } = useCharacterCustomization();

  useEffect(() => {
    setAnimations(names);
  }, []);

  

  useEffect(() => {

    setHairColor(`#${materials.Hair.color.getHexString()}`);
    setEyesColor(`#${materials.Eyes.color.getHexString()}`);
    setMouthColor(`#${materials.Mouth.color.getHexString()}`);
    setGlassesColor(`#${materials.Glasses.color.getHexString()}`);
    setSkinColor(`#${materials.Skin.color.getHexString()}`);
    setShirtColor(`#${materials.Shirt.color.getHexString()}`);
    setPantsColor(`#${materials.Pants.color.getHexString()}`);
    setShoesColor(`#${materials.Shoes.color.getHexString()}`);
    setLacesColor(`#${materials.Laces.color.getHexString()}`);
    setSoleColor(`#${materials.Sole.color.getHexString()}`);
  }, []);

  useEffect(() => {
    if (actions) actions[names[animationIndex]].reset().fadeIn(0.5).play();

    return () => {
      if (actions) actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [animationIndex]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <group name="SM_Chr_Developer_Female_02">
            <skinnedMesh
              castShadow
              name="Mesh019"
              geometry={nodes.Mesh019.geometry}
              {...materials.Glasses}
              skeleton={nodes.Mesh019.skeleton}
            >
              <meshStandardMaterial color={glassesColor} />
            </skinnedMesh>
            <skinnedMesh
              castShadow
              name="Mesh019_1"
              geometry={nodes.Mesh019_1.geometry}
              skeleton={nodes.Mesh019_1.skeleton}
            >
              <meshStandardMaterial {...materials.Eyes} color={eyesColor} />
            </skinnedMesh>
            <skinnedMesh
              castShadow
              name="Mesh019_2"
              geometry={nodes.Mesh019_2.geometry}
              skeleton={nodes.Mesh019_2.skeleton}
            >
              <meshStandardMaterial {...materials.Hair} color={hairColor} />
            </skinnedMesh>
            <skinnedMesh
              castShadow
              name="Mesh019_3"
              geometry={nodes.Mesh019_3.geometry}
              material={materials.Skin}
              skeleton={nodes.Mesh019_3.skeleton}
            >
              <meshStandardMaterial color={skinColor} />
            </skinnedMesh>
            <skinnedMesh
              castShadow
              name="Mesh019_4"
              {...materials.Mouth}
              geometry={nodes.Mesh019_4.geometry}
              skeleton={nodes.Mesh019_4.skeleton}
            >
              <meshStandardMaterial color={mouthColor} />
            </skinnedMesh>
            <skinnedMesh
              castShadow
              name="Mesh019_5"
              geometry={nodes.Mesh019_5.geometry}
              material={materials.Shirt}
              skeleton={nodes.Mesh019_5.skeleton}
            >
              <meshStandardMaterial color={shirtColor} />
            </skinnedMesh>
            <skinnedMesh
              castShadow
              name="Mesh019_6"
              geometry={nodes.Mesh019_6.geometry}
              material={materials.Pants}
              skeleton={nodes.Mesh019_6.skeleton}
            >
              <meshStandardMaterial color={pantsColor} />
            </skinnedMesh>
            <skinnedMesh
              castShadow
              name="Mesh019_7"
              geometry={nodes.Mesh019_7.geometry}
              material={materials.Shoes}
              skeleton={nodes.Mesh019_7.skeleton}
            >
              <meshStandardMaterial color={shoesColor} />
            </skinnedMesh>
            <skinnedMesh
              castShadow
              name="Mesh019_8"
              geometry={nodes.Mesh019_8.geometry}
              material={materials.Sole}
              skeleton={nodes.Mesh019_8.skeleton}
            >
              <meshStandardMaterial color={soleColor} />
            </skinnedMesh>
            <skinnedMesh
              castShadow
              name="Mesh019_9"
              geometry={nodes.Mesh019_9.geometry}
              material={materials.Laces}
              skeleton={nodes.Mesh019_9.skeleton}
            >
                <meshStandardMaterial color={lacesColor} />
            </skinnedMesh>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/woman.gltf");
