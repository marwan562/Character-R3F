import { createContext, useContext, useState } from "react";

const CharacterCustomizationContext = createContext({});

const CameraModes = {
  Free: "Free",
  Head: "Head",
  Top: "Top",
  Bottom: "Bottom",
};

export const CharacterCustomizationProvider = ({ children }) => {
  const [cameraMode, setCameraMode] = useState(CameraModes.Free);
  const [hairColor, setHairColor] = useState();
  const [eyesColor, setEyesColor] = useState();
  const [mouthColor, setMouthColor] = useState();
  const [glassesColor, setGlassesColor] = useState();
  const [skinColor, setSkinColor] = useState();
  const [shirtColor, setShirtColor] = useState();
  const [pantsColor, setPantsColor] = useState();
  const [shoesColor, setShoesColor] = useState();
  const [lacesColor, setLacesColor] = useState();
  const [soleColor, setSoleColor] = useState();
  const [morphTargetDictionary, setMorphTargetDictionary] = useState([]);
  const [morphTargetInfluences, setMorphTargetInfluences] = useState([]);

  return (
    <CharacterCustomizationContext.Provider
      value={{
        cameraMode,
        setCameraMode,
        hairColor,
        setHairColor,
        mouthColor,
        setMouthColor,
        eyesColor,
        setEyesColor,
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
        morphTargetDictionary,
        setMorphTargetDictionary,
        morphTargetInfluences,
        setMorphTargetInfluences,
        CameraModes
      }}
    >
      {children}
    </CharacterCustomizationContext.Provider>
  );
};

export const useCharacterCustomization = () => {
  return useContext(CharacterCustomizationContext);
};
