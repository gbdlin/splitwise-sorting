var s = document.createElement('script');

s.src = browser.extension.getURL('splitwise-hook.js')
// s.onload = function () {
//     this.remove();
// };

document.documentElement.appendChild(s);
