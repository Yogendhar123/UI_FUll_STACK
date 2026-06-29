// utils/experienceYears.ts
export const getExperienceYears = (): string => {
  const joinDate = new Date("2022-02-17");
  const now = new Date();

  const diff = now.getTime() - joinDate.getTime();
  const years = diff / (1000 * 60 * 60 * 24 * 365.25);

  return years.toFixed(1);
};