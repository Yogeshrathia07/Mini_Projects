const div = document.querySelector(".main");
div.innerHTML = "<h2>New Heading</h2>";  // Replaces old content with <h2>


const userInput = "<script>alert('Hacked!')</script>";
div.textContent = userInput;  // Shows as plain text, does not execute

container.innerHTML="<h1> Hello</h1>";   // print : hello
container.textContent="<h1> Hello</h1>"; // Print : <h1> Hello</h1>