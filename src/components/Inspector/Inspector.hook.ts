import { MouseEvent, useEffect, useRef } from "react";
import { KeyboardKeys } from "./Inspector.types";

export const UseInspector = () => {
  const inspectorElementRef = useRef<HTMLElement[]>();

  // const getMarginElement = () => {};

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === KeyboardKeys.ALT) {
      console.log("getProperties");
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === KeyboardKeys.ALT) {
      console.log("remove inspect");
    }
  };

  const handleOnMouseOver = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();

    const nodes = document.elementsFromPoint(event.clientX, event.clientY);

    inspectorElementRef.current = nodes as HTMLElement[];

    console.log(nodes);
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return {
    handleOnMouseOver,
  };
};
