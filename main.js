'use strict'
function format (response) {
    console.log (response);
    return response.json();
}
function render1 (posts) {
    var html='';
    for (var post of posts) {   /*цыклом мы единый масив разбиваем на несколько, отдельно*/
    html += '<div class="post">';
    html += '<p>' +post.data_update+ '</p>'
    html += '<h2>' +post.title+ '</h2>'
    html += '<p>' +post.description+ '</p>'
    html += '</div>';
}
return html;
}
function render2 (str) {
    var conteiner = document.querySelector('#list-posts'); /*ssilka na hml dokument*/
    conteiner.innerHTML = str;
    console.dir (conteiner);
}


function showPosts() {
fetch ("http://blog.api.axenov-it.com/posts")   /*обращение к апи*/
.then (format)
.then (render1)
.then (render2);
}
var btn = document.querySelector('#render-posts');
console.dir (btn);

var isOpen = false;

function toggle () {
var conteiner = document.querySelector('#list-posts');
if (isOpen) {
    conteiner.innerHTML = '';
    isOpen = false;
} else {
    showPosts ();
    isOpen = true;
}
}

btn.onclick = toggle;   /*onclick nado smotret v cvoystvah peredannogo masiva html*/