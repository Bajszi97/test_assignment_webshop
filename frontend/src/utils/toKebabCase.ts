// export const toKebabCase = (str: string) =>
//     str.match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)
//     ?.filter(Boolean)
//     .map(x => x.toLowerCase())
//     .join('-') ?? str;

export const toKebabCase = (str: string) =>
  str
    .toLowerCase()
    .match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)
    ?.filter(Boolean)
    .join("-") ?? str;
