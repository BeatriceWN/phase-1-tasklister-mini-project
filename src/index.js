/*
Deliverables
As a user, I should be able to type a task into the input field.
As a user, I should be able to click some form of a submit button.
As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.
*/

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  const taskInput = document.getElementById('new-task-description');
  const prioritySelect = document.getElementById("priority");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
   
    const taskText = taskInput.value;
    const priority = prioritySelect ? prioritySelect.value : "medium"; //fallback

    if (taskText.trim() !== "") {
      //create <li> for the new task
      const li = document.createElement("li");
      li.textContent = taskText + " ";

      //style the task based on priority
      li.classList.add(priority); // You can use CSS to color these

      //create delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.addEventListener("click", () => {
        li.remove();
      });

      //append delete button to task item
      li.appendChild(deleteBtn);

      // Append task item to the list
      taskList.appendChild(li);

      //clear inputs
      taskInput.value = "";
      if (prioritySelect) prioritySelect.value = "medium";
    }
  });
});
