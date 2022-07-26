export const embed = (param: { height: number; embed: any; caption: string; }) => {
  let embedValue = '';
  embedValue += `<iframe title="${param.caption}" style="border: none;" width='100%' height='${
    param.height + 100
  }' src='${param.embed}'></iframe>`;
  return embedValue;
};
