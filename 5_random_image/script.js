const img_container = document.querySelector('.random-image');
const btn= document.querySelector('.btn');

btn.addEventListener('click',()=>{
    for(let i=0;i<4;i++){
        add_image();
    }
    // add_image();
})

function add_image(){
    const new_img=document.createElement('img');
    new_img.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
    img_container.appendChild(new_img);
}