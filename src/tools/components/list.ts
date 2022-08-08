export const list = (param: any[], style: string) => {
  let listValue = '';
  style === 'ordered' ? listValue += `<ol class="cdx-block cdx-list cdx-list--ordered">` : listValue += `<ul class="cdx-block cdx-list cdx-list--unordered">`
  
  param.forEach((items: any) => {
    listValue += `<li class="cdx-list__item">${items}</li>`;
  });

  style === 'ordered' ? listValue += `</ol>` : listValue += `</ul>`

  return listValue;
};
