import {
  attaches,
  checklist,
  code,
  delimiter,
  embed,
  header,
  image,
  link,
  list,
  paragraph,
  quote,
  raw,
  table,
  warning,
} from './tools/index';

const editorJsParser = (value: any[]) => {
  let editorData = '';
  try {
    value.forEach((element: { type?: string; data: any; tunes?: any }) => {
      switch (element.type) {
        case 'attaches':
          editorData += attaches(element.data.file.url, element.data.title)
          break;
        case 'checklist':
          editorData += checklist(element.data.items);
          break;
        case 'code':
          editorData += code(element);
          break;
        case 'delimiter':
          editorData += delimiter()
          break;
        case 'embed':
          editorData += embed(element.data);
          break;
        case 'header':
          if (element.tunes?.alignment?.alignment) {
            editorData += header(element.data.text, element.data.level, element.tunes.alignment.alignment);
          } else {
            editorData += header(element.data.text, element.data.level);
          }
          break;
        case 'image':
          editorData += image(element.data);
          break;
        case 'link':
          editorData += link(element.data.link);
          break;
        case 'list':
          editorData += list(element.data.items, element.data.style);
          break;
        case 'paragraph':
          if (element.tunes?.alignment?.alignment) {
            editorData += paragraph(element.data.text, element.tunes.alignment.alignment);
          } else {
            editorData += paragraph(element.data.text);
          }
          break;
        case 'quote':
          editorData += quote(element.data.caption, element.data.text);
          break;
        case 'raw':
          editorData += raw(element.data.html);
          break;
        case 'table':
          editorData += table(element);
          break;
        case 'warning':
          editorData += warning(element.data);
          break;
        case 'columns':
          let master_div = document.createElement("div");
          master_div.classList.add('m-t-sm', 'flex-container');
          let data_0 = document.createElement("div");
          data_0.classList.add('flex-xs-1');
          let data_1 = document.createElement("div");
          data_1.classList.add('flex-xs-1');
          master_div.appendChild(data_0);
          master_div.appendChild(data_1);
          Object.entries(element.data.cols).forEach(([key, val]) => {
            if (key === '0'){
              // @ts-ignore
              data_0.innerHTML += editorJsParser(val.blocks)
            }
            if(key === '1') {
              // @ts-ignore
              data_1.innerHTML += editorJsParser(val.blocks)
            }     
          });
          editorData += master_div.outerHTML
        default:
          editorData += '';
      }
    });
  } catch (error) {
    console.error(error);
  }

  return editorData;
};

export { editorJsParser };
