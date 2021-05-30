const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click',() => {mainnav.classList.toggle('responsive')},false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const datefield = document.querySelector("date");
const now = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(now);
//datefield.innerHTML = `<em>${fulldate}</em>`;
//datefield.innerHTML = now.toUTCString();
document.getElementById("currentDate").innerHTML = days[now.getDay()] + ", " + now.getDay() + " " + months[now.getMonth()] + " " + now.getFullYear() 