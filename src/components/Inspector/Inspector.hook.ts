import { MouseEvent, useCallback, useEffect, useRef } from "react";
import { KeyboardKeys } from "./Inspector.types";
import { hasMargin } from "./Inspector.utils";

export const UseInspector = () => {
  const inspectorElementRef = useRef<HTMLElement[]>();

  const handleRemoveInspector = () => {
    Array.from(document.querySelectorAll("[layout-inspector-active]")).forEach(
      (element) => element.removeAttribute("layout-inspector-active")
    );
    Array.from(document.querySelectorAll("marker")).forEach((element) =>
      document.body.removeChild(element)
    );
  };

  const createMarker = () => {
    const marker = document.createElement("marker");
    marker.setAttribute("margin", "margin");

    marker.setAttribute("class", "absolute h-screen w-screen bg-white");
    document.body.appendChild(marker);
  };

  const getMarginElement = (elements: HTMLElement[]) => {
    const elementsWithMargin = elements.filter(hasMargin);
    const firstElement = elementsWithMargin[0];

    if (!firstElement) return;

    firstElement.setAttribute("layout-inspector-active", "true");

    const { marginTop, marginBottom, marginLeft, marginRight } =
      window.getComputedStyle(firstElement);

    const margin = [marginTop, marginBottom, marginLeft, marginRight].map(
      (item) => parseInt(item, 10)
    );

    console.log(margin);
    createMarker();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === KeyboardKeys.ALT) {
      //
    }
  };

  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    if (event.key === KeyboardKeys.ALT) {
      handleRemoveInspector();
    }
  }, []);

  const handleOnMouseOver = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();

    handleRemoveInspector();

    const nodes = document.elementsFromPoint(
      event.clientX,
      event.clientY
    ) as HTMLElement[];

    inspectorElementRef.current = nodes as HTMLElement[];

    if (event.altKey) {
      getMarginElement(nodes);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyUp]);

  return {
    handleOnMouseOver,
  };
};
