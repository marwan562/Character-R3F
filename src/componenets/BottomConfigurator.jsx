import { useCharacterCustomization } from "../context/CharacterCustomizationProvider";
import InputColor from "../ui/InputColor";

const BottomConfigurator = () => {
  const {
    pantsColor,
    setPantsColor,
    shoesColor,
    setShoesColor,
    lacesColor,
    setLacesColor,
    soleColor,
    setSoleColor,
  } = useCharacterCustomization();
  return (
    <div className=" space-y-2  bg-blue-200 p-2 rounded-md">
      <InputColor color={pantsColor} setColor={setPantsColor}>
        Pants Color
      </InputColor>
      <hr/>
      <InputColor color={shoesColor} setColor={setShoesColor}>
        Shoes Color
      </InputColor>
      <InputColor color={lacesColor} setColor={setLacesColor}>
        Laces Color
      </InputColor>
      <InputColor color={soleColor} setColor={setSoleColor}>
        Sole Color
      </InputColor>
    </div>
  );
};

export default BottomConfigurator;
