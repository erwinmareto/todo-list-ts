export const formatDate = (dueTime: string): string => {
  const splitTime = dueTime.toLocaleUpperCase().split(":");
  return `${splitTime[0]}:${splitTime[1]}`;
};
