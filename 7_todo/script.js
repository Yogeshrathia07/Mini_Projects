const input_user=document.querySelector(".user_input");
const list_items=document.querySelector(".list_items");

function addTask(){
    if(input_user.value=== ""){
        alert("Please enter a task.");
        return;
    }
    else{
        const li=document.createElement("li");
        li.innerHTML=input_user.value;
        list_items.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        saveData();
    }
}

list_items.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",list_items.innerHTML);
}
function showTask(){
    list_items.innerHTML=localStorage.getItem("data");
}
showTask();