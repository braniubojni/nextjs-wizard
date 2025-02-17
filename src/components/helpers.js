export const createFireFly = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

export const isThreeDaysPassed = (time) => {
  const threeDays = 1000 * 60 * 60 * 24 * 3;
  return Date.now() - parseInt(time, 10) > threeDays;
};
