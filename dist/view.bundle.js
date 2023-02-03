(()=>{"use strict";var e,t={265:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(()=>{function e(e){return document.querySelector(e)}return{query:e,queryAll:function(e){return document.querySelectorAll(e)},createSVGElement:e=>{const t=document.createElementNS("http://www.w3.org/2000/svg","svg"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("d",e.path),t.setAttribute("viewbox","0 0 24 24"),t.appendChild(r),t},setVisible:(t,r=!0)=>{const n=(t=>"string"==typeof t?e(t):t)(t).classList;r?n.remove("hidden"):n.add("hidden")},moveDown:t=>{const r=e(t);r.parentNode.appendChild(r)},setClick:function(t,r){e(t).addEventListener("click",r)},addEntryOfTemplate:function(t,r){const n=e(t).cloneNode(!0),o=e(r);return n.classList.remove("hidden"),o.appendChild(n),n},addTemporaryInput:function(t,r,n=""){const o=document.createElement("input"),a=e(t),s=e(r);if(a||s)return o.style+=n,a.classList.add("hidden"),s.appendChild(o),o.select(),console.log("Swapped out input."),o;console.log("Failed to find element or container")},swapInputWithText:function(t,r,n=!1){const o=e(r);return o.textContent=t.value,o.classList.remove("hidden"),n&&t.remove(),o},elementExists:t=>null!=e(t)}})()}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(e=n(265)).Z.query(".task-list"),e.Z.query("nav ul.tag-list"),e.Z.query(".tag-modal-wrapper"),e.Z.query(".task-creation"),e.Z.query(".tag-group ul"),e.Z.query(".task-modal-wrapper"),e.Z.query(".task-modal"),e.Z.query(".task-modal-wrapper .checked"),e.Z.query(".task-modal-wrapper .title"),e.Z.query(".task-modal-wrapper .description"),e.Z.query(".task-modal-wrapper .tags"),e.Z.query(".task-modal-wrapper .deadline"),e.Z.query(".task-modal-wrapper .priority")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUIsZ0NBQ25CLFVBQWlCLDhCQUNYLFVBQWlCLG9DQUN4QixVQUFpQiw2QkFDYixVQUFpQixpQ0FDakIsVUFBaUIsZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9kb21NYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcblxuTW9kdWxlIGZvciBoYW5kbGluZyByZWR1bmRhbnQgRE9NIHRhc2tzLlxuXG4qL1xuY29uc3QgZG9tTWFuYWdlciA9ICgoKT0+e1xuICAgIGZ1bmN0aW9uIHF1ZXJ5KHNlbGVjdG9yKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTsgfVxuICAgIGZ1bmN0aW9uIHF1ZXJ5QWxsKHNlbGVjdG9yKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTsgfVxuICAgIGNvbnN0IGVsZW1lbnRFeGlzdHMgPSAoc2VsZWN0b3IpID0+IHF1ZXJ5KHNlbGVjdG9yKSAhPSBudWxsO1xuICAgIGNvbnN0IHF1ZXJ5SWZTZWxlY3RvciA9IChzZWxlY3Rvcik9PnsgcmV0dXJuIHR5cGVvZiBzZWxlY3RvciA9PSBcInN0cmluZ1wiID8gcXVlcnkoc2VsZWN0b3IpIDogc2VsZWN0b3I7IH07XG4gICAgXG4gICAgY29uc3QgY3JlYXRlU1ZHRWxlbWVudCA9IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsICdzdmcnKTtcbiAgICAgICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsICdwYXRoJyk7XG4gICAgICAgIHBhdGguc2V0QXR0cmlidXRlKFwiZFwiLCBkYXRhLnBhdGgpO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKFwidmlld2JveFwiLCBcIjAgMCAyNCAyNFwiKTtcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRDbGljayA9IGZ1bmN0aW9uKGVsZW1lbnRTZWxlY3RvciwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHF1ZXJ5KGVsZW1lbnRTZWxlY3Rvcik7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0VmlzaWJsZSA9IChzZWxlY3RvciwgdmlzaWJsZSA9IHRydWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudENsYXNzTGlzdCA9IHF1ZXJ5SWZTZWxlY3RvcihzZWxlY3RvcikuY2xhc3NMaXN0O1xuICAgICAgICB2aXNpYmxlID8gZWxlbWVudENsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIikgOiBlbGVtZW50Q2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9XG4gICAgY29uc3QgbW92ZURvd24gPSAoc2VsZWN0b3IpPT57XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBxdWVyeShzZWxlY3Rvcik7XG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkRW50cnlPZlRlbXBsYXRlID0gZnVuY3Rpb24odGVtcGxhdGVTZWxlY3RvciwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgICAgICAgY29uc3QgZW50cnlUZW1wbGF0ZSA9IHF1ZXJ5KHRlbXBsYXRlU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBlbnRyeSA9IGVudHJ5VGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBxdWVyeShjb250YWluZXJTZWxlY3Rvcik7XG4gICAgICAgIGVudHJ5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgICAgIHJldHVybiBlbnRyeTtcbiAgICB9O1xuXG4gICAgLy8gUmV0dXJucyB0aGUgaW5wdXQgZWxlbWVudFxuICAgIC8vIGNhbGxiYWNrIG11c3QgaGF2ZSBvbmUgYXJnIHRvIHBhc3MgdGV4dFxuICAgIGNvbnN0IGFkZFRlbXBvcmFyeUlucHV0ID0gZnVuY3Rpb24oZWxlbWVudFNlbGVjdG9yLCBjb250YWluZXJTZWxlY3RvciwgaW5wdXRTdHlsZSA9IFwiXCIpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gcXVlcnkoZWxlbWVudFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gcXVlcnkoY29udGFpbmVyU2VsZWN0b3IpO1xuICAgICAgICBpZiAoIShlbGVtZW50IHx8IGNvbnRhaW5lcikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGZpbmQgZWxlbWVudCBvciBjb250YWluZXJcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQuc3R5bGUgKz0gaW5wdXRTdHlsZTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBpbnB1dC5zZWxlY3QoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTd2FwcGVkIG91dCBpbnB1dC5cIilcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIGNvbnN0IHN3YXBJbnB1dFdpdGhUZXh0ID0gZnVuY3Rpb24oaW5wdXQsIHRleHRTZWxlY3RvciwgcmVtb3ZlSW5wdXQ9ZmFsc2UpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IHF1ZXJ5KHRleHRTZWxlY3Rvcik7XG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgdGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICBpZiAocmVtb3ZlSW5wdXQpIHtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIHF1ZXJ5LCBcbiAgICAgICAgcXVlcnlBbGwsIFxuICAgICAgICBjcmVhdGVTVkdFbGVtZW50LCBcbiAgICAgICAgc2V0VmlzaWJsZSwgXG4gICAgICAgIG1vdmVEb3duLCBcbiAgICAgICAgc2V0Q2xpY2ssIFxuICAgICAgICBhZGRFbnRyeU9mVGVtcGxhdGUsIFxuICAgICAgICBhZGRUZW1wb3JhcnlJbnB1dCwgXG4gICAgICAgIHN3YXBJbnB1dFdpdGhUZXh0LCBcbiAgICAgICAgZWxlbWVudEV4aXN0c1xuICAgIH07XG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgZG9tTWFuYWdlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCBkb21NYW5hZ2VyIGZyb20gXCIuL2RvbU1hbmFnZXIuanNcIjtcbi8qXG5WaWV3IG1vZHVsZVxuLSBIYW5kbGVzIERPTSB1cGRhdGluZyB0YXNrc1xuLSBSZXR1cm5zIHJlcXVlc3RzIGZvciBET00gaW5mb3JtYXRpb25cbiovXG5jb25zdCB2aWV3ID0gKCgpPT57XG4gICAgLy8gY2FjaGVkIGVsZW1lbnRzXG4gICAgY29uc3QgdGFza0VudHJ5TGlzdEVsZW1lbnQgPSBkb21NYW5hZ2VyLnF1ZXJ5KFwiLnRhc2stbGlzdFwiKTtcbiAgICBjb25zdCB0YWdMaXN0RWxlbWVudCA9IGRvbU1hbmFnZXIucXVlcnkoXCJuYXYgdWwudGFnLWxpc3RcIik7XG4gICAgY29uc3QgdGFnTW9kYWxFbGVtZW50ID0gZG9tTWFuYWdlci5xdWVyeShcIi50YWctbW9kYWwtd3JhcHBlclwiKTtcbiAgICBjb25zdCB0YXNrQ3JlYXRpb25FbGVtZW50ID0gZG9tTWFuYWdlci5xdWVyeShcIi50YXNrLWNyZWF0aW9uXCIpO1xuICAgIGNvbnN0IHRhc2tEcm9wZG93bkVsZW1lbnQgPSBkb21NYW5hZ2VyLnF1ZXJ5KFwiLnRhZy1ncm91cCB1bFwiKTtcbiAgICBjb25zdCB0YXNrTW9kYWxFbGVtZW50ID0gZG9tTWFuYWdlci5xdWVyeShcIi50YXNrLW1vZGFsLXdyYXBwZXJcIik7XG4gICAgY29uc3QgdGFza01vZGFsRWxlbWVudHMgPSB7XG4gICAgICAgIG1vZGFsOiBkb21NYW5hZ2VyLnF1ZXJ5KFwiLnRhc2stbW9kYWxcIiksXG4gICAgICAgIGNoZWNrZWQ6IGRvbU1hbmFnZXIucXVlcnkoXCIudGFzay1tb2RhbC13cmFwcGVyIC5jaGVja2VkXCIpLFxuICAgICAgICB0aXRsZTogZG9tTWFuYWdlci5xdWVyeShcIi50YXNrLW1vZGFsLXdyYXBwZXIgLnRpdGxlXCIpLFxuICAgICAgICBkZXNjcmlwdGlvbjogZG9tTWFuYWdlci5xdWVyeShcIi50YXNrLW1vZGFsLXdyYXBwZXIgLmRlc2NyaXB0aW9uXCIpLFxuICAgICAgICB0YWdzOiBkb21NYW5hZ2VyLnF1ZXJ5KFwiLnRhc2stbW9kYWwtd3JhcHBlciAudGFnc1wiKSxcbiAgICAgICAgZGVhZGxpbmU6IGRvbU1hbmFnZXIucXVlcnkoXCIudGFzay1tb2RhbC13cmFwcGVyIC5kZWFkbGluZVwiKSxcbiAgICAgICAgcHJpb3JpdHk6IGRvbU1hbmFnZXIucXVlcnkoXCIudGFzay1tb2RhbC13cmFwcGVyIC5wcmlvcml0eVwiKSxcbiAgICB9XG4gICAgXG4gICAgbGV0IHRhZ0FkZERpc2FibGVSZWFzb24gPSBcIlwiO1xuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgY29uc3QgY3JlYXRlQ2hlY2ttYXJrRWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2ttYXJrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnN0IHVuY2hlY2tlZFNWRyA9IGRvbU1hbmFnZXIuY3JlYXRlU1ZHRWxlbWVudCh7cGF0aDpcIk0xMiwyMEE4LDggMCAwLDEgNCwxMkE4LDggMCAwLDEgMTIsNEE4LDggMCAwLDEgMjAsMTJBOCw4IDAgMCwxIDEyLDIwTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwifSk7XG4gICAgICAgIGNvbnN0IGNoZWNrZWRTVkcgPSBkb21NYW5hZ2VyLmNyZWF0ZVNWR0VsZW1lbnQoe3BhdGg6XCJNMTIgMkM2LjUgMiAyIDYuNSAyIDEyUzYuNSAyMiAxMiAyMiAyMiAxNy41IDIyIDEyIDE3LjUgMiAxMiAyTTEyIDIwQzcuNTkgMjAgNCAxNi40MSA0IDEyUzcuNTkgNCAxMiA0IDIwIDcuNTkgMjAgMTIgMTYuNDEgMjAgMTIgMjBNMTYuNTkgNy41OEwxMCAxNC4xN0w3LjQxIDExLjU5TDYgMTNMMTAgMTdMMTggOUwxNi41OSA3LjU4WlwifSk7XG4gICAgICAgIGNoZWNrbWFya0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tcIik7XG4gICAgICAgIGNoZWNrZWRTVkcuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgY2hlY2ttYXJrRWxlbWVudC5hcHBlbmRDaGlsZCh1bmNoZWNrZWRTVkcpO1xuICAgICAgICBjaGVja21hcmtFbGVtZW50LmFwcGVuZENoaWxkKGNoZWNrZWRTVkcpO1xuICAgICAgICByZXR1cm4gY2hlY2ttYXJrRWxlbWVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlVGFnRW50cnkgPSB0YWcgPT4ge1xuICAgICAgICBjb25zdCB0YWdFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgY29uc3QgdGFnRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb25zdCBjb2xvckljb24gPSBkb21NYW5hZ2VyLmNyZWF0ZVNWR0VsZW1lbnQoe3BhdGg6XCJNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaXCJ9KTtcbiAgICAgICAgdGFnRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YWdcIik7XG4gICAgICAgIHRhZ0Rpdi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgICAgICAgdGFnTmFtZS50ZXh0Q29udGVudCA9IHRhZy5uYW1lO1xuICAgICAgICB0YWdEaXYuYXBwZW5kQ2hpbGQoY29sb3JJY29uKTtcbiAgICAgICAgdGFnRGl2LmFwcGVuZENoaWxkKHRhZ05hbWUpO1xuICAgICAgICB0YWdFbnRyeS5hcHBlbmRDaGlsZCh0YWdEaXYpO1xuICAgICAgICByZXR1cm4gdGFnRW50cnk7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVGFza0VudHJ5ID0gdGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHRhc2tJbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgY2hlY2ttYXJrID0gY3JlYXRlQ2hlY2ttYXJrRWxlbWVudCgpO1xuICAgICAgICB0YXNrRW50cnkuZGF0YXNldC5pZCA9IHRhc2suaWQ7XG4gICAgICAgIHRhc2tFbnRyeS5zdHlsZSA9IFwibWFyZ2luOiAycmVtO1wiO1xuICAgICAgICB0YXNrRW50cnkuY2xhc3NMaXN0LmFkZChcInRhc2stZW50cnlcIik7XG4gICAgICAgIHN3YXBDaGVja21hcmtEaXNwbGF5KGNoZWNrbWFyaywgdGFzay5jaGVja2VkKTtcbiAgICAgICAgdGFza0VudHJ5LmFwcGVuZENoaWxkKGNoZWNrbWFyayk7XG4gICAgICAgIHRhc2tJbmZvRGl2LnN0eWxlID0gXCJkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNnJlbSA1cmVtOyBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gYXV0byBhdXRvOyBhbGlnbi1pdGVtczogY2VudGVyO1wiO1xuICAgICAgICAvLyBhZGQgb3RoZXIgZmllbGRzIG9mIHRhc2tcbiAgICAgICAgY29uc3QgbWFrZUZpZWxkID0gKHR5cGUsIGNsYXNzTmFtZSwgc3R5bGUsIHRleHQpPT57XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZSA9IHN0eWxlO1xuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfTtcbiAgICAgICAgdGFza0luZm9EaXYuYXBwZW5kQ2hpbGQobWFrZUZpZWxkKFwicFwiLCBcInRpdGxlXCIsIFwiZ3JpZC1hcmVhOiAxLzEvMS8xOyBtYXJnaW4tbGVmdDogMXJlbTsgZm9udC1zaXplOiAxLjVyZW07IGZvbnQtd2VpZ2h0OiA2MDA7XCIsIHRhc2sudGl0bGUpKTtcbiAgICAgICAgdGFza0luZm9EaXYuYXBwZW5kQ2hpbGQobWFrZUZpZWxkKFwicFwiLCBcImRlc2NyaXB0aW9uXCIsIFwiZ3JpZC1hcmVhOiAyLzEvMi8tMTsgbWFyZ2luLWxlZnQ6IDFyZW07XCIsIHRhc2suZGVzY3JpcHRpb24pKTtcbiAgICAgICAgdGFza0luZm9EaXYuYXBwZW5kQ2hpbGQobWFrZUZpZWxkKFwicFwiLCBcImRlYWRsaW5lXCIsIFwiZ3JpZC1hcmVhOiAxLzIvMS8yO1wiLCB0YXNrLmRlYWRsaW5lKSk7XG4gICAgICAgIHRhc2tJbmZvRGl2LmFwcGVuZENoaWxkKG1ha2VGaWVsZChcInBcIiwgXCJwcmlvcml0eVwiLFwiZ3JpZC1hcmVhOiAxLzMvMS8zO1wiLCB0YXNrLnByaW9yaXR5KSk7XG4gICAgICAgIGNvbnN0IHRhZ0dyb3VwID0gbWFrZUZpZWxkKFwiZGl2XCIsIFwidGFnLWdyb3VwXCIsIFwiZ3JpZC1hcmVhOiAzLzEvMy8tMTsgbWFyZ2luLWxlZnQ6IDFyZW07XCIsIFwiXCIpO1xuICAgICAgICAvLyBhZGQgdGFnc1xuICAgICAgICB0YXNrLnRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgICAgICAgdGFnR3JvdXAuYXBwZW5kQ2hpbGQoY3JlYXRlVGFnRW50cnkodGFnKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0YXNrSW5mb0Rpdi5hcHBlbmRDaGlsZCh0YWdHcm91cCk7XG4gICAgICAgIHRhc2tFbnRyeS5hcHBlbmRDaGlsZCh0YXNrSW5mb0Rpdik7XG4gICAgICAgIHJldHVybiB0YXNrRW50cnk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFza0VudHJ5ID0gaWQgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgdGFza0VudHJ5TGlzdEVsZW1lbnQuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGlmIChub2RlLmRhdGFzZXQuaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGVzIGNoYW5naW5nIHRoZSBjaGVja21hcmsgZGlzcGxheVxuICAgIGNvbnN0IHN3YXBDaGVja21hcmtEaXNwbGF5ID0gKGNoZWNrbWFya0RpdiwgaXNDaGVja2VkKSA9PiB7XG4gICAgICAgIGRvbU1hbmFnZXIuc2V0VmlzaWJsZShjaGVja21hcmtEaXYuY2hpbGRyZW5bMF0sICFpc0NoZWNrZWQpO1xuICAgICAgICBkb21NYW5hZ2VyLnNldFZpc2libGUoY2hlY2ttYXJrRGl2LmNoaWxkcmVuWzFdLCBpc0NoZWNrZWQpO1xuICAgIH1cblxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICBjb25zdCBxdWVyeVNlbGVjdGVkID0gKHNlbGVjdG9ycykgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RvckNvdW50ID0gc2VsZWN0b3JzLmxlbmd0aDtcbiAgICAgICAgbGV0IHAgPSBQcm9taXNlLnJlc29sdmUoW10pO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2VsZWN0b3JDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBwID0gcC50aGVuKChlbGVtZW50cyk9PntyZXR1cm4gZWxlbWVudHMuY29uY2F0KGRvbU1hbmFnZXIucXVlcnkoc2VsZWN0b3JzW2ldKSl9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG5cbiAgICBjb25zdCBhZGROZXdUYWcgPSAodGFnLCBjbGlja0hhbmRsZXIpID0+IHtcbiAgICAgICAgY29uc3QgdGFnRWxlbWVudCA9IGNyZWF0ZVRhZ0VudHJ5KHRhZyk7XG4gICAgICAgIHRhZ0xpc3RFbGVtZW50LmFwcGVuZENoaWxkKHRhZ0VsZW1lbnQpO1xuICAgICAgICB0YWdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGROZXdUYXNrID0gKHRhc2ssIGNsaWNrSGFuZGxlciwgY2hlY2tIYW5kbGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gY3JlYXRlVGFza0VudHJ5KHRhc2spO1xuICAgICAgICB0YXNrRW50cnlMaXN0RWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gICAgICAgIHRhc2tFbGVtZW50LmNoaWxkTm9kZXNbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoZWNrSGFuZGxlcik7XG4gICAgICAgIHRhc2tFbGVtZW50LmNoaWxkTm9kZXNbMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IChpZCkgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gZ2V0VGFza0VudHJ5KGlkKVxuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNvdWxkbid0IGZpbmQgbm9kZSB3aXRoIG1hdGNoaW5nIGlkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVTaWRlTWVudVRhZ3MgPSAodGFncywgaGFuZGxlck9mQ2xpY2tIYW5kbGVyKSA9PiB7XG4gICAgICAgIHRhZ0xpc3RFbGVtZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICB0YWdzLmZvckVhY2godGFnPT57XG4gICAgICAgICAgICBhZGROZXdUYWcodGFnLCBoYW5kbGVyT2ZDbGlja0hhbmRsZXIodGFnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlSG9tZVZpZXcgPSAodGFza3MsIGhhbmRsZXJPZkNsaWNrSGFuZGxlciwgaGFuZGxlck9mQ2hlY2tIYW5kbGVyKSA9PiAge1xuICAgICAgICB0YXNrRW50cnlMaXN0RWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGFkZE5ld1Rhc2sodGFzaywgaGFuZGxlck9mQ2xpY2tIYW5kbGVyKHRhc2spLCBoYW5kbGVyT2ZDaGVja0hhbmRsZXIodGFzaykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkVGFnc0luVGFza0NyZWF0aW9uID0gKHRhZ3MpID0+IHtcbiAgICAgICAgdGFza0Ryb3Bkb3duRWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgdGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgZWxlbWVudFxuICAgICAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0YWctaXRlbVwiKTtcbiAgICAgICAgICAgIC8vIHN0b3JlIHRhZyBkYXRhIGluIGRhdGFzZXRcbiAgICAgICAgICAgIGxpc3RJdGVtLmRhdGFzZXQubmFtZSA9IHRhZy5uYW1lO1xuICAgICAgICAgICAgbGlzdEl0ZW0uZGF0YXNldC5jb2xvciA9IHRhZy5jb2xvcjtcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgICAgICBpbnB1dC5uYW1lID0gdGFnLm5hbWU7XG4gICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gdGFnLm5hbWU7XG4gICAgICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgICAgIHRhc2tEcm9wZG93bkVsZW1lbnQuYXBwZW5kKGxpc3RJdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgbG9hZFRhc2tJbk1vZGFsID0gKHRhc2spID0+IHtcbiAgICAgICAgLy8gaGlkZSB0aGUgbW9kYWwgaXRzZWxmIHdoaWxlIGxvYWRpbmdcbiAgICAgICAgZG9tTWFuYWdlci5zZXRWaXNpYmxlKHRhc2tNb2RhbEVsZW1lbnRzLm1vZGFsLCBmYWxzZSk7XG4gICAgICAgIHRhc2tNb2RhbEVsZW1lbnRzLnRhZ3MucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgIHRhc2tNb2RhbEVsZW1lbnRzLm1vZGFsLmRhdGFzZXQuaWQgPSB0YXNrLmlkO1xuICAgICAgICAvLyBzZXQgdGV4dCBmaWVsZHNcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZCBpbiB0YXNrKSB7XG4gICAgICAgICAgICBpZiAoZmllbGQgPT0gXCJpZFwiIHx8IGZpZWxkID09IFwidGFnc1wiIHx8IGZpZWxkID09IFwiY2hlY2tlZFwiKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRhc2tNb2RhbEVsZW1lbnRzW2ZpZWxkXS50ZXh0Q29udGVudCA9IHRhc2tbZmllbGRdO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNldCBjaGVjayBpY29uXG4gICAgICAgIHN3YXBDaGVja21hcmtEaXNwbGF5KHRhc2tNb2RhbEVsZW1lbnRzLmNoZWNrZWQsIHRhc2suY2hlY2tlZCk7XG4gICAgICAgIC8vIHNldCB0YWdzXG4gICAgICAgIHRhc2sudGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICAgICAgICB0YXNrTW9kYWxFbGVtZW50cy50YWdzLmFwcGVuZENoaWxkKGNyZWF0ZVRhZ0VudHJ5KHRhZykpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBkaXNwbGF5IHRoZSBtb2RhbCBvbmNlIGxvYWRlZFxuICAgICAgICBkb21NYW5hZ2VyLnNldFZpc2libGUodGFza01vZGFsRWxlbWVudHMubW9kYWwpO1xuICAgIH1cblxuICAgIGNvbnN0IGV4dHJhY3RUYWcgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5mb3Jtc1tcIm5ld1RhZ0Zvcm1cIl07XG4gICAgICAgIHJldHVybiB7bmFtZTogZm9ybVtcIm5hbWVcIl0udmFsdWUsIGNvbG9yOiBmb3JtW1wiY29sb3JcIl19XG4gICAgfVxuXG4gICAgY29uc3QgZXh0cmFjdFRhc2tGcm9tQ3JlYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSB7aWQ6IDAsIGNoZWNrZWQ6IGZhbHNlfTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmZvcm1zW1wibmV3VGFza0Zvcm1cIl07XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IFtcInRpdGxlXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJkZWFkbGluZVwiLCBcInByaW9yaXR5XCJdO1xuICAgICAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB0YXNrW2ZpZWxkXSA9IGZvcm1bZmllbGRdLnZhbHVlKTtcbiAgICAgICAgZG9tTWFuYWdlci5xdWVyeUFsbChcIi50YXNrLWdyb3VwXCIpXG4gICAgICAgIHRhc2sudGFncyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgdGFza0Ryb3Bkb3duRWxlbWVudC5jaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW5bMF0uY2hlY2tlZCkgdGFzay50YWdzLnB1c2goe25hbWU6IG5vZGUuZGF0YXNldC5uYW1lLCBjb2xvcjogbm9kZS5kYXRhc2V0LmNvbG9yfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfVxuXG4gICAgY29uc3QgZXh0cmFjdElkT2ZDdXJyZW50VGFzayA9ICgpID0+IHRhc2tNb2RhbEVsZW1lbnRzLm1vZGFsLmRhdGFzZXQuaWQ7XG5cbiAgICBjb25zdCBjaGVja09mZlRhc2sgPSAoaWQsIGNoZWNrZWQpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGdldFRhc2tFbnRyeShpZClcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDb3VsZG4ndCBmaW5kIG5vZGUgd2l0aCBtYXRjaGluZyBpZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzd2FwQ2hlY2ttYXJrRGlzcGxheShub2RlLmNoaWxkTm9kZXNbMF0sIGNoZWNrZWQpO1xuICAgIH1cblxuICAgIGNvbnN0IG9wZW5UYWdNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgZG9tTWFuYWdlci5zZXRWaXNpYmxlKHRhZ01vZGFsRWxlbWVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2VUYWdNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgZG9tTWFuYWdlci5zZXRWaXNpYmxlKHRhZ01vZGFsRWxlbWVudCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IG9wZW5UYXNrQ3JlYXRpb24gPSAoKT0+IHtcbiAgICAgICAgZG9tTWFuYWdlci5zZXRWaXNpYmxlKHRhc2tDcmVhdGlvbkVsZW1lbnQpO1xuICAgIH1cbiAgICBjb25zdCBjbG9zZVRhc2tDcmVhdGlvbiA9ICgpPT4ge1xuICAgICAgICBkb21NYW5hZ2VyLnNldFZpc2libGUodGFza0NyZWF0aW9uRWxlbWVudCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZVRhc2tMaXN0RHJvcGRvd24gPSAoKSA9PiB7XG4gICAgICAgIGRvbU1hbmFnZXIuc2V0VmlzaWJsZSh0YXNrRHJvcGRvd25FbGVtZW50LCB0YXNrRHJvcGRvd25FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3BlblRhc2tNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgZG9tTWFuYWdlci5zZXRWaXNpYmxlKHRhc2tNb2RhbEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlVGFza01vZGFsID0gKCkgPT4ge1xuICAgICAgICBkb21NYW5hZ2VyLnNldFZpc2libGUodGFza01vZGFsRWxlbWVudCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiB7IFxuICAgICAgICBxdWVyeVNlbGVjdGVkLCBcbiAgICAgICAgYWRkTmV3VGFnLFxuICAgICAgICBhZGROZXdUYXNrLFxuICAgICAgICByZW1vdmVUYXNrLFxuICAgICAgICBnZW5lcmF0ZVNpZGVNZW51VGFncywgXG4gICAgICAgIGdlbmVyYXRlSG9tZVZpZXcsXG4gICAgICAgIGV4dHJhY3RUYWcsXG4gICAgICAgIGV4dHJhY3RJZE9mQ3VycmVudFRhc2ssXG4gICAgICAgIGV4dHJhY3RUYXNrRnJvbUNyZWF0aW9uLFxuICAgICAgICBjaGVja09mZlRhc2ssXG4gICAgICAgIGxvYWRUYWdzSW5UYXNrQ3JlYXRpb24sXG4gICAgICAgIGxvYWRUYXNrSW5Nb2RhbCxcbiAgICAgICAgdG9nZ2xlVGFza0xpc3REcm9wZG93bixcbiAgICAgICAgb3BlblRhZ01vZGFsLFxuICAgICAgICBjbG9zZVRhZ01vZGFsLFxuICAgICAgICBvcGVuVGFza0NyZWF0aW9uLFxuICAgICAgICBjbG9zZVRhc2tDcmVhdGlvbixcbiAgICAgICAgb3BlblRhc2tNb2RhbCxcbiAgICAgICAgY2xvc2VUYXNrTW9kYWxcbiAgICB9XG4gICAgXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB2aWV3OyJdLCJuYW1lcyI6WyJxdWVyeSIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlBbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlU1ZHRWxlbWVudCIsImRhdGEiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJwYXRoIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJzZXRWaXNpYmxlIiwidmlzaWJsZSIsImVsZW1lbnRDbGFzc0xpc3QiLCJxdWVyeUlmU2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJtb3ZlRG93biIsImVsZW1lbnQiLCJwYXJlbnROb2RlIiwic2V0Q2xpY2siLCJlbGVtZW50U2VsZWN0b3IiLCJjYWxsYmFjayIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRFbnRyeU9mVGVtcGxhdGUiLCJ0ZW1wbGF0ZVNlbGVjdG9yIiwiY29udGFpbmVyU2VsZWN0b3IiLCJlbnRyeSIsImNsb25lTm9kZSIsImNvbnRhaW5lciIsImFkZFRlbXBvcmFyeUlucHV0IiwiaW5wdXRTdHlsZSIsImlucHV0IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwic2VsZWN0IiwiY29uc29sZSIsImxvZyIsInN3YXBJbnB1dFdpdGhUZXh0IiwidGV4dFNlbGVjdG9yIiwicmVtb3ZlSW5wdXQiLCJ0ZXh0IiwidGV4dENvbnRlbnQiLCJ2YWx1ZSIsImVsZW1lbnRFeGlzdHMiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImQiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiXSwic291cmNlUm9vdCI6IiJ9