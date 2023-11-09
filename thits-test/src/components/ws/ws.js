import {io} from "socket.io-client";
import {drawContent} from "./drowContent.js";

const socket = io("ws://server.observer-app.pro");

export const connect = () => {
    const quitElement = document.querySelector("#btn");

    quitElement?.addEventListener("click", (event) => {

        socket.emit("room/create", {name: "Nikita"});


        socket.on("room/update", (data) => {

            console.log(data);
            //
            // localStorage.setItem("ROOM_ID", JSON.stringify(data.id))
            // localStorage.setItem("USER_ID", JSON.stringify(data.users[0].id))
            //
            // const roomID = JSON.parse(localStorage.getItem("ROOM_ID"))
            // const userID = JSON.parse(localStorage.getItem("USER_ID"))

            const roomID = data.id
            const userID = data.users[0].id

            window.history.pushState(
                {},
                '',
                `?room=${roomID}&user=${userID}`
            )
            drawContent()
        })
    });

}

export const rehost = () => {


    const url = new URL(window.location.href)

    socket.on("room/rehost", {
        "room_id": url.searchParams.get("room"),
        "user_id": url.searchParams.get("user")
    })

    console.log(socket)

}



