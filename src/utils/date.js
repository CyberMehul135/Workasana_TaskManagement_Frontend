export const getDueDate = (createdAt, totalDays) => {
  const date = new Date(createdAt);
  date.setDate(date.getDate() + totalDays - 1);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

export const getRemainingDays = (createdAt, totalDays) => {
  const startDate = new Date(createdAt);
  const dueDate = new Date(startDate);
  dueDate.setDate(dueDate.getDate() + totalDays - 1);

  const today = new Date();

  // Time reset (important for correct day diff)
  today.setHours(0, 0, 0, 0);
  dueDate.setHours(0, 0, 0, 0);

  const diffTime = dueDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays < 0 ? 0 : diffDays;
};
