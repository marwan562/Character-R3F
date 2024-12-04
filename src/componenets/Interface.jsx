import { motion } from "framer-motion";
import { useCharacterAnimation } from "../context/CharacterAnimationsProvider";
import { useCharacterCustomization } from "../context/CharacterCustomizationProvider";
import BottomConfigurator from "./BottomConfigurator";
import HeadConfigrator from "./HeadConfigrator";
import TopConfigurator from "./TopConfigurator";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimation();

  const {
    CameraModes,
    cameraMode,
    setCameraMode,
    takeScreenShot,
    setTakeScreenShot,
  } = useCharacterCustomization();

  const loopModesCamera = Object.keys(CameraModes || {});

  const buttonVariants = {
    initial: { scale: 1, opacity: 0.9 },
    hover: { scale: 1.05, opacity: 1 },
    tap: { scale: 0.95 },
  };

  const iconVariants = {
    hidden: { opacity: 0, rotate: -90, scale: 0 },
    visible: { opacity: 1, rotate: 0, scale: 1 },
  };

  return (
    <>
      {/* Customization */}
      <div className=" fixed top-[20px] right-[20px] space-y-2">
        <div className=" flex  space-x-1">
          <motion.button
            onClick={() => setTakeScreenShot(true)}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className={`opacity-90 rounded-md w-full py-[6px] px-3 text-sm font-semibold  text-white  ${
              takeScreenShot
                ? "bg-green-500 hover:bg-green-200 hover:text-green-600 "
                : "bg-blue-700 hover:bg-blue-200 hover:text-blue-600 "
            }`}
          >
            <motion.div
              key={takeScreenShot ? "aperture" : "camera"}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={iconVariants}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {!takeScreenShot ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-camera"
                >
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-aperture"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m14.31 8 5.74 9.94" />
                  <path d="M9.69 8h11.48" />
                  <path d="m7.38 12 5.74-9.94" />
                  <path d="M9.69 16 3.95 6.06" />
                  <path d="M14.31 16H2.83" />
                  <path d="m16.62 12-5.74 9.94" />
                </svg>
              )}
            </motion.div>
          </motion.button>
          {loopModesCamera.map((mode, i) => {
            return (
              <button
                key={i}
                onClick={() => setCameraMode(mode)}
                className={`   opacity-90 rounded-md  w-full   py-[6px] px-3 text-sm font-semibold ${
                  cameraMode === mode
                    ? " bg-blue-700  text-white "
                    : "bg-blue-200 text-blue-600 hover:bg-blue-700 hover:text-white  "
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
