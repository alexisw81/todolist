//Define Variables
let task = document.getElementsByClassName("task");
let taskInput = document.getElementById("task-input");
let i;


//loop through the buttons to create a click event
for (i = 0; i < task.length; i++) {
    task[i].addEventListener("click", function () {
        //When task button is clicked, strike through the text
        this.classList.toggle("task-done");
    })
};

//User Enters a task in input
//when click enter 
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        //converts into button on task list
    }
})