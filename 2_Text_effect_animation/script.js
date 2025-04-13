var container=document.querySelector(".container")

var arr=["Yogesh","Software Developer","Engineer","Web Developer","Backend Developer"]

var i=0
var char_i=1

update();

function update(){
    char_i++;
    container.innerHTML=`<h1>Hi! I am  ${arr[i].slice(0,1)==="E"?"@":"."} ${arr[i].slice(0,char_i)}.</h1>`;
    if(char_i===arr[i].length)
    {
        char_i=0
        i++
    }
    if(i===arr.length)
    {
        char_i=0;
        i=0;
    }
    setTimeout(update,200)
}