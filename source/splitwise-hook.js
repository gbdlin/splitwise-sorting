function do_stuff() {
    let container = $('.full_group.summary');
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
}


do_stuff();
setTimeout(do_stuff, 1000);
