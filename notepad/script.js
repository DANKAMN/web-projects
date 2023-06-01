function changeFont(font) {
    document.getElementById('content').style.fontFamily = font.value;
    document.getElementById('content').style.fontSize = `${font.value}px`;

    if(document.getElementById('content').style.fontStyle === "normal") {
        document.getElementById('content').style.fontStyle = font.value;
    } else {
        document.getElementById('content').style.fontStyle = "normal";
    }

    if(document.getElementById('content').style.fontWeight === "normal") {
        document.getElementById('content').style.fontWeight = font.value;
    } else {
        document.getElementById('content').style.fontWeight = "normal";
    }

    if(document.getElementById('content').style.textDecoration === "none") {
        document.getElementById('content').style.textDecoration = font.value;
    } else {
        document.getElementById('content').style.textDecoration = "none";
    }    
}

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('content').value = "";
});

document.getElementById('reset').addEventListener('click', function() {
    window.location.reload();
});