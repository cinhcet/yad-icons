/**
 * Copyright (c) 2020 cinhcet
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

var fs = require('fs');
var path = require('path');

var allIcons = require('@mdi/js');

var componentPath = path.join(__dirname, '/components');
if(!fs.existsSync(componentPath)) {
  fs.mkdirSync(componentPath);
}

Object.keys(allIcons).forEach(function(iconName) { 
  if(iconName.startsWith('mdi')) {
    var componentName = 'yad-icon-';
    componentName += iconName.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    var s = createTemplate(componentName, allIcons[iconName]);
    var fileName = path.join(componentPath, componentName + '.js');
    fs.writeFile(fileName, s, function(err) {
      if(err) throw err;
    });
  }
});

function createTemplate(componentName, svg) {
  var s = '';
  s += "const template = document.createElement('template');";
  s += "template.innerHTML = `";
  s +=   "<style>";
  s +=     ":host {";
  s +=       "display: inline-block;";
  s +=       "vertical-align: middle;";
  s +=       "width: var(--yad-icon-size, 24px);";
  s +=       "height: var(--yad-icon-size, 24px);";
  s +=     "}";
  s +=   "</style>";
  s +=   '<svg viewBox="0 0 24 24"><path d="' + svg + '"/></svg>';
  s += '`;';
  s += 'window.customElements.define("' + componentName + '", class extends HTMLElement {';
  s +=   'constructor() {';
  s +=     'super();';
  s +=     'this.attachShadow({mode: "open"});';
  s +=     'this.shadowRoot.appendChild(template.content.cloneNode(true));';
  s +=   '}';
  s += '});';
  return s;
}


