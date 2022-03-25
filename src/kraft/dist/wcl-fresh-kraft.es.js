import e from"react";import t from"styled-components";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function r(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r}const o=t.button`
  border: 0;
  line-height: 1.5;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;

  opacity: ${e=>e.disabled?.5:1};
  &:hover {
  }
  &:active {
  }
`,n=t((t=>{var{disabled:n,onClick:i,children:l}=t,c=r(t,["disabled","onClick","children"]);return e.createElement(o,Object.assign({type:"button",onClick:i,disabled:n},c),l)}))`
  border: 5px solid ${({theme:e})=>e.contentSecondary};
  background-color: white;
  color: ${({theme:e})=>e.contentPrimary};
  font-weight: 800;
  font-size: 28px;
  padding: 6px 12px;
  border-radius: 50%;
`,i=t=>{var{disabled:o,onClick:i,children:l}=t,c=r(t,["disabled","onClick","children"]);return e.createElement(n,Object.assign({onClick:i,disabled:o},c),l)};export{i as KraftButton};
//# sourceMappingURL=wcl-fresh-kraft.es.js.map
