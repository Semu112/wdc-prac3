function showTime(){
    date = new Date();
    document.getElementById('current_time').innerText = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
};