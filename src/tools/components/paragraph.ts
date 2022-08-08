export const paragraph = (param: string, alignment?: string) => {
  return `<p style="text-align:${alignment};" class="ce-paragraph cdx-block">${param}</p>`;
};
