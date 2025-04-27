const inputbox =  document.getElementById("input-box"); 
const taskslist = document.getElementById("tasks-list");
const addbutton = document.querySelector(".add-btn");
inputbox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      addbutton.click();
    }
  });
addbutton.onclick= function()
{ 
    if(inputbox.value === '')
    { 
        alert("The input box is empty!");
    }
    else 
    { 
        let li = document.createElement("li");
        li.innerHTML = inputbox.value; 
        taskslist.appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    saveTask(); 
    inputbox.value = ""; 
}

function saveTask()
{
    localStorage.setItem("info",taskslist.innerHTML);
}
//reloads taks saved by saveTask()from the local storage; 
function reloadTasksList()
{ 
 taskslist.innerHTML = localStorage.getItem("info");
}
taskslist.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveTask();
    }
    else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveTask();

    }
}, false);

reloadTasksList();
