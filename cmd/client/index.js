let selectedChat = "general"
let conn

const changeChatRoom = () => {
    let newChat = document.getElementById("chatroom")
    if(newChat != null && newChat.value !== selectedChat) {
        console.log(newChat)
    }

    return false
}

const sendMessage = () => {
    let newMessage = document.getElementById("message")
    if(newMessage != null) {
        console.log(newMessage)
    }

    return false
}

window.onload = () => {
    document.getElementById("chatroom-selection").onsubmit = changeChatRoom
    document.getElementById("chatroom-message").onsubmit = sendMessage

    if(window["WebSocket"]) {
        console.info("Supports websocket!")

        conn = new WebSocket("ws://" + document.location.host + "/ws")
    } else {
        alert("Not supporting websocket!")
    }
}