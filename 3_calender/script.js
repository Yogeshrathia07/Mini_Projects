const month_name = document.querySelector(".month-name");
const day_name = document.querySelector(".day-name");
const day_number = document.querySelector(".day-number");
const year_number = document.querySelector(".year-number");

const data = new Date()


month_name.innerText = data.toLocaleDateString("en-US", { month: "long" });


day_name.innerText = data.toLocaleDateString("en-US", { weekday: "long" });


day_number.innerText = data.getDate();

year_number.innerText = data.getFullYear();




// const data=new Date();
// console.log(data.getDate());
// console.log(data.getDay());
// console.log(data.getFullYear());
// console.log(data.getMonth());
