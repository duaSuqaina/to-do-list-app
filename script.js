  function addTask() {
      const taskInput = document.getElementById("taskInput");
      const taskText = taskInput.value.trim();

      if (taskText === "") return;

      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = taskText;
      span.className = "task-text";
      span.onclick = function () {
        span.classList.toggle("completed");
      };

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.onclick = function () {
        const newText = prompt("Edit task:", span.textContent);
        if (newText !== null && newText.trim() !== "") {
          span.textContent = newText.trim();
        }
      };

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = function () {
        li.remove();
      };

      li.appendChild(span);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);

      document.getElementById("taskList").appendChild(li);
      taskInput.value = "";
    }