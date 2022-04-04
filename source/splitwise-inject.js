var browser = require("webextension-polyfill");

let s = document.createElement('script');
s.src = browser.extension.getURL('splitwise-hook.js');

document.documentElement.append(s);
