//Define Variables
let task = document.getElementsByClassName("task");
let taskInput = document.getElementById("task-input");
let i;
let newTask;
click();

//User Enters a task in input
//when click enter 
taskInput.addEventListener("keypress", function (event) {
    let value = taskInput.value;
    if (event.key === "Enter") {
        //converts input value into button on task list

        
        newTask = document.createElement('button')
        const newTaskValue = document.createTextNode(value);
        newTask.appendChild(newTaskValue);
        document.getElementById("list").appendChild(newTask);
        newTask.classList.add("task");

        //Adding the strike toggle
        newTask.addEventListener("click", function () {
            this.classList.toggle("task-done");

        })


        //TODO Add new buttons to click event loop
            console.log(newTask);
        return (newTask);

    }
})


//loop through the buttons to create a click event
function click() {
    
    for (i = 0; i < task.length; i++) {
        console.log(task);
        task[i].addEventListener("click", function () {
            //When task button is clicked, strike through the text
            this.classList.toggle("task-done");

        })
    };
}
