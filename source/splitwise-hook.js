const mutation_config = { attributes: true, childList: true, subtree: true };

let mutation_observer;

function do_stuff() {
    mutation_observer.disconnect();
    let sidebar = $('#right_sidebar_content');
    let container = sidebar.find('.full_group.summary');
    let ppl = container.children('a.personal_balance');
    let details_btn = container.children('a.details');

    var sortList = Array.prototype.sort.bind(ppl);
    sortList(function (a, b) {
      var a = $(a), b = $(b);
      var amount_a = a.find('.amount').text().replace('PLN', '') * (a.find('.balance').is('.i_owe')?-1:1);
      var amount_b = b.find('.amount').text().replace('PLN', '') * (b.find('.balance').is('.i_owe')?-1:1);
      return amount_a > amount_b ? 1 : amount_a < amount_b ? -1 : 0
    });
    container.append(ppl);
    container.append(details_btn);
    mutation_observer.observe(sidebar[0], mutation_config);
}

mutation_observer = new MutationObserver(do_stuff);


do_stuff();
setTimeout(do_stuff, 1000);
