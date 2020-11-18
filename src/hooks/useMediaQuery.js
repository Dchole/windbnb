import { useCallback, useEffect, useState } from "react";

const breakpoints = { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 };

const useMediaQuery = breakpoint => {
  const [media, setMedia] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const handleResize = useCallback(
    () => setViewportWidth(window.innerWidth),
    []
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (viewportWidth <= breakpoints[breakpoint]) setMedia(true);
    else setMedia(false);
  }, [breakpoint, viewportWidth]);

  return media;
};

export default useMediaQuery;
