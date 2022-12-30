export const getLongestName = (names: string[]) => {
  let initialNameLength = names[0].length;
  let ans = names[0];
  for (let i = 1; i < names.length; i++) {
    const maxi = names[i].length;
    if (maxi > initialNameLength) {
      ans = names[i];
      initialNameLength = maxi;
    }
  }
  return ans;
};
