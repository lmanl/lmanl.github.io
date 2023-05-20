function makeBigger() {
    document.getElementById("inputText").style.fontSize = "24pt";
}


function radioAlert() {
    alert("Style Changed");
}


function makeFancy() {
    document.getElementById("inputText").style.fontWeight = "bold";
    document.getElementById("inputText").style.color = "blue";
    document.getElementById("inputText").style.textDecoration = "underline";
}


function makeBoring() {
    document.getElementById("inputText").style.fontWeight = "normal";
    document.getElementById("inputText").style.color = "black";
    document.getElementById("inputText").style.textDecoration = "none";
}


function makeMoo() {
    const text = document.getElementById("inputText").value;
    const words = text.split(".");

    for(let i = 0; i < words.length; i++) {
        let word = words[i].trim();
        word += "-Moo";
        words[i] = word;
    }

    document.getElementById("inputText").value = words.join(" ");
}