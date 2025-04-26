var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var txt = document.querySelector(".txt");

var hex1="#ff7e5f", hex2="#feb47b";
const get_hex = () => {
    var hex_val="0123456789abcdef";
    var hex="#";
    for(var i=0;i<6;i++)
    {
        hex+= hex_val[Math.floor(Math.random() * 16)];
    }
    return hex;
};

btn1.addEventListener("click", () => {
    hex1=get_hex();
    document.body.style.background=`linear-gradient(to right, ${hex1}, ${hex2})`;
    btn1.textContent=hex1;
    btn1.style.background=hex1;
    txt.textContent=`background-image: linear-gradient(to right, ${hex1}, ${hex2});`;
    console.log(hex1,hex2);
});

btn2.addEventListener("click", () => {
    hex2=get_hex();
    document.body.style.background=`linear-gradient(to right, ${hex1}, ${hex2})`;
    btn2.textContent=hex2;
    txt.textContent=`background-image: linear-gradient(to right, ${hex1}, ${hex2});`;
    btn2.style.background=hex2;

    console.log(hex1,hex2);
});

