var title;
var message;

title ="Molly's Specital Offers";
message = '<a href=\"sale.html\">25% off</a>';

var elTitle = document.getElementById('title');
elTitle.textContent = title;

var elNote = document.getElementById('note');
elNote.innerHTML = message;