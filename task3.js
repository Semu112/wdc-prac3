function hideMain(){
    document.getElementById("main").style.display = "none";
    document.getElementById("menu").style.display = "inline";
}

function backToMenu(){
    document.getElementById("main").style.display = "inline";
    document.getElementById("menu").style.display = "none";
}


var counter = 0;

function incrementCounter() {
    counter++;
    document.getElementById('mcount').innerText = counter;
}

function post() {
    var postText = document.getElementById('textArea').value;

    var date = new Date();
    document.getElementsByClassName('post-time')[0].innerText = date.toLocaleString();

    for(let c in document.getElementsByName("color")){
        if(document.getElementsByName("color")[c].checked == true){
            document.getElementsByClassName('post-content')[0].style.color = document.getElementsByName("color")[c].value;
        }
    }

    document.getElementsByClassName('post-content')[0].innerText = postText;
}