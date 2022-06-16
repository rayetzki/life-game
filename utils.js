export function exists(char) {
  return !!char;
}

export function range(size) {
  return Array.from({ length: size }, (_, index) => index);
}
