// const url = "http://irc.gorscy.net/api/";
const url = "http://localhost:3000/"

export async function receive(callback) {
    let response = await fetch(url + "update");
    if (response.status == 502)
        await receive(callback);
    else if (response.status != 200) {
        console.log(response.statusText);
        await new Promise(resolve => setTimeout(resolve, 1000));
        await receive(callback);
    }
    else {
        let message = await response.json();
        callback(message);
        await receive(callback);
    }
}

export async function send(message) {
    let response = await fetch(url + "send", {
        method: "POST",
        body: JSON.stringify(message),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (!response.ok)
        console.log(await response.json());
}
