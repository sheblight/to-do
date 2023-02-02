(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(81),o=t.n(a),r=t(645),i=t.n(r)()(o());i.push([e.id,":root {\n    --body-color: #526368;\n    --sub-color: #1e2f39;\n    --light-sub-color: #405258;\n    --accent-color: #968a7d;\n    --dark-accent-color: #806742;\n    --text-color: #e4e1cf;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n.hidden {\n    display: none !important;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 15rem 1fr;\n    grid-template-rows: 3.5rem calc(100vh - 3.5rem);\n    background-color: var(--body-color);\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nli {\n    display: flex;\n    list-style: none;\n}\n\n/* preceding icon classes */\n.icon {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\nsvg {\n    width: 2em;\n    height: 2em;\n}\n\n.tag svg {\n    width: 1em;\n    height: 1em;\n}\n\n/* header */\nheader {\n    grid-area: 1/1/1/3;\n    background-color: var(--sub-color);\n}\n\n/* side menu*/\nnav {\n    display: grid;\n    grid-template-columns: auto;\n    grid-template-rows: 2rem auto 3rem 3rem 1fr 5rem;\n    padding-left: 2rem;\n    background-color: var(--light-sub-color);\n}\n\nnav .icon {\n    border: none;\n    background-color: transparent;\n    font-size: 1rem;\n    font-weight: bold;\n    color: var(--text-color);\n    fill: var(--text-color);\n}\n\n.menu-time-options li {\n    padding: 0;\n}\n\nnav input {\n    padding: 0.5rem;\n    width: 60%;  \n    color:var(--text-color)\n}\n\nnav .tag p {\n    width: 60%;\n}\n\n.tag-list li {\n    padding: 0.5em 0 0.5em 2em;\n}\n\n/* main content */\nmain {\n    padding: 2rem 4rem;\n    overflow: auto;\n}\n\ninput {\n    border: none;\n    background-color: transparent;\n}\n\n.divider {\n    border: 2px solid var(--accent-color);\n}\n\n.task-creation {\n    display: grid;\n    grid-template-columns: 10rem 8rem 7rem auto 6rem 6rem;\n    grid-template-rows: 3rem 3rem 3rem;\n    border: 3px solid var(--sub-color);\n    border-radius: 6px;\n    background-color: rgb(11 22 33 / 44%);\n    \n}\n\n.task-creation input::placeholder {\n    color: var(--text-color);\n}\n\n.task-creation select, .task-creation input[type=date], .task-creation .tag-group {\n    margin: 6px;\n    cursor: pointer;\n    border: 2px solid var(--text-color);\n    border-radius: 6px;\n    background-color: rgb(92 105 107 / 51%);\n    color: var(--text-color);\n}\n\n.task-creation p, .task-creation li {\n    padding: 0.5rem;\n    font-size: 0.9rem;\n}\n\n.task-creation li {\n    background-color: #1e2f39;\n}\n\n.task-creation input[type=checkbox] {\n    margin-right: 0.5rem;\n}\n\n.task-creation option {\n    background-color: var(--sub-color);\n    color: var(--text-color);\n}\n\n.task-creation button {\n    margin: 6px;\n    border: none;\n    border-radius: 6px;\n}\n\n.task-entry {\n    display: grid;\n    grid-template-columns: 2rem auto 5rem;\n    grid-template-rows: 2rem 2rem 2rem;\n    color: var(--text-color);\n}\n\n.task-entry button {\n    grid-area: 1/1/3/1;\n    border: none;\n    fill: var(--sub-color);\n    background-color: transparent;\n}\n\n.tag-group {\n    display: flex;\n    gap: 0.5rem;\n    margin-left: 1rem;\n}\n\nmain .icon {\n    border: none;\n    background-color: transparent;\n    font-size: 1rem;\n    font-weight: bold;\n    color: var(--text-color);\n    fill: var(--text-color);\n}\n\n\n/* task modal */\n.task-modal-wrapper, .tag-modal-wrapper {\n    position:fixed;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0,0,0,0.3);\n}\n\n.task-modal, .tag-modal {\n    position: inherit;\n    --modal-width: 300px;\n    --modal-height: 300px;\n    width: var(--modal-width);\n    height: var(--modal-height);\n    bottom: calc(50% - var(--modal-height)/2);\n    right: calc(50% - var(--modal-width)/2);\n    background-color: var(--accent-color);\n    padding: 3rem;\n}\n\n.close {\n    position: absolute;\n    right: 0.5rem;\n    top: 0.5rem;\n    background-color: transparent;\n    border: none;\n    padding: 0;\n}\n\n.task-modal input, .task-modal textarea {\n    background-color: transparent;\n}\n\n",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);a&&i[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),n.push(c))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},i=[],s=0;s<e.length;s++){var d=e[s],l=a.base?d[0]+a.base:d[0],c=r[l]||0,p="".concat(l," ").concat(c);r[l]=c+1;var u=t(p),g={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(g);else{var m=o(g,a);a.byIndex=s,n.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=t(r[i]);n[s].references--}for(var d=a(e,o),l=0;l<r.length;l++){var c=t(r[l]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}r=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},265:(e,n,t)=>{t.d(n,{Z:()=>a});const a=(()=>{function e(e){return document.querySelector(e)}return{query:e,queryAll:function(e){return document.querySelectorAll(e)},createSVGElement:e=>{const n=document.createElementNS("http://www.w3.org/2000/svg","svg"),t=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("d",e.path),n.setAttribute("viewbox","0 0 24 24"),n.appendChild(t),n},setVisible:(n,t=!0)=>{const a=(n=>"string"==typeof n?e(n):n)(n).classList;t?a.remove("hidden"):a.add("hidden")},moveDown:n=>{const t=e(n);t.parentNode.appendChild(t)},setClick:function(n,t){e(n).addEventListener("click",t)},addEntryOfTemplate:function(n,t){const a=e(n).cloneNode(!0),o=e(t);return a.classList.remove("hidden"),o.appendChild(a),a},addTemporaryInput:function(n,t,a=""){const o=document.createElement("input"),r=e(n),i=e(t);if(r||i)return o.style+=a,r.classList.add("hidden"),i.appendChild(o),o.select(),console.log("Swapped out input."),o;console.log("Failed to find element or container")},swapInputWithText:function(n,t,a=!1){const o=e(t);return o.textContent=n.value,o.classList.remove("hidden"),a&&n.remove(),o},elementExists:n=>null!=e(n)}})()},85:(e,n,t)=>{t.d(n,{Z:()=>a});const a=(()=>{function e(){return JSON.parse(window.localStorage.data)||null}return{save:e=>{"object"==typeof e?(window.localStorage.setItem("data",JSON.stringify(e)),console.log("Saved data.")):console.warn("Cannot save data because target data isn't an Object")},updateVersion:(n,t)=>{const a=e()[t];a?n!=a||console.log(`Version is up to date. ${n}`):console.warn("Couldn't find reference to the version on local storage")},clear:()=>{window.localStorage.clear(),console.log("Cleared local data.")},hasExistingData:function(){return window.localStorage.data||!1},getDataCopy:e}})()},214:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(85);const o=function(){var e={version:"0.1.0",user:"Guest",tasks:[{checked:!1,title:"Add New Task",description:'Pressing "Add Task" at the bottom adds a new task.',deadline:"",priority:"None",tags:[{name:"Work",color:"#000000"}]},{checked:!1,title:"Add New Tag",description:'Pressing "Add Tag" on the side menu lets you add a new tag.',deadline:"",priority:"None",tags:[{name:"Work",color:"#000000"}]}],tags:[{name:"Work",color:"#000000"},{name:"Hobby",color:"#000000"},{name:"Shopping",color:"#000000"}],tagColors:["#dd4242","#7abb46","#3d95e2"]};let n,t=0;const o=()=>JSON.parse(JSON.stringify(n));return{getPreviousData:()=>(console.log("Retrieving user data"),a.Z.hasExistingData()?(a.Z.updateVersion(e.version,"version"),n=a.Z.getDataCopy()):n=JSON.parse(JSON.stringify(e)),o()),getDataCopy:o,addNewTag:e=>e.name&&e.color?(n.tags.push(e),a.Z.save(n),e):(console.error("Extracted invalid tag format"),null),addNewTask:e=>null!=e.checked&&"string"==typeof e.title&&"string"==typeof e.description&&"string"==typeof e.deadline&&"string"==typeof e.priority&&e.tags?(e.id=t++,n.tasks.push(e),a.Z.save(n),e):(console.error("Extracted invalid task format"),null),resetData:()=>(n=JSON.parse(JSON.stringify(e)),a.Z.save(n),o())}}()},513:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(265);const o=(()=>{const e=a.Z.query(".task-list"),n=a.Z.query("nav ul.tag-list"),t=a.Z.query(".tag-modal-wrapper"),o=a.Z.query(".task-creation"),r=a.Z.query(".tag-group ul");a.Z.query(".task-modal-wrapper");const i=e=>{const n=document.createElement("li"),t=document.createElement("div"),o=document.createElement("p"),r=a.Z.createSVGElement({path:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"});return t.classList.add("tag"),t.classList.add("icon"),o.textContent=e.name,t.appendChild(r),t.appendChild(o),n.appendChild(t),n},s=(e,t)=>{n.appendChild(i(e)),console.log(`Added ${e.name}`)},d=(n,t)=>{e.appendChild((e=>{const n=document.createElement("div");n.style="margin: 2rem;",n.classList.add("task-entry"),n.appendChild((()=>{const e=document.createElement("button"),n=a.Z.createSVGElement({path:"M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}),t=a.Z.createSVGElement({path:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"});return e.classList.add("task-check"),t.classList.add("hidden"),e.appendChild(n),e.appendChild(t),e})());const t=(e,n,t,a)=>{const o=document.createElement(e);return o.classList.add(n),o.style=t,o.textContent=a,o};n.appendChild(t("p","title","grid-area: 1/2/1/2; margin-left: 1rem; font-size: 1.5rem; font-weight: 600;",e.title)),n.appendChild(t("p","description","grid-area: 2/2/2/2; margin-left: 1rem;",e.description)),n.appendChild(t("p","deadline","grid-area: 2/3/2/3;",e.deadline));const o=t("div","tag-group","grid-area: 3/2/3/2; margin-left: 1rem;","");return e.tags.forEach((e=>{o.appendChild(i(e))})),n.appendChild(o),n.appendChild(t("p","priority","grid-area: 3/3/3/3;",e.priority)),n})(n)),console.log(`Added ${n.title}`)};return{querySelected:e=>{const n=e.length;let t=Promise.resolve([]);for(let o=0;o<n;o++)t=t.then((n=>n.concat(a.Z.query(e[o]))));return t},generateSideMenuTags:(e,t)=>{n.replaceChildren(),e.forEach((e=>{s(e)}))},generateHomeView:(n,t)=>{e.replaceChildren(),n.forEach((e=>{d(e)}))},openTagModal:()=>{a.Z.setVisible(t)},closeTagModal:()=>{a.Z.setVisible(t,!1)},extractTag:()=>{const e=document.forms.newTagForm;return{name:e.name.value,color:e.color}},addNewTag:s,openTaskCreation:()=>{a.Z.setVisible(o)},closeTaskCreation:()=>{a.Z.setVisible(o,!1)},extractTask:()=>{const e={checked:!1},n=document.forms.newTaskForm;["title","description","deadline","priority"].forEach((t=>e[t]=n[t].value)),a.Z.queryAll(".task-group"),e.tags=[];for(const n of r.children)n.children[0].checked&&e.tags.push({name:n.dataset.name,color:n.dataset.color});return console.log(e),e},addNewTask:d,loadTagsInTaskCreation:e=>{r.replaceChildren(),e.forEach((e=>{const n=document.createElement("li"),t=document.createElement("input"),a=document.createElement("p");n.classList.add("tag-item"),n.dataset.name=e.name,n.dataset.color=e.color,t.type="checkbox",t.name=e.name,a.textContent=e.name,n.appendChild(t),n.appendChild(a),r.append(n)}))},toggleTaskListDropdown:()=>{a.Z.setVisible(r,r.classList.contains("hidden"))}}})()}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),o=t.n(a),r=t(569),i=t.n(r),s=t(565),d=t.n(s),l=t(216),c=t.n(l),p=t(589),u=t.n(p),g=t(426),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=c(),n()(g.Z,m),g.Z&&g.Z.locals&&g.Z.locals;var h=t(214),f=t(513);const v=h.Z.getPreviousData();f.Z.generateSideMenuTags(v.tags,(()=>{})),f.Z.generateHomeView(v.tasks,(()=>{}));const k={goToHome:()=>{f.Z.generateHomeView(h.Z.getDataCopy().tasks),console.log("Load home view.")},addTag:()=>{f.Z.openTagModal()},closeTagModal:()=>{f.Z.closeTagModal()},submitTag:()=>{f.Z.addNewTag(h.Z.addNewTag(f.Z.extractTag()),(()=>{})),f.Z.closeTagModal()},clearAll:function(){Promise.resolve(h.Z.resetData()).then((e=>{f.Z.generateSideMenuTags(e.tags),f.Z.generateHomeView(e.tasks)}))},newTask:()=>{f.Z.loadTagsInTaskCreation(h.Z.getDataCopy().tags),f.Z.openTaskCreation()},toggleSelectTag:()=>{f.Z.toggleTaskListDropdown()},closeTaskCreation:()=>{f.Z.closeTaskCreation()},createTask:()=>{f.Z.addNewTask(h.Z.addNewTask(f.Z.extractTask()),(()=>{})),f.Z.closeTaskCreation()},updateTask:()=>{},closeTaskModal:()=>{},removeTask:()=>{}},b=new Map([[".menu-time-options li:first-child",k.goToHome],[".tag-add",k.addTag],["button.data-clear",k.clearAll],["main button.add",k.newTask],[".task-creation .tag-group p",k.toggleSelectTag],[".task-creation .cancel",k.closeTaskCreation],[".task-creation .submit",k.createTask],[".task-modal button.close",k.closeTaskModal],[".tag-modal .cancel",k.closeTagModal],[".tag-modal .submit",k.submitTag],[".tag-modal button.close",k.closeTagModal]]),y=Array.from(b,(e=>e[0]));f.Z.querySelected(y).then((e=>{for(let n=0;n<y.length;n++)e[n].addEventListener("click",b.get(y[n]))})),console.log(v)})()})();