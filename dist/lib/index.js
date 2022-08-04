function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "editorJsParser", () => $5e2f01247a5d6f10$export$af0ff169fc5a6554);
let $7b2b3cff9cc83f9a$var$value = '';
const $7b2b3cff9cc83f9a$export$3ebae31328f22dc5 = (param)=>{
    $7b2b3cff9cc83f9a$var$value = '';
    param.forEach((items)=>{
        $7b2b3cff9cc83f9a$var$value += `<div class="ejs-form-check"><input class="ejs-form-check__input" type="radio" name="ejsRadios" id="ejsRadio" value="option1" ${items.checked ? 'checked' : ''}><label class="ejs-form-check__label" for="ejsRadio">${items.text}</label></div>`;
    });
    return $7b2b3cff9cc83f9a$var$value;
};


const $7c2b436ef8384983$export$6565f9f03506010b = (param)=>{
    return `<pre class="ejs-code-block">${param.data.code}</pre>`;
};


const $b0dd787dc01bb96b$export$c889f2fcc19dbf12 = ()=>{
    return `<div class="ejs-delimiter"></div>`;
};


const $a9ab435479e985d6$export$2be46bb7e96db87f = (param)=>{
    let embedValue = '';
    embedValue += `<iframe title="${param.caption}" style="border: none;" width='100%' height='${param.height + 100}' src='${param.embed}'></iframe>`;
    return embedValue;
};


const $a8e45e348eee6521$export$38e42c68cf43b5d4 = (param, type, alignment)=>{
    let headerValue = '';
    switch(type){
        case 1:
            headerValue += `<h1 style="text-align:${alignment};" class="ejs-header ejs-h1">${param}</h1>`;
            break;
        case 2:
            headerValue += `<h2 style="text-align:${alignment};" class="ejs-header ejs-h2">${param}</h2>`;
            break;
        case 3:
            headerValue += `<h3 style="text-align:${alignment};" class="ejs-header ejs-h3">${param}</h3>`;
            break;
        case 4:
            headerValue += `<h4 style="text-align:${alignment};" class="ejs-header ejs-h4">${param}</h4>`;
            break;
        case 5:
            headerValue += `<h5 style="text-align:${alignment};" class="ejs-header ejs-h5">${param}</h5>`;
            break;
        case 6:
            headerValue += `<h6 style="text-align:${alignment};" class="ejs-header ejs-h6">${param}</h6>`;
            break;
        default:
            headerValue += '';
    }
    return headerValue;
};


const $09a35277ca4d3315$export$5c452ff88e35e47d = (param)=>{
    const imgParams = `${param.stretched ? 'ejs-img__fullwidth' : ''} ${param.withBorder ? 'ejs-image__withBorder' : ''} ${param.withBackground ? 'ejs-img__background' : ''}`;
    return `<div class="${imgParams}"><img class="ejs-image img-responsive" src="${param.file.url}" alt="${param.caption}" height="${param.height}" width="${param.width}"></div>`;
};


const $a7a4f68e754c4562$export$9c30223ca0a664fb = (param)=>{
    return `<a href='${param}' target='_blank'>${param}</a>`;
};


const $f9f17b47b14a1abb$export$8837f4fc672e936d = (param, style)=>{
    let listValue = '';
    style === 'ordered' ? listValue += `<ol>` : listValue += `<ul>`;
    param.forEach((items)=>{
        listValue += `<li>${items}</li>`;
    });
    style === 'ordered' ? listValue += `</ol>` : listValue += `</ul>`;
    return listValue;
};


const $d64ca58d9dada782$export$9c206ddddb32a9b = (param, alignment)=>{
    return `<p style="text-align:${alignment};" class="ejs-paragraph">${param}</p>`;
};


const $40c3526b1cfe0abe$export$ee7a15c61bfdeb11 = (caption, text)=>{
    let quoteValue = '';
    quoteValue += `<blockquote class="ejs-blockquote">
                    ${text}
                    <footer class="ejs-blockquote__footer">${caption}</footer>
                 </blockquote>`;
    return quoteValue;
};


const $6ed4b226a8fab742$export$1776c186c69df29e = (param)=>{
    let rawValue = '';
    rawValue += param;
    return rawValue;
};


const $2b1e51c69cc2bcb5$export$9852986a3ec5f6a0 = (params)=>{
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


const $734b2aa66deba45f$export$491112666e282270 = (params)=>{
    return `<figure id='ejs-warning-figure' class="ejs-warning">
                <figcaption>${params.title}</figcaption>
                <p class="ejs-warning__p">${params.message}</p>
            </figure>`;
};




const $5e2f01247a5d6f10$export$af0ff169fc5a6554 = (value)=>{
    let editorData = '';
    try {
        value.forEach((element)=>{
            switch(element.type){
                case 'checklist':
                    editorData += $7b2b3cff9cc83f9a$export$3ebae31328f22dc5(element.data.items);
                    break;
                case 'code':
                    editorData += $7c2b436ef8384983$export$6565f9f03506010b(element);
                    break;
                case 'delimiter':
                    editorData += $b0dd787dc01bb96b$export$c889f2fcc19dbf12();
                    break;
                case 'embed':
                    editorData += $a9ab435479e985d6$export$2be46bb7e96db87f(element.data);
                    break;
                case 'header':
                    if (element.tunes?.alignment?.alignment) editorData += $a8e45e348eee6521$export$38e42c68cf43b5d4(element.data.text, element.data.level, element.tunes.alignment.alignment);
                    else editorData += $a8e45e348eee6521$export$38e42c68cf43b5d4(element.data.text, element.data.level);
                    break;
                case 'image':
                    editorData += $09a35277ca4d3315$export$5c452ff88e35e47d(element.data);
                    break;
                case 'link':
                    editorData += $a7a4f68e754c4562$export$9c30223ca0a664fb(element.data.link);
                    break;
                case 'list':
                    editorData += $f9f17b47b14a1abb$export$8837f4fc672e936d(element.data.items, element.data.style);
                    break;
                case 'paragraph':
                    if (element.tunes?.alignment?.alignment) editorData += $d64ca58d9dada782$export$9c206ddddb32a9b(element.data.text, element.tunes.alignment.alignment);
                    else editorData += $d64ca58d9dada782$export$9c206ddddb32a9b(element.data.text);
                    break;
                case 'quote':
                    editorData += $40c3526b1cfe0abe$export$ee7a15c61bfdeb11(element.data.caption, element.data.text);
                    break;
                case 'raw':
                    editorData += $6ed4b226a8fab742$export$1776c186c69df29e(element.data.html);
                    break;
                case 'table':
                    editorData += $2b1e51c69cc2bcb5$export$9852986a3ec5f6a0(element);
                    break;
                case 'warning':
                    editorData += $734b2aa66deba45f$export$491112666e282270(element.data);
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
                        data_0.innerHTML += $5e2f01247a5d6f10$export$af0ff169fc5a6554(val.blocks);
                        if (key === '1') // @ts-ignore
                        data_1.innerHTML += $5e2f01247a5d6f10$export$af0ff169fc5a6554(val.blocks);
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


//# sourceMappingURL=index.js.map
