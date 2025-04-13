const btn = document.querySelector(".button");

btn.addEventListener("mouseover", (e) => {
    const x = e.clientX - btn.offsetLeft;
    const y = e.clientY - btn.offsetTop;
    console.log(x,y);
    // console.log(y);
    btn.style.setProperty("--var_x", x + "px");
    btn.style.setProperty("--var_y", y + "px");
});
