export const sliceResult = (
  value: string,
  sections: number,
  sectionLength: number
) => {
  const results = [];

  for (let i = 0; i < sections; i++) {
    results.push(value.slice(i * sectionLength, (i + 1) * sectionLength));
  }
  return results;
};

export const regexFilter = (
  value: number | string,
  type: RegexDataType
): string => {
  if (type === "allow-all") return String(value);
  const regex = type === "number" ? /[^0-9]/g : /[^a-zA-Z0-9]/g;

  return String(value)?.replaceAll(regex, "");
};
