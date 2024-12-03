import { createContext, useContext, useState } from "react";

const CharacterAnimationsContext = createContext({
});

export const CharacterAnimationsProvider = ({ children }) => {
  const [animations, setAnimations] = useState([]);
  const [animationIndex, setAnimationIndex] = useState(1);

  return (
    <CharacterAnimationsContext.Provider
      value={{ animationIndex, animations, setAnimationIndex, setAnimations }}
    >
      {children}
    </CharacterAnimationsContext.Provider>
  );
};

export const useCharacterAnimation = () => {
  return useContext(CharacterAnimationsContext);
};
