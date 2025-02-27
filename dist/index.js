const $36b2882d4dff1950$export$8c212fa8ba78629b = (file, title)=>{
    return `<div class="cdx-attaches cdx-attaches--with-file">
        <div class="cdx-attaches__file-icon">
        <div class="cdx-attaches__file-icon-background">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="fill: none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.32 8.44 9.5 12.19c-.37.36-.57.85-.56 1.37a2.05 2.05 0 0 0 2 1.98c.53 0 1.02-.19 1.39-.55l3.83-3.75a3.75 3.75 0 0 0 1.1-2.74 4.1 4.1 0 0 0-4-3.96 3.85 3.85 0 0 0-2.77 1.1L6.66 9.39A5.63 5.63 0 0 0 5 13.5a6.14 6.14 0 0 0 6 5.94 5.77 5.77 0 0 0 4.17-1.64l3.83-3.75" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </div>
        </div>
        <div class="cdx-attaches__file-info">
        <div class="cdx-attaches__title" data-placeholder="File title">${title}</div>
        </div>
        <a class="cdx-attaches__download-button" href="${file}" target="_blank" rel="nofollow noindex noreferrer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m7 10 4.86 4.86c.08.08.2.08.28 0L17 10" stroke="#000" stroke-width="2" stroke-linecap="round"></path>
        </svg>
        </a>
        </div>`;
};


let $f97f8deda914455a$var$value = '';
const $f97f8deda914455a$export$3ebae31328f22dc5 = (param)=>{
    $f97f8deda914455a$var$value = '';
    param.forEach((items)=>{
        $f97f8deda914455a$var$value += `<div class="ejs-form-check"><input class="ejs-form-check__input" type="radio" name="ejsRadios" id="ejsRadio" value="option1" ${items.checked ? 'checked' : ''}><label class="ejs-form-check__label" for="ejsRadio">${items.text}</label></div>`;
    });
    return $f97f8deda914455a$var$value;
};


const $e4b44153e6cf3ed2$export$6565f9f03506010b = (param)=>{
    return `<pre class="ejs-code-block">${param.data.code}</pre>`;
};


const $5ce53dee6195f307$export$c889f2fcc19dbf12 = ()=>{
    return `<div class="ce-delimiter cdx-block"></div>`;
};


const $6eea23872bc94b47$export$2be46bb7e96db87f = (param)=>{
    let embedValue = '';
    embedValue += `<iframe title="${param.caption}" style="border: none;" width='100%' height='${param.height + 100}' src='${param.embed}'></iframe>`;
    return embedValue;
};


const $f01ac79a478c88f0$export$38e42c68cf43b5d4 = (param, type, alignment)=>{
    let headerValue = '';
    switch(type){
        case 1:
            headerValue += `<h1 style="text-align:${alignment};" class="ce-header ejs-h1">${param}</h1>`;
            break;
        case 2:
            headerValue += `<h2 style="text-align:${alignment};" class="ce-header ejs-h2">${param}</h2>`;
            break;
        case 3:
            headerValue += `<h3 style="text-align:${alignment};" class="ce-header ejs-h3">${param}</h3>`;
            break;
        case 4:
            headerValue += `<h4 style="text-align:${alignment};" class="ce-header ejs-h4">${param}</h4>`;
            break;
        case 5:
            headerValue += `<h5 style="text-align:${alignment};" class="ce-header ejs-h5">${param}</h5>`;
            break;
        case 6:
            headerValue += `<h6 style="text-align:${alignment};" class="ce-header ejs-h6">${param}</h6>`;
            break;
        default:
            headerValue += '';
    }
    return headerValue;
};


const $5dfec52a6397f247$export$5c452ff88e35e47d = (param)=>{
    const imgParams = `${param.stretched ? 'ejs-img__fullwidth' : ''} ${param.withBorder ? 'ejs-image__withBorder' : ''} ${param.withBackground ? 'ejs-img__background' : ''}`;
    return `<div class="cdx-block cdx-image ${imgParams}"><img class="ejs-image img-responsive" src="${param.file.url}" alt="${param.caption}" height="${param.height}" width="${param.width}"></div>`;
};


const $3aa7985ede99463e$export$9c30223ca0a664fb = (param)=>{
    return `<a href='${param}' target='_blank'>${param}</a>`;
};


const $e4dd3b96a2f6d9f9$export$8837f4fc672e936d = (param, style)=>{
    let listValue = '';
    style === 'ordered' ? listValue += `<ol class="cdx-block cdx-list cdx-list--ordered">` : listValue += `<ul class="cdx-block cdx-list cdx-list--unordered">`;
    param.forEach((items)=>{
        listValue += `<li class="cdx-list__item">${items}</li>`;
    });
    style === 'ordered' ? listValue += `</ol>` : listValue += `</ul>`;
    return listValue;
};


const $d0d8e84dbeb34e6f$export$9c206ddddb32a9b = (param, alignment)=>{
    return `<p style="text-align:${alignment};" class="ce-paragraph cdx-block">${param}</p>`;
};


const $5cb9a3fc1d477a24$export$ee7a15c61bfdeb11 = (caption, text)=>{
    let quoteValue = '';
    quoteValue += `<blockquote class="ejs-blockquote">
                    ${text}
                    <footer class="ejs-blockquote__footer">${caption}</footer>
                 </blockquote>`;
    return quoteValue;
};


const $6cede1c531edc031$export$1776c186c69df29e = (param)=>{
    let rawValue = '';
    rawValue += param;
    return rawValue;
};


const $1c5f620bfcf47d1e$export$9852986a3ec5f6a0 = (params)=>{
    let tableHeader = '';
    let tableBody = '';
    let template = '';
    params.data.content[0].forEach((header)=>{
        tableHeader += `<th scope="col">${header}</th>`;
    });
    for(let i = 1; i < params.data.content.length; i++){
        tableBody += `<tr>`;
        params.data.content[i].forEach((body)=>{
            tableBody += `<td>${body}</td>`;
        });
        tableBody += `</tr>`;
    }
    template = `
  <div class="table-responsive">
    <table class='table ejs-table'>
      <caption class="sr-only">Data table</caption>
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


const $e77f67580b962bae$export$491112666e282270 = (params)=>{
    return `<figure id='ejs-warning-figure' class="ejs-warning">
                <figcaption>${params.title}</figcaption>
                <p class="ejs-warning__p">${params.message}</p>
            </figure>`;
};




const $a8e101027d325e52$export$af0ff169fc5a6554 = (value)=>{
    let editorData = '';
    try {
        value.forEach((element)=>{
            switch(element.type){
                case 'attaches':
                    editorData += $36b2882d4dff1950$export$8c212fa8ba78629b(element.data.file.url, element.data.title);
                    break;
                case 'checklist':
                    editorData += $f97f8deda914455a$export$3ebae31328f22dc5(element.data.items);
                    break;
                case 'code':
                    editorData += $e4b44153e6cf3ed2$export$6565f9f03506010b(element);
                    break;
                case 'delimiter':
                    editorData += $5ce53dee6195f307$export$c889f2fcc19dbf12();
                    break;
                case 'embed':
                    editorData += $6eea23872bc94b47$export$2be46bb7e96db87f(element.data);
                    break;
                case 'header':
                    if (element.tunes?.alignment?.alignment) editorData += $f01ac79a478c88f0$export$38e42c68cf43b5d4(element.data.text, element.data.level, element.tunes.alignment.alignment);
                    else editorData += $f01ac79a478c88f0$export$38e42c68cf43b5d4(element.data.text, element.data.level);
                    break;
                case 'image':
                    editorData += $5dfec52a6397f247$export$5c452ff88e35e47d(element.data);
                    break;
                case 'link':
                    editorData += $3aa7985ede99463e$export$9c30223ca0a664fb(element.data.link);
                    break;
                case 'list':
                    editorData += $e4dd3b96a2f6d9f9$export$8837f4fc672e936d(element.data.items, element.data.style);
                    break;
                case 'paragraph':
                    if (element.tunes?.alignment?.alignment) editorData += $d0d8e84dbeb34e6f$export$9c206ddddb32a9b(element.data.text, element.tunes.alignment.alignment);
                    else editorData += $d0d8e84dbeb34e6f$export$9c206ddddb32a9b(element.data.text);
                    break;
                case 'quote':
                    editorData += $5cb9a3fc1d477a24$export$ee7a15c61bfdeb11(element.data.caption, element.data.text);
                    break;
                case 'raw':
                    editorData += $6cede1c531edc031$export$1776c186c69df29e(element.data.html);
                    break;
                case 'table':
                    editorData += $1c5f620bfcf47d1e$export$9852986a3ec5f6a0(element);
                    break;
                case 'warning':
                    editorData += $e77f67580b962bae$export$491112666e282270(element.data);
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
                    Object.entries(element.data.cols).forEach(([key, val])=>{
                        if (key === '0') // @ts-ignore
                        data_0.innerHTML += $a8e101027d325e52$export$af0ff169fc5a6554(val.blocks);
                        if (key === '1') // @ts-ignore
                        data_1.innerHTML += $a8e101027d325e52$export$af0ff169fc5a6554(val.blocks);
                    });
                    editorData += master_div.outerHTML;
                default:
                    editorData += '';
            }
        });
    } catch (error) {
        console.error(error);
    }
    return editorData;
};


export {$a8e101027d325e52$export$af0ff169fc5a6554 as editorJsParser};
//# sourceMappingURL=index.js.map
