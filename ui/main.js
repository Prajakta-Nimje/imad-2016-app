console.log('Loaded!');
//change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHtml = 'New Value';

//Move the image
var img=document.getElementById('madi');
img.oncLick = function() {
    img.style.marginLeft = '100px';
};