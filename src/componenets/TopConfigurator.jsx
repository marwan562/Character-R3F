import { useCharacterCustomization } from "../context/CharacterCustomizationProvider";
import InputColor from "../ui/InputColor";

const TopConfigurator = () => {
  const { shirtColor, setShirtColor } = useCharacterCustomization();
  return (
    <div className=" space-y-2  bg-blue-200 p-2 rounded-md">
      <InputColor color={shirtColor} setColor={setShirtColor}>
        T-Shirt Color
      </InputColor>
    </div>
  );
};

export default TopConfigurator;
