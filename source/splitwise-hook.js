/* global $ */
const mutationConfig = {attributes: true, childList: true, subtree: true};

let mutationObserver;

function doStuff() {
  mutationObserver.disconnect();
  let sidebar = $('#right_sidebar_content');
  let container = sidebar.find('.full_group.summary');
  let ppl = container.children('a.personal_balance');
  let detailsBtn = container.children('a.details');

  let sortList = Array.prototype.sort.bind(ppl);
  sortList(function (a, b) {
    let $a = $(a);
    let $b = $(b);
    let amountA = $a.find('.amount').text().replace('PLN', '') * ($a.find('.balance').is('.i_owe') ? -1 : 1);
    let amountB = $b.find('.amount').text().replace('PLN', '') * ($b.find('.balance').is('.i_owe') ? -1 : 1);
    return amountA > amountB ? 1 : (amountA < amountB ? -1 : 0);
  });
  container.append(ppl);
  container.append(detailsBtn);
  mutationObserver.observe(sidebar[0], mutationConfig);
}

mutationObserver = new MutationObserver(doStuff);

doStuff();
setTimeout(doStuff, 1000);
