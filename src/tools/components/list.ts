export const list = (param: any[], style: string) => {
  let listValue = '';
  style === 'ordered' ? listValue += `<ol>` : listValue += `<ul>`
  
  param.forEach((items: any) => {
    listValue += `<li>${items}</li>`;
  });

  style === 'ordered' ? listValue += `</ol>` : listValue += `</ul>`

  return listValue;
};
