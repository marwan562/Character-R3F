import { useCharacterAnimation } from "../context/CharacterAnimationsProvider";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimation();

  return (
    <div
      className="w-[150px] flex-col  space-y-1  "
      style={{ position: "fixed", bottom: 50, right: 20 }}
    >
      {animations &&
        animations.map((n, i) => (
          <button
            key={i}
            onClick={() => setAnimationIndex(i)}
            className={`   opacity-90 rounded-md   w-full  py-[6px] text-white px-3 text-sm font-semibold ${
              animationIndex === i
                ? " bg-blue-700"
                : "bg-blue-200 text-blue-600"
            }`}
          >
            {n}
          </button>
        ))}
    </div>
  );
};

export default Interface;
