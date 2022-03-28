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

        document.getElementById("posts").appendChild(newPostTime);
        document.getElementById("posts").appendChild(newPostContent);
        /*

        const timeNode = document.querySelector("#posts > .post-time").lastChild;
        const timeNodeAttributes = document.querySelector("#posts > .post-time").attributes;

        const contentNode = document.querySelector("#posts > .post-content").lastChild;
        const contentNodeAttributes = document.querySelector("#posts > .post-content").attributes;


        const clonedTime = timeNode.cloneNode(true);
        clonedTime.attributes = timeNodeAttributes;

        const clonedContent = contentNode.cloneNode(true);
        clonedContent.attributes = contentNodeAttributes;

        document.getElementById("posts").appendChild(clonedTime);
        document.getElementById("posts").appendChild(clonedContent);
        */
    }
}