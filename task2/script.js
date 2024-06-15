const inpBtn = document.getElementById("add-btn");
const inpTask = document.getElementById("task-inp");
const delBtn = document.getElementById("del-btn");
const dueTime = document.getElementById("date");
var count = 0;


function addTask() {
  if (inpTask.value === "" || dueTime.value === "") {
    alert("INVALID INPUT !");
  } else {
    let task = document.createElement("div");
    task.className = "tasks";
    task.innerHTML = `
      <div class="task-tab">
        <i class="fa-solid fa-check btn check" id="check" onclick="markDone(this)"></i>
        <div class="task-text" id="task-text-${count}">${inpTask.value}</div>
      </div>
      <div class="task-tab-1">
        <div class="task-due" id="task-due-${count}">${dueTime.value}</div>
        <button class="btn del-btn" onclick="deleteTask(this)">\u00d7</button>
      </div>
`;
    document.getElementById("list-items").appendChild(task);
    count++;
  }
  inpTask.value = "";
}

function markDone(clickedIcon) {
  const taskTab = clickedIcon.parentElement;
  const taskText = taskTab.querySelector(".task-text");
  taskText.style.textDecoration = taskText.style.textDecoration === "line-through" ? "" : "line-through";
  taskText.style.color = taskText.style.color === "rgba(255, 255, 255, 0.6)" ? "" : "rgba(255, 255, 255, 0.6)";
  if(taskText.style.textDecoration === "line-through"){
    clickedIcon.className = "fa-solid fa-circle-check checked";
  }else{
    clickedIcon.className = "fa-solid fa-check btn check";
  }
}

function deleteTask(clickedBtn) {
  clickedBtn.parentElement.remove();
}
