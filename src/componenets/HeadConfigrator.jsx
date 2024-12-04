import { useCharacterCustomization } from "../context/CharacterCustomizationProvider";
import InputColor from "../ui/InputColor";

const HeadConfigrator = () => {
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
  } = useCharacterCustomization();
  return (
    <div className=" space-y-2  bg-blue-200 p-2 rounded-md">
      {/* Hair Customization */}
      <InputColor color={hairColor} setColor={setHairColor}>
        Hair Color
      </InputColor>

      {/* Eye Customization */}
      <InputColor color={eyesColor} setColor={setEyesColor}>
        Eyes Color
      </InputColor>

      {/* Glass Customization */}
      <InputColor color={glassesColor} setColor={setGlassesColor}>
        EyeGlass Color
      </InputColor>

      {/* Mouth Customization */}
      <InputColor color={mouthColor} setColor={setMouthColor}>
        Mouth Color
      </InputColor>

      {/* Skin Customization */}
      <InputColor color={skinColor} setColor={setSkinColor}>
        Skin Color
      </InputColor>

      
    </div>
  );
};

export default HeadConfigrator;
