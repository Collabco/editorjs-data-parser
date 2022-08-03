export const paragraph = (param: string, alignment?: string) => {
  return `<p style="text-align:${alignment};" class="ejs-paragraph">${param}</p>`;
};
