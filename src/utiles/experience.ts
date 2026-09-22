export const getExperienceYears = (): string => {
  const joinDate = new Date("2022-02-17");
  const now = new Date();

  const months =
    (now.getFullYear() - joinDate.getFullYear()) * 12 +
    (now.getMonth() - joinDate.getMonth());

  return (months / 12).toFixed(1);
};