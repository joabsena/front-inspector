import { getOffset, transformIndexToPosition } from ".";

export const createMarker = ({
  element,
  margin,
  position,
}: {
  element: HTMLElement;
  margin: number;
  position: ReturnType<typeof transformIndexToPosition>;
}) => {
  const marker = document.createElement("marker");
  marker.appendChild(document.createTextNode(`${margin}`));
  marker.setAttribute("margin", "margin");

  const { left, top } = getOffset(element);
  const { width, height } = element.getBoundingClientRect();

  console.log(position);
  marker.style["left"] = left + "px";
  marker.style["top"] = top - height + margin + "px";

  marker.style["width"] = width + "px";
  marker.style["height"] = height - margin + "px";
  marker.style["marginTop"] = margin.toString() + "px";

  marker.setAttribute(
    "class",
    `absolute border-dotted border-2 border-pink-500 text-white flex items-center justify-center`
  );
  document.body.appendChild(marker);
};
