

//ref to blog page
document.getElementById('discover-section').addEventListener('click', function(){
    window.location.href="/blog.html";
})

//color change
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('theme-btn').addEventListener('click', function(){
    document.body.style.backgroundColor = getRandomColor();
})

//time and date
function formatDate() {
    const date = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weekday = weekdays[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    document.getElementById("weekday").textContent = `${weekday},`;
    document.getElementById("date").textContent = `${month} ${day} ${year}`;
}
formatDate();


//completed task progress
document.getElementById('completed-btn').addEventListener('click',function(){

    const completedTask = getInnerTextByID('completed-task');
    const currentCompletedTask = completedTask + 1;
    setInnerTextByIDandValue('completed-task', currentCompletedTask);

    const pendingTask = getInnerTextByID('pending-task');
    const currentPendingTask = pendingTask - 1;
    setInnerTextByIDandValue('pending-task', currentPendingTask);

   
    const button = document.getElementById('completed-btn');
    button.disabled = true;
    button.classList.add('bg-gray-400', 'cursor-not-allowed');

})
