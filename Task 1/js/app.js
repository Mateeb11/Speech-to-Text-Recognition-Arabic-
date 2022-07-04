const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "ar-SA";

const start = document.querySelector(".start");
const result = document.querySelector(".result");

start.addEventListener("click", () => {
    recognition.start();
    result.textContent = "...";

    start.classList.add("listening");
    start.textContent = "Listening....";
});
recognition.onresult = (event) => {
    result.textContent = event.results[0][0].transcript;
    recognition.stop();
};
recognition.onspeechend = () => {
    start.classList.remove("listening");
    start.textContent = "Start";
};
