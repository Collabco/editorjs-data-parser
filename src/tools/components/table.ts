export const table = (params: { data: { content: string[][] } }) => {
  let tableHeader = '';
  let tableBody = '';
  let template = '';

  params.data.content[0].forEach((header: string) => {
    tableHeader += `<th scope="col">${header}</th>`;
  });

  for (let i = 1; i < params.data.content.length; i++) {
    tableBody += `<tr>`;

    params.data.content[i].forEach((body) => {
      tableBody += `<td>${body}</td>`;
    });
    tableBody += `</tr>`;
  }

  template = `
  <div class="table-responsive">
    <table class='table ejs-table'>
      <caption>Data table</caption>
        <thead class='ejs-table__thead'>
            <tr>
                ${tableHeader}
            <tr>
        </thead>
        <tbody class="ejs-table__body">
            ${tableBody}
        </tbody>
    </table>
  </div>
  `;

  return template;
};
