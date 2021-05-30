export function displayMessage(message) {
    let board = $(".overview")[0];
    let div = document.createElement("div");
    let contentElements = [
        document.createElement("span"),
        document.createElement("span"),
        document.createElement("span")
    ];

    let datetime = new Date(message.time);
    let hours = datetime.getHours().toString();
    let minutes = datetime.getMinutes().toString();

    contentElements[0].innerText = `[${hours}:${minutes}] `;
    contentElements[1].innerText = message.username + ": "
    contentElements[1].style.color = message.color;
    contentElements[2].innerText = message.text;

    $(contentElements[2]).emoticonize();
    contentElements.forEach(c => div.appendChild(c));

    board.appendChild(div);
}

export function updateScrollbar(updateValue) {
    $("#chatlist").tinyscrollbar().data().plugin_tinyscrollbar.update(updateValue);
}

export function getRandomColor() {
    return "#" + (Math.random().toString(16) + "000000").substring(2, 8);
}
