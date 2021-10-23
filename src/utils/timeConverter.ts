export const timeConverter = (time: number, offset: number): string => {
  const d = new Date(time);
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;
  const nd = new Date(utc + 3600000 * offset);
  return nd.toLocaleString();
};
