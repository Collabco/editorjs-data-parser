# EditorJs Data Parser

Easyly convert json data from editorjs to html elements

# installaton
 `npm i editorjs-data-parser`
 
 `yarn add editorjs-data-parser`

# Suppoted tools

* :white_check_mark: checklist
* :white_check_mark: embed
* :white_check_mark: head
* :white_check_mark: link
* :white_check_mark: list
* :white_check_mark: paragraph
* :white_check_mark: quote
* :white_check_mark: raw
* :white_check_mark: table
* :white_check_mark: code
* :white_check_mark: warning
* :negative_squared_cross_mark: delimeter (next update)

# Usage example



```javascript
import  { edtiorJSParser } from 'editorjs-data-parser';
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";

const editor = new EditorJS({
  holderId: "editorJS",
  tools: {
    header: {
      class: Header,
      inlineToolbar: ["link"]
    },
    list: {
      class: List,
      inlineToolbar: true
    },
    embed: {
      class: Embed,
      inlineToolbar: false,
      config: {
        services: {
          youtube: true,
          coub: true
        }
      }
    }
  }
});

let btnSaves = document.getElementById("btnSaves");
btnSaves.addEventListener("click", () => {
  editor.save().then(outputData => {
    console.log(edtiorJSParser(outputData.blocks));
  });
});
```

**Output will be HTML blocks**
