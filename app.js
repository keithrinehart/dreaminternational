const locations = document.getElementById("dropboxone");
const offNav = document.getElementById("landscape");
const prices = document.getElementById("dropboxtwo");
const toDo = document.getElementById("dropboxthree");
const contacts = document.getElementById("contact");

let drop1MouseOn = function () {
  dropdowncontent.style.opacity = "1";
  dropdowncontent.style.transition = "800ms";
  dropdowncontent.style.top = "-60px";
  dropdowncontent2.style.top = "-290px";
  dropdowncontent3.style.top = "-290px";
};

let drop1MouseOff = function () {
  dropdowncontent.style.opacity = "0";
  dropdowncontent.style.transition = "400ms";
  dropdowncontent.style.top = "-290px";
  //DIFFERENT SECTIONS
  dropdowncontent2.style.top = "-290px";
  dropdowncontent3.style.top = "-290px";
};

let drop2MouseOn = function () {
  dropdowncontent2.style.opacity = "1";
  dropdowncontent2.style.transition = "800ms";
  dropdowncontent2.style.top = "-60px";
  //DIFFERENT SECTIONS
  dropdowncontent.style.top = "-290px";
  dropdowncontent3.style.top = "-290px";
};

let drop3MouseOn = function () {
  dropdowncontent3.style.opacity = "1";
  dropdowncontent3.style.transition = "800ms";
  dropdowncontent3.style.top = "-60px";
  //DIFFERENT SECTIONS
  dropdowncontent.style.top = "-290px";
  dropdowncontent2.style.top = "-290px";
};

let drop4MouseOn = function () {
  //DIFFERENT SECTIONS
  dropdowncontent.style.top = "-290px";
  dropdowncontent2.style.top = "-290px";
  dropdowncontent3.style.top = "-290px";
};

// Event Listener
locations.addEventListener("mouseover", drop1MouseOn);
offNav.addEventListener("click", drop1MouseOff);
prices.addEventListener("mouseover", drop2MouseOn);
toDo.addEventListener("mouseover", drop3MouseOn);
contacts.addEventListener("mouseover", drop4MouseOn);
