import * as Data from "./modules/data.js";
import * as Api from "./modules/messaging.js";
import * as Visual from "./modules/visualization.js";

let input = $("#message")[0];
let username = localStorage.getItem("username");
let color = Visual.getRandomColor();

input.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        if (input.value === "") return;
        let msg = new Data.Message(
            input.value,
            color,
            username,
            Date.now()
        )
        input.value = "";
        Api.send(msg);
    }
});

Api.receive((message) => {
    let scrollUpdate = document.activeElement == input ? "bottom" : "relative";

    Visual.displayMessage(message);
    Visual.updateScrollbar(scrollUpdate);
});
