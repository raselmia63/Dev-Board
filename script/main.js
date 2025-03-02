const completeBtn = document.querySelectorAll('.completed-btn-1');

//ref to blog page
document.getElementById('discover-section').addEventListener('click', function(){
    window.location.href="./blog.html";
})

//theme color change
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

//task history
function addToHistory(taskTitle) {
    let historySection = document.getElementById("task-history");

    let options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    let currentTime = new Date().toLocaleTimeString('en-US', options); 

    let newHistoryItem = `
        <div class="bg-[#F4F7FF] p-4 rounded-lg shadow mb-6">
            <h3 class="text-base font-normal color-black">
                You have completed the task <span class="font-semibold">${taskTitle}</span> at ${currentTime}
            </h3>
        </div>
    `;

    historySection.innerHTML += newHistoryItem;
}

let clickCount =0;

completeBtn.forEach(btn => {
    btn.addEventListener('click', function(e){
    const completedTask = getInnerTextByID('completed-task');
    const currentCompletedTask = completedTask + 1;
    setInnerTextByIDandValue('completed-task', currentCompletedTask);

    const pendingTask = getInnerTextByID('pending-task');
    const currentPendingTask = pendingTask - 1;
    setInnerTextByIDandValue('pending-task', currentPendingTask);

    let button = document.getElementById('completed-btn-' + taskId);
    button.disabled = true;
    button.classList.add('bg-gray-400', 'cursor-not-allowed');

     // Dynamic task title
     let taskTitleElement = document.getElementById('task-title-' + taskId);
     let taskTitle = taskTitleElement.innerText.trim();

     // completed task added to history
     addToHistory(taskTitle);

    // alert 
  
    clickCount++;
    if (clickCount > 0 && clickCount <= 6) {
        alert("Board Updated Successfully");
    }
    if (clickCount === 6) {
        alert("🎉🎉🎉 Congratulations! You have completed all the current tasks.");
    }
    })
})
// clear history 
function clearHistory() {
    let historySection = document.getElementById("task-history");
    historySection.innerHTML = "";
}

