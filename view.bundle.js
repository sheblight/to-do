(()=>{"use strict";var e,t={265:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(()=>{function e(e){return document.querySelector(e)}return{query:e,queryAll:function(e){return document.querySelectorAll(e)},createSVGElement:e=>{const t=document.createElementNS("http://www.w3.org/2000/svg","svg"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("d",e.path),t.setAttribute("viewbox","0 0 24 24"),t.appendChild(r),t},setVisible:(t,r=!0)=>{const n=(t=>"string"==typeof t?e(t):t)(t).classList;r?n.remove("hidden"):n.add("hidden")},moveDown:t=>{const r=e(t);r.parentNode.appendChild(r)},setClick:function(t,r){e(t).addEventListener("click",r)},addEntryOfTemplate:function(t,r){const n=e(t).cloneNode(!0),o=e(r);return n.classList.remove("hidden"),o.appendChild(n),n},addTemporaryInput:function(t,r,n=""){const o=document.createElement("input"),a=e(t),s=e(r);if(a||s)return o.style+=n,a.classList.add("hidden"),s.appendChild(o),o.select(),console.log("Swapped out input."),o;console.log("Failed to find element or container")},swapInputWithText:function(t,r,n=!1){const o=e(r);return o.textContent=t.value,o.classList.remove("hidden"),n&&t.remove(),o},elementExists:t=>null!=e(t)}})()}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(e=n(265)).Z.query(".task-list"),e.Z.query("nav ul.tag-list"),e.Z.query(".tag-modal-wrapper"),e.Z.query(".task-creation"),e.Z.query(".tag-group ul"),e.Z.query(".task-modal-wrapper"),e.Z.query(".task-modal"),e.Z.query(".task-modal-wrapper .checked"),e.Z.query(".task-modal-wrapper .title"),e.Z.query(".task-modal-wrapper .description"),e.Z.query(".task-modal-wrapper .tags"),e.Z.query(".task-modal-wrapper .deadline"),e.Z.query(".task-modal-wrapper .priority")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUIsZ0NBQ25CLFVBQWlCLDhCQUNYLFVBQWlCLG9DQUN4QixVQUFpQiw2QkFDYixVQUFpQixpQ0FDakIsVUFBaUIsZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9kb21NYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcblxuTW9kdWxlIGZvciBoYW5kbGluZyByZWR1bmRhbnQgRE9NIHRhc2tzLlxuXG4qL1xuY29uc3QgZG9tTWFuYWdlciA9ICgoKT0+e1xuICAgIGZ1bmN0aW9uIHF1ZXJ5KHNlbGVjdG9yKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTsgfVxuICAgIGZ1bmN0aW9uIHF1ZXJ5QWxsKHNlbGVjdG9yKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTsgfVxuICAgIGNvbnN0IGVsZW1lbnRFeGlzdHMgPSAoc2VsZWN0b3IpID0+IHF1ZXJ5KHNlbGVjdG9yKSAhPSBudWxsO1xuICAgIGNvbnN0IHF1ZXJ5SWZTZWxlY3RvciA9IChzZWxlY3Rvcik9PnsgcmV0dXJuIHR5cGVvZiBzZWxlY3RvciA9PSBcInN0cmluZ1wiID8gcXVlcnkoc2VsZWN0b3IpIDogc2VsZWN0b3I7IH07XG4gICAgXG4gICAgY29uc3QgY3JlYXRlU1ZHRWxlbWVudCA9IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsICdzdmcnKTtcbiAgICAgICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsICdwYXRoJyk7XG4gICAgICAgIHBhdGguc2V0QXR0cmlidXRlKFwiZFwiLCBkYXRhLnBhdGgpO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKFwidmlld2JveFwiLCBcIjAgMCAyNCAyNFwiKTtcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRDbGljayA9IGZ1bmN0aW9uKGVsZW1lbnRTZWxlY3RvciwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHF1ZXJ5KGVsZW1lbnRTZWxlY3Rvcik7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0VmlzaWJsZSA9IChzZWxlY3RvciwgdmlzaWJsZSA9IHRydWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudENsYXNzTGlzdCA9IHF1ZXJ5SWZTZWxlY3RvcihzZWxlY3RvcikuY2xhc3NMaXN0O1xuICAgICAgICB2aXNpYmxlID8gZWxlbWVudENsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIikgOiBlbGVtZW50Q2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9XG4gICAgY29uc3QgbW92ZURvd24gPSAoc2VsZWN0b3IpPT57XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBxdWVyeShzZWxlY3Rvcik7XG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkRW50cnlPZlRlbXBsYXRlID0gZnVuY3Rpb24odGVtcGxhdGVTZWxlY3RvciwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgICAgICAgY29uc3QgZW50cnlUZW1wbGF0ZSA9IHF1ZXJ5KHRlbXBsYXRlU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBlbnRyeSA9IGVudHJ5VGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBxdWVyeShjb250YWluZXJTZWxlY3Rvcik7XG4gICAgICAgIGVudHJ5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgICAgIHJldHVybiBlbnRyeTtcbiAgICB9O1xuXG4gICAgLy8gUmV0dXJucyB0aGUgaW5wdXQgZWxlbWVudFxuICAgIC8vIGNhbGxiYWNrIG11c3QgaGF2ZSBvbmUgYXJnIHRvIHBhc3MgdGV4dFxuICAgIGNvbnN0IGFkZFRlbXBvcmFyeUlucHV0ID0gZnVuY3Rpb24oZWxlbWVudFNlbGVjdG9yLCBjb250YWluZXJTZWxlY3RvciwgaW5wdXRTdHlsZSA9IFwiXCIpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gcXVlcnkoZWxlbWVudFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gcXVlcnkoY29udGFpbmVyU2VsZWN0b3IpO1xuICAgICAgICBpZiAoIShlbGVtZW50IHx8IGNvbnRhaW5lcikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGZpbmQgZWxlbWVudCBvciBjb250YWluZXJcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQuc3R5bGUgKz0gaW5wdXRTdHlsZTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBpbnB1dC5zZWxlY3QoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTd2FwcGVkIG91dCBpbnB1dC5cIilcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIGNvbnN0IHN3YXBJbnB1dFdpdGhUZXh0ID0gZnVuY3Rpb24oaW5wdXQsIHRleHRTZWxlY3RvciwgcmVtb3ZlSW5wdXQ9ZmFsc2UpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IHF1ZXJ5KHRleHRTZWxlY3Rvcik7XG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgdGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICBpZiAocmVtb3ZlSW5wdXQpIHtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIHF1ZXJ5LCBcbiAgICAgICAgcXVlcnlBbGwsIFxuICAgICAgICBjcmVhdGVTVkdFbGVtZW50LCBcbiAgICAgICAgc2V0VmlzaWJsZSwgXG4gICAgICAgIG1vdmVEb3duLCBcbiAgICAgICAgc2V0Q2xpY2ssIFxuICAgICAgICBhZGRFbnRyeU9mVGVtcGxhdGUsIFxuICAgICAgICBhZGRUZW1wb3JhcnlJbnB1dCwgXG4gICAgICAgIHN3YXBJbnB1dFdpdGhUZXh0LCBcbiAgICAgICAgZWxlbWVudEV4aXN0c1xuICAgIH07XG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgZG9tTWFuYWdlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCBkb21NYW5hZ2VyIGZyb20gXCIuL2RvbU1hbmFnZXIuanNcIjtcbi8qXG5WaWV3IG1vZHVsZVxuLSBIYW5kbGVzIERPTSB1cGRhdGluZyB0YXNrc1xuLSBSZXR1cm5zIHJlcXVlc3RzIGZvciBET00gaW5mb3JtYXRpb25cbiovXG5jb25zdCB2aWV3ID0gKCgpPT57XG4gICAgLy8gY2FjaGVkIGVsZW1lbnRzXG4gICAgY29uc3QgdGFza0VudHJ5TGlzdEVsZW1lbnQgPSBkb21NYW5hZ2VyLnF1ZXJ5KFwiLnRhc2stbGlzdFwiKTtcbiAgICBjb25zdCB0YWdMaXN0RWxlbWVudCA9IGRvbU1hbmFnZXIucXVlcnkoXCJuYXYgdWwudGFnLWxpc3RcIik7XG4gICAgY29uc3QgdGFnTW9kYWxFbGVtZW50ID0gZG9tTWFuYWdlci5xdWVyeShcIi50YWctbW9kYWwtd3JhcHBlclwiKTtcbiAgICBjb25zdCB0YXNrQ3JlYXRpb25FbGVtZW50ID0gZG9tTWFuYWdlci5xdWVyeShcIi50YXNrLWNyZWF0aW9uXCIpO1xuICAgIGNvbnN0IHRhc2tEcm9wZG93bkVsZW1lbnQgPSBkb21NYW5hZ2VyLnF1ZXJ5KFwiLnRhZy1ncm91cCB1bFwiKTtcbiAgICBjb25zdCB0YXNrTW9kYWxFbGVtZW50ID0gZG9tTWFuYWdlci5xdWVyeShcIi50YXNrLW1vZGFsLXdyYXBwZXJcIik7XG4gICAgY29uc3QgdGFza01vZGFsRWxlbWVudHMgPSB7XG4gICAgICAgIG1vZGFsOiBkb21NYW5hZ2VyLnF1ZXJ5KFwiLnRhc2stbW9kYWxcIiksXG4gICAgICAgIGNoZWNrZWQ6IGRvbU1hbmFnZXIucXVlcnkoXCIudGFzay1tb2RhbC13cmFwcGVyIC5jaGVja2VkXCIpLFxuICAgICAgICB0aXRsZTogZG9tTWFuYWdlci5xdWVyeShcIi50YXNrLW1vZGFsLXdyYXBwZXIgLnRpdGxlXCIpLFxuICAgICAgICBkZXNjcmlwdGlvbjogZG9tTWFuYWdlci5xdWVyeShcIi50YXNrLW1vZGFsLXdyYXBwZXIgLmRlc2NyaXB0aW9uXCIpLFxuICAgICAgICB0YWdzOiBkb21NYW5hZ2VyLnF1ZXJ5KFwiLnRhc2stbW9kYWwtd3JhcHBlciAudGFnc1wiKSxcbiAgICAgICAgZGVhZGxpbmU6IGRvbU1hbmFnZXIucXVlcnkoXCIudGFzay1tb2RhbC13cmFwcGVyIC5kZWFkbGluZVwiKSxcbiAgICAgICAgcHJpb3JpdHk6IGRvbU1hbmFnZXIucXVlcnkoXCIudGFzay1tb2RhbC13cmFwcGVyIC5wcmlvcml0eVwiKSxcbiAgICB9XG4gICAgXG4gICAgbGV0IHRhZ0FkZERpc2FibGVSZWFzb24gPSBcIlwiO1xuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgY29uc3QgY3JlYXRlQ2hlY2ttYXJrRWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2ttYXJrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnN0IHVuY2hlY2tlZFNWRyA9IGRvbU1hbmFnZXIuY3JlYXRlU1ZHRWxlbWVudCh7cGF0aDpcIk0xMiwyMEE4LDggMCAwLDEgNCwxMkE4LDggMCAwLDEgMTIsNEE4LDggMCAwLDEgMjAsMTJBOCw4IDAgMCwxIDEyLDIwTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwifSk7XG4gICAgICAgIGNvbnN0IGNoZWNrZWRTVkcgPSBkb21NYW5hZ2VyLmNyZWF0ZVNWR0VsZW1lbnQoe3BhdGg6XCJNMTIgMkM2LjUgMiAyIDYuNSAyIDEyUzYuNSAyMiAxMiAyMiAyMiAxNy41IDIyIDEyIDE3LjUgMiAxMiAyTTEyIDIwQzcuNTkgMjAgNCAxNi40MSA0IDEyUzcuNTkgNCAxMiA0IDIwIDcuNTkgMjAgMTIgMTYuNDEgMjAgMTIgMjBNMTYuNTkgNy41OEwxMCAxNC4xN0w3LjQxIDExLjU5TDYgMTNMMTAgMTdMMTggOUwxNi41OSA3LjU4WlwifSk7XG4gICAgICAgIGNoZWNrbWFya0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tcIik7XG4gICAgICAgIGNoZWNrZWRTVkcuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgY2hlY2ttYXJrRWxlbWVudC5hcHBlbmRDaGlsZCh1bmNoZWNrZWRTVkcpO1xuICAgICAgICBjaGVja21hcmtFbGVtZW50LmFwcGVuZENoaWxkKGNoZWNrZWRTVkcpO1xuICAgICAgICByZXR1cm4gY2hlY2ttYXJrRWxlbWVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlVGFnRW50cnkgPSB0YWcgPT4ge1xuICAgICAgICBjb25zdCB0YWdFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgY29uc3QgdGFnRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb25zdCBjb2xvckljb24gPSBkb21NYW5hZ2VyLmNyZWF0ZVNWR0VsZW1lbnQoe3BhdGg6XCJNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaXCJ9KTtcbiAgICAgICAgdGFnRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YWdcIik7XG4gICAgICAgIHRhZ0Rpdi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgICAgICAgdGFnTmFtZS50ZXh0Q29udGVudCA9IHRhZy5uYW1lO1xuICAgICAgICB0YWdEaXYuYXBwZW5kQ2hpbGQoY29sb3JJY29uKTtcbiAgICAgICAgdGFnRGl2LmFwcGVuZENoaWxkKHRhZ05hbWUpO1xuICAgICAgICB0YWdFbnRyeS5hcHBlbmRDaGlsZCh0YWdEaXYpO1xuICAgICAgICByZXR1cm4gdGFnRW50cnk7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVGFza0VudHJ5ID0gdGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHRhc2tJbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0VudHJ5LmRhdGFzZXQuaWQgPSB0YXNrLmlkO1xuICAgICAgICB0YXNrRW50cnkuc3R5bGUgPSBcIm1hcmdpbjogMnJlbTtcIjtcbiAgICAgICAgdGFza0VudHJ5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWVudHJ5XCIpO1xuICAgICAgICB0YXNrRW50cnkuYXBwZW5kQ2hpbGQoY3JlYXRlQ2hlY2ttYXJrRWxlbWVudCgpKTtcbiAgICAgICAgdGFza0luZm9EaXYuc3R5bGUgPSBcImRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA2cmVtIDVyZW07IGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSBhdXRvIGF1dG87IGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI7XG4gICAgICAgIC8vIGFkZCBvdGhlciBmaWVsZHMgb2YgdGFza1xuICAgICAgICBjb25zdCBtYWtlRmllbGQgPSAodHlwZSwgY2xhc3NOYW1lLCBzdHlsZSwgdGV4dCk9PntcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlID0gc3R5bGU7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9O1xuICAgICAgICB0YXNrSW5mb0Rpdi5hcHBlbmRDaGlsZChtYWtlRmllbGQoXCJwXCIsIFwidGl0bGVcIiwgXCJncmlkLWFyZWE6IDEvMS8xLzE7IG1hcmdpbi1sZWZ0OiAxcmVtOyBmb250LXNpemU6IDEuNXJlbTsgZm9udC13ZWlnaHQ6IDYwMDtcIiwgdGFzay50aXRsZSkpO1xuICAgICAgICB0YXNrSW5mb0Rpdi5hcHBlbmRDaGlsZChtYWtlRmllbGQoXCJwXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJncmlkLWFyZWE6IDIvMS8yLy0xOyBtYXJnaW4tbGVmdDogMXJlbTtcIiwgdGFzay5kZXNjcmlwdGlvbikpO1xuICAgICAgICB0YXNrSW5mb0Rpdi5hcHBlbmRDaGlsZChtYWtlRmllbGQoXCJwXCIsIFwiZGVhZGxpbmVcIiwgXCJncmlkLWFyZWE6IDEvMi8xLzI7XCIsIHRhc2suZGVhZGxpbmUpKTtcbiAgICAgICAgdGFza0luZm9EaXYuYXBwZW5kQ2hpbGQobWFrZUZpZWxkKFwicFwiLCBcInByaW9yaXR5XCIsXCJncmlkLWFyZWE6IDEvMy8xLzM7XCIsIHRhc2sucHJpb3JpdHkpKTtcbiAgICAgICAgY29uc3QgdGFnR3JvdXAgPSBtYWtlRmllbGQoXCJkaXZcIiwgXCJ0YWctZ3JvdXBcIiwgXCJncmlkLWFyZWE6IDMvMS8zLy0xOyBtYXJnaW4tbGVmdDogMXJlbTtcIiwgXCJcIik7XG4gICAgICAgIC8vIGFkZCB0YWdzXG4gICAgICAgIHRhc2sudGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICAgICAgICB0YWdHcm91cC5hcHBlbmRDaGlsZChjcmVhdGVUYWdFbnRyeSh0YWcpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRhc2tJbmZvRGl2LmFwcGVuZENoaWxkKHRhZ0dyb3VwKTtcbiAgICAgICAgdGFza0VudHJ5LmFwcGVuZENoaWxkKHRhc2tJbmZvRGl2KTtcbiAgICAgICAgcmV0dXJuIHRhc2tFbnRyeTtcbiAgICB9XG5cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgY29uc3QgcXVlcnlTZWxlY3RlZCA9IChzZWxlY3RvcnMpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JDb3VudCA9IHNlbGVjdG9ycy5sZW5ndGg7XG4gICAgICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKFtdKTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNlbGVjdG9yQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgcCA9IHAudGhlbigoZWxlbWVudHMpPT57cmV0dXJuIGVsZW1lbnRzLmNvbmNhdChkb21NYW5hZ2VyLnF1ZXJ5KHNlbGVjdG9yc1tpXSkpfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkTmV3VGFnID0gKHRhZywgY2xpY2tIYW5kbGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhZ0VsZW1lbnQgPSBjcmVhdGVUYWdFbnRyeSh0YWcpO1xuICAgICAgICB0YWdMaXN0RWxlbWVudC5hcHBlbmRDaGlsZCh0YWdFbGVtZW50KTtcbiAgICAgICAgdGFnRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkTmV3VGFzayA9ICh0YXNrLGNsaWNrSGFuZGxlcikgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRWxlbWVudCA9IGNyZWF0ZVRhc2tFbnRyeSh0YXNrKTtcbiAgICAgICAgdGFza0VudHJ5TGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICAgICAgICB0YXNrRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUYXNrID0gKGlkKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB0YXNrRW50cnlMaXN0RWxlbWVudC5jaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKG5vZGUuZGF0YXNldC5pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ291bGRuJ3QgZmluZCBub2RlIHdpdGggbWF0Y2hpbmcgaWRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVTaWRlTWVudVRhZ3MgPSAodGFncywgaGFuZGxlck9mQ2xpY2tIYW5kbGVyKSA9PiB7XG4gICAgICAgIHRhZ0xpc3RFbGVtZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICB0YWdzLmZvckVhY2godGFnPT57XG4gICAgICAgICAgICBhZGROZXdUYWcodGFnLCBoYW5kbGVyT2ZDbGlja0hhbmRsZXIodGFnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlSG9tZVZpZXcgPSAodGFza3MsIGhhbmRsZXJPZkNsaWNrSGFuZGxlcikgPT4gIHtcbiAgICAgICAgdGFza0VudHJ5TGlzdEVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBhZGROZXdUYXNrKHRhc2ssIGhhbmRsZXJPZkNsaWNrSGFuZGxlcih0YXNrKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGxvYWRUYWdzSW5UYXNrQ3JlYXRpb24gPSAodGFncykgPT4ge1xuICAgICAgICB0YXNrRHJvcGRvd25FbGVtZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICB0YWdzLmZvckVhY2godGFnID0+IHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBlbGVtZW50XG4gICAgICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInRhZy1pdGVtXCIpO1xuICAgICAgICAgICAgLy8gc3RvcmUgdGFnIGRhdGEgaW4gZGF0YXNldFxuICAgICAgICAgICAgbGlzdEl0ZW0uZGF0YXNldC5uYW1lID0gdGFnLm5hbWU7XG4gICAgICAgICAgICBsaXN0SXRlbS5kYXRhc2V0LmNvbG9yID0gdGFnLmNvbG9yO1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgICAgIGlucHV0Lm5hbWUgPSB0YWcubmFtZTtcbiAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSB0YWcubmFtZTtcbiAgICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICAgICAgdGFza0Ryb3Bkb3duRWxlbWVudC5hcHBlbmQobGlzdEl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkVGFza0luTW9kYWwgPSAodGFzaykgPT4ge1xuICAgICAgICAvLyBoaWRlIHRoZSBtb2RhbCBpdHNlbGYgd2hpbGUgbG9hZGluZ1xuICAgICAgICBkb21NYW5hZ2VyLnNldFZpc2libGUodGFza01vZGFsRWxlbWVudHMubW9kYWwsIGZhbHNlKTtcbiAgICAgICAgdGFza01vZGFsRWxlbWVudHMudGFncy5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgdGFza01vZGFsRWxlbWVudHMubW9kYWwuZGF0YXNldC5pZCA9IHRhc2suaWQ7XG4gICAgICAgIC8vIHNldCB0ZXh0IGZpZWxkc1xuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIGluIHRhc2spIHtcbiAgICAgICAgICAgIGlmIChmaWVsZCA9PSBcImlkXCIgfHwgZmllbGQgPT0gXCJ0YWdzXCIgfHwgZmllbGQgPT0gXCJjaGVja2VkXCIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFza01vZGFsRWxlbWVudHNbZmllbGRdLnRleHRDb250ZW50ID0gdGFza1tmaWVsZF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IGNoZWNrIGljb25cbiAgICAgICAgZG9tTWFuYWdlci5zZXRWaXNpYmxlKHRhc2tNb2RhbEVsZW1lbnRzLmNoZWNrZWQuY2hpbGRyZW5bMF0sICF0YXNrLmNoZWNrZWQpO1xuICAgICAgICBkb21NYW5hZ2VyLnNldFZpc2libGUodGFza01vZGFsRWxlbWVudHMuY2hlY2tlZC5jaGlsZHJlblsxXSwgdGFzay5jaGVja2VkKTtcbiAgICAgICAgLy8gc2V0IHRhZ3NcbiAgICAgICAgdGFzay50YWdzLmZvckVhY2godGFnID0+IHtcbiAgICAgICAgICAgIHRhc2tNb2RhbEVsZW1lbnRzLnRhZ3MuYXBwZW5kQ2hpbGQoY3JlYXRlVGFnRW50cnkodGFnKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGRpc3BsYXkgdGhlIG1vZGFsIG9uY2UgbG9hZGVkXG4gICAgICAgIGRvbU1hbmFnZXIuc2V0VmlzaWJsZSh0YXNrTW9kYWxFbGVtZW50cy5tb2RhbCk7XG4gICAgfVxuXG4gICAgY29uc3QgZXh0cmFjdFRhZyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmZvcm1zW1wibmV3VGFnRm9ybVwiXTtcbiAgICAgICAgcmV0dXJuIHtuYW1lOiBmb3JtW1wibmFtZVwiXS52YWx1ZSwgY29sb3I6IGZvcm1bXCJjb2xvclwiXX1cbiAgICB9XG5cbiAgICBjb25zdCBleHRyYWN0VGFza0Zyb21DcmVhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFzayA9IHtpZDogMCwgY2hlY2tlZDogZmFsc2V9O1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJuZXdUYXNrRm9ybVwiXTtcbiAgICAgICAgY29uc3QgZmllbGRzID0gW1widGl0bGVcIiwgXCJkZXNjcmlwdGlvblwiLCBcImRlYWRsaW5lXCIsIFwicHJpb3JpdHlcIl07XG4gICAgICAgIGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHRhc2tbZmllbGRdID0gZm9ybVtmaWVsZF0udmFsdWUpO1xuICAgICAgICBkb21NYW5hZ2VyLnF1ZXJ5QWxsKFwiLnRhc2stZ3JvdXBcIilcbiAgICAgICAgdGFzay50YWdzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB0YXNrRHJvcGRvd25FbGVtZW50LmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5jaGlsZHJlblswXS5jaGVja2VkKSB0YXNrLnRhZ3MucHVzaCh7bmFtZTogbm9kZS5kYXRhc2V0Lm5hbWUsIGNvbG9yOiBub2RlLmRhdGFzZXQuY29sb3J9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFzaztcbiAgICB9XG5cbiAgICBjb25zdCBleHRyYWN0SWRPZkN1cnJlbnRUYXNrID0gKCkgPT4gdGFza01vZGFsRWxlbWVudHMubW9kYWwuZGF0YXNldC5pZDtcblxuICAgIGNvbnN0IG9wZW5UYWdNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgZG9tTWFuYWdlci5zZXRWaXNpYmxlKHRhZ01vZGFsRWxlbWVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2VUYWdNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgZG9tTWFuYWdlci5zZXRWaXNpYmxlKHRhZ01vZGFsRWxlbWVudCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IG9wZW5UYXNrQ3JlYXRpb24gPSAoKT0+IHtcbiAgICAgICAgZG9tTWFuYWdlci5zZXRWaXNpYmxlKHRhc2tDcmVhdGlvbkVsZW1lbnQpO1xuICAgIH1cbiAgICBjb25zdCBjbG9zZVRhc2tDcmVhdGlvbiA9ICgpPT4ge1xuICAgICAgICBkb21NYW5hZ2VyLnNldFZpc2libGUodGFza0NyZWF0aW9uRWxlbWVudCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZVRhc2tMaXN0RHJvcGRvd24gPSAoKSA9PiB7XG4gICAgICAgIGRvbU1hbmFnZXIuc2V0VmlzaWJsZSh0YXNrRHJvcGRvd25FbGVtZW50LCB0YXNrRHJvcGRvd25FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3BlblRhc2tNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgZG9tTWFuYWdlci5zZXRWaXNpYmxlKHRhc2tNb2RhbEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlVGFza01vZGFsID0gKCkgPT4ge1xuICAgICAgICBkb21NYW5hZ2VyLnNldFZpc2libGUodGFza01vZGFsRWxlbWVudCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiB7IFxuICAgICAgICBxdWVyeVNlbGVjdGVkLCBcbiAgICAgICAgYWRkTmV3VGFnLFxuICAgICAgICBhZGROZXdUYXNrLFxuICAgICAgICByZW1vdmVUYXNrLFxuICAgICAgICBnZW5lcmF0ZVNpZGVNZW51VGFncywgXG4gICAgICAgIGdlbmVyYXRlSG9tZVZpZXcsXG4gICAgICAgIGV4dHJhY3RUYWcsXG4gICAgICAgIGV4dHJhY3RJZE9mQ3VycmVudFRhc2ssXG4gICAgICAgIGV4dHJhY3RUYXNrRnJvbUNyZWF0aW9uLFxuICAgICAgICBsb2FkVGFnc0luVGFza0NyZWF0aW9uLFxuICAgICAgICBsb2FkVGFza0luTW9kYWwsXG4gICAgICAgIHRvZ2dsZVRhc2tMaXN0RHJvcGRvd24sXG4gICAgICAgIG9wZW5UYWdNb2RhbCxcbiAgICAgICAgY2xvc2VUYWdNb2RhbCxcbiAgICAgICAgb3BlblRhc2tDcmVhdGlvbixcbiAgICAgICAgY2xvc2VUYXNrQ3JlYXRpb24sXG4gICAgICAgIG9wZW5UYXNrTW9kYWwsXG4gICAgICAgIGNsb3NlVGFza01vZGFsXG4gICAgfVxuICAgIFxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdmlldzsiXSwibmFtZXMiOlsicXVlcnkiLCJzZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5QWxsIiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZVNWR0VsZW1lbnQiLCJkYXRhIiwic3ZnIiwiY3JlYXRlRWxlbWVudE5TIiwicGF0aCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwic2V0VmlzaWJsZSIsInZpc2libGUiLCJlbGVtZW50Q2xhc3NMaXN0IiwicXVlcnlJZlNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwibW92ZURvd24iLCJlbGVtZW50IiwicGFyZW50Tm9kZSIsInNldENsaWNrIiwiZWxlbWVudFNlbGVjdG9yIiwiY2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkRW50cnlPZlRlbXBsYXRlIiwidGVtcGxhdGVTZWxlY3RvciIsImNvbnRhaW5lclNlbGVjdG9yIiwiZW50cnkiLCJjbG9uZU5vZGUiLCJjb250YWluZXIiLCJhZGRUZW1wb3JhcnlJbnB1dCIsImlucHV0U3R5bGUiLCJpbnB1dCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInNlbGVjdCIsImNvbnNvbGUiLCJsb2ciLCJzd2FwSW5wdXRXaXRoVGV4dCIsInRleHRTZWxlY3RvciIsInJlbW92ZUlucHV0IiwidGV4dCIsInRleHRDb250ZW50IiwidmFsdWUiLCJlbGVtZW50RXhpc3RzIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJkIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==