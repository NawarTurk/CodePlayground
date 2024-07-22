export function kebabCaseToTitleCase(colorName) {
  const colorNameWithSpaces = colorName.replace(/-/g, " ");
  const colorNameWithCaps = colorNameWithSpaces.replace(/\b[a-z]/g, (match) =>
    match.toUpperCase()
  );
  return colorNameWithCaps;
}
