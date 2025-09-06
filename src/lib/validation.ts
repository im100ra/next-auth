export const isValidIranPhone = (raw: string): boolean => {
  const value = raw.replace(/\s|-/g, "");
  const patterns = [/^09\d{9}$/, /^\+989\d{9}$/, /^00989\d{9}$/];
  return patterns.some((re) => re.test(value));
};
