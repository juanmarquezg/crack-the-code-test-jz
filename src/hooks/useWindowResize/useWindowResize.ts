import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [isResized, setIsResized] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsResized(window.innerWidth <= 789);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { isResized };
};
