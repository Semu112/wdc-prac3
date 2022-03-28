function hideSomePosts(){

    var amtOfPostsToShow = document.getElementById("slider").value;

    for(let i = 0; i<amtOfPostsToShow; i++){
        document.getElementsByClassName("post-time")[i].style.display = "block";
        document.getElementsByClassName("post-content")[i].style.display = "block";
    }
    for(let i = amtOfPostsToShow; i<10; i++){
        document.getElementsByClassName("post-time")[i].style.display = "none";
        document.getElementsByClassName("post-content")[i].style.display = "none";
    }
}

function changeBackgroundColour(){
    document.body.style.background = document.getElementById("backgroundColor").value;
}

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

    //Post content color
    for(let c in document.getElementsByName("color")){
        if(document.getElementsByName("color")[c].checked == true){
            var postColor = document.getElementsByName("color")[c].value;
        }
    }

    var fontWeight;
    var fontStyle;

    //Post weight and italics
    if(document.getElementById("bold").checked == true){
        fontWeight = "bold";
    }
    if(document.getElementById("italics").checked == true){
        fontStyle = "italic";
    }

    var date = new Date();
    date = date.toLocaleString();

    for(let i = 0; i<document.getElementById("quantity").value; i++){

        //Post time
        var newPostTime = document.createElement('DIV');
        newPostTime.classList.add("post-time");
        newPostTime.innerText = date;

        //Post content
        var newPostContent = document.createElement('DIV');
        newPostContent.classList.add("post-content");
        newPostContent.innerText = postText;
        newPostContent.style.color = postColor;
        newPostContent.style.fontWeight = fontWeight;
        newPostContent.style.fontStyle = fontStyle;

        document.getElementById("posts").appendChild(newPostTime);
        document.getElementById("posts").appendChild(newPostContent);
    }
}