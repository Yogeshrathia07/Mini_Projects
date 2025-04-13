  const new_span = document.createElement("span"); 
  # if we want to create elemnts like <span></span>

Example:--------------------
const heading = document.createElement("h1");  // Create <h1>
heading.innerText = "Hello, World!";           // Set text inside <h1>
document.body.appendChild(heading);            // Add <h1> to the page

const box = document.createElement("div"); // Create <div>
box.classList.add("my-box");               // Add class "my-box"
document.body.appendChild(box);            // Append to page

const button = document.createElement("button"); // Create <button>
button.id = "click-me";                          // Set ID
button.innerText = "Click Me";                   // Set text
document.body.appendChild(button);               // Append button

const main = document.querySelector(".main");  // Select the element with class "main"
const newSpan = document.createElement("span"); // Create <span>
newSpan.innerText = "Hello!";                   // Add text inside <span>
main.appendChild(newSpan);                      // Add <span> inside "main"

#-------------------- Add style before addition of element
#-------------------- Rremove after adding the elemnt
setTimeout(function(){
        new_span.remove();
    },3000)