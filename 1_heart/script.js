var main = document.querySelector("#main");

main.addEventListener("mousemove", function (i) {
    const new_span = document.createElement("span");
    new_span.style.left=i.x+"px";
    new_span.style.top=i.y+"px";
    main.appendChild(new_span);
    // console.log("add")
    const size=Math.random()*100;
    new_span.style.height=size+"px";
    new_span.style.width=size+"px";
    setTimeout(function(){
        new_span.remove();
    },3000)
});
