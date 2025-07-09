document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("heading").textContent = "Hello from JavaScript!";
  document.getElementById("paragraph").textContent = "The paragraph has been updated!";
});
document.getElementById("submitBtn").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value;
  document.getElementById("welcomeMessage").textContent = `Welcome, ${name}!`;
});

document.getElementById("bgBtn").addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskText = document.getElementById("taskInput").value;
  if (taskText.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);
  document.getElementById("taskInput").value = "";
});
