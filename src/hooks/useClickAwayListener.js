import { useCallback, useEffect, useState } from "react";

const useClickAwayListener = () => {
  const [clickedAway, setClickedAway] = useState(false);

  const handleClickAway = useCallback(event => {
    if (event.target.id === "backdrop") setClickedAway(true);
  }, []);

  const handleEscPress = event => {
    if (event.key === "Escape") setClickedAway(true);
  };

  useEffect(() => {
    window.addEventListener("click", handleClickAway);
    window.addEventListener("keydown", handleEscPress);

    return () => {
      window.removeEventListener("click", handleClickAway);
      window.removeEventListener("keydown", handleEscPress);
    };
  }, [handleClickAway]);

  return clickedAway;
};

export default useClickAwayListener;
