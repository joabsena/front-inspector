import { isDefined } from ".";

export function hasProperty(
  node: HTMLElement,
  property: keyof CSSStyleDeclaration | (keyof CSSStyleDeclaration)[]
) {
  const styles = window.getComputedStyle(node);

  if (Array.isArray(property)) {
    return property.map((prop) => {
      return isDefined(styles[prop] as string);
    });
  }

  return isDefined(styles[property] as string);
}
