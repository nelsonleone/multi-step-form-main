export const flexObj = ({align,justify,direction}) => `
  display:flex;
  align-items: ${align || 'center'};
  justify-content:${justify || 'space-between'};
  flex-direction: ${direction || 'row'};
`