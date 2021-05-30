function join() {
    let input = document.getElementById("username");

    if (input.value) {
        localStorage.setItem("username", input.value);
        location.assign("chat.html");
    }
}

document.getElementById("join").addEventListener("click", join);

if (localStorage.getItem("username"))
    location.assign("chat.html");
