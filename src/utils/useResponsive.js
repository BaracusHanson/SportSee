import { useState, useEffect } from "react";

/**
 * Custom hook that determines if the screen width is less than or equal to 1024 pixels.
 * 
 * @returns {boolean} - Returns true if the screen width is less than or equal to 1024 pixels, otherwise false.
 * 
 * @example
 * const isLargeScreen = useResponsive();
 * console.log(isLargeScreen); // true or false based on the screen width
 */
const useResponsive = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isLargeScreen;
};

export default useResponsive;
