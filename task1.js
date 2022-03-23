function showTime() {
    date = new Date();
    document.getElementById('current_time').innerText = date.toLocaleString()
};