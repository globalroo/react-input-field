/*
** Enable array 'style' allocation
** Slightly less messy than spreading inline in the render
*/
export const assignStyles = styles => {
  let mergeStyles = {};
  styles.forEach(styleObject => {
    mergeStyles = { ...mergeStyles, ...styleObject };
  });
  return mergeStyles;
};
