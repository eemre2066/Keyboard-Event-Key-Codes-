const key = document.querySelector(".key");
const keyCode = document.querySelector(".keyCode");
const eventCodes = document.querySelector(".eventCodes");

window.addEventListener("keydown", function (event) {
    key.textContent = `${event.key === " " ? "Space" : event.key}`; //! event.key space ise space değilse tıklanan tuşu yazdir
    keyCode.textContent = event.keyCode;
    eventCodes.textContent = `${event.code}`;


})