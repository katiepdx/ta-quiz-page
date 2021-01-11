// countAsYes
export const countAsYes = (word => {
  const firstLetter = word.charAt(0).toLowerCase();
  if (firstLetter === 'y') {
    return true;
  } else {
    return false;
  }
})
