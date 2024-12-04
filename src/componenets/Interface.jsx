import { useCharacterAnimation } from "../context/CharacterAnimationsProvider";
import { useCharacterCustomization } from "../context/CharacterCustomizationProvider";
import BottomConfigurator from "./BottomConfigurator";
import HeadConfigrator from "./HeadConfigrator";
import TopConfigurator from "./TopConfigurator";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimation();

  const { CameraModes, cameraMode, setCameraMode } =
    useCharacterCustomization();

  const loopModesCamera = Object.keys(CameraModes || {});

  return (
    <>
      {/* Customization */}
      <div className=" fixed top-[20px] right-[20px] space-y-2">
        <div className=" flex  space-x-1">
          {loopModesCamera.map((mode, i) => {
            return (
              <button
                key={i}
                onClick={() => setCameraMode(mode)}
                className={`   opacity-90 rounded-md   w-full  py-[6px] px-3 text-sm font-semibold ${
                  cameraMode === mode
                    ? " bg-blue-700  text-white "
                    : "bg-blue-200 text-blue-600"
                }`}
              >
                {mode}
              </button>
            );
          })}
        </div>
        <div>{cameraMode === "Head" && <HeadConfigrator />}</div>
        <div>{cameraMode === "Top" && <TopConfigurator />}</div>
        <div>{cameraMode === "Bottom" && <BottomConfigurator />}</div>
      </div>

      {/* Animations */}
      <div className="w-[150px] flex-col  space-y-1  fixed bottom-[50px] right-[20px] ">
        {animations &&
          animations.map((n, i) => (
            <button
              key={i}
              onClick={() => setAnimationIndex(i)}
              className={`   opacity-90 rounded-md   w-full  py-[6px] px-3 text-sm font-semibold ${
                animationIndex === i
                  ? " bg-blue-700  text-white "
                  : "bg-blue-200 text-blue-600"
              }`}
            >
              {n}
            </button>
          ))}
      </div>
    </>
  );
};

export default Interface;
