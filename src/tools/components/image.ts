interface ImgTypes {
  stretched: boolean;
  withBorder: boolean;
  withBackground: boolean;
  file: {
    url: string;
  };
  caption: string;
  height: string;
  width: string;
}

export const image = (param: ImgTypes) => {
  const imgParams = `${param.stretched ? 'ejs-img__fullwidth' : ''} ${
    param.withBorder ? 'ejs-image__withBorder' : ''
  } ${param.withBackground ? 'ejs-img__background' : ''}`;

  return `<div class="${imgParams}"><img class="ejs-image img-responsive" src="${param.file.url}" alt="${param.caption}" height="${param.height}" alt="${param.width}"></div>`;
};
