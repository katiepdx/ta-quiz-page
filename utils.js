// countAsYes
export const countAsYes = (word => {
  const firstLetter = word.charAt(0).toLowerCase();
  if (firstLetter === 'y') {
    return true;
  } else {
    return false;
  }
})

export const percentScore = (score => {
  const decimalScore = Math.trunc((score / 3) * 100);
  const percentScore = `${decimalScore}%`;
  return percentScore;
})
