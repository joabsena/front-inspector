export function isDefined(margin: string) {
  return !!parseInt(margin, 10);
}

export function hasMargin(node: HTMLElement) {
  const styles = window.getComputedStyle(node);

  return (
    isDefined(styles.marginTop) ||
    isDefined(styles.marginRight) ||
    isDefined(styles.marginBottom) ||
    isDefined(styles.marginLeft) ||
    isDefined(styles.margin)
  );
}

export function hasPadding(node: HTMLElement) {
  const styles = window.getComputedStyle(node);

  return (
    isDefined(styles.paddingTop) ||
    isDefined(styles.paddingRight) ||
    isDefined(styles.paddingBottom) ||
    isDefined(styles.paddingLeft) ||
    isDefined(styles.padding)
  );
}

export function hasSize(node: HTMLElement) {
  const styles = window.getComputedStyle(node);

  return isDefined(styles.width) && isDefined(styles.height);
}
