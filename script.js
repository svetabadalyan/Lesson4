function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var button1 = document.getElementById('delete');

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;
    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }



    socket.on('display message', handleMessage);

    function deleteMsg() {
        var p = document.getElementByTagName("P");
        p.parentNode.removeChild(p);
    }
    button.onclick = deleteMsg;
} // main closing bracket

window.onload = main;