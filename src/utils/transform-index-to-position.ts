export function transformIndexToPosition(index: number) {
  const positions = ["top", "right", "bottom", "left"] as const;
  return positions[index];
}
