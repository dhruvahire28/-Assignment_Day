let students = [
  { name: "Amit", roll: 1, marks: 85 },
  { name: "Sara", roll: 2, marks: 72 },
  { name: "Raj", roll: 3, marks: 65 }
];

function displayStudents(studentArray) {
  let listDiv = document.getElementById("studentList");
  listDiv.innerHTML = ""; // Clear previous data

  studentArray.forEach(student => {
    let info = document.createElement("p");
    info.textContent = `Name: ${student.name}, Roll: ${student.roll}, Marks: ${student.marks}`;
    listDiv.appendChild(info);
  });
}

// Initial display
displayStudents(students);

function showTopScorers() {
  let topStudents = students.filter(s => s.marks > 70);
  displayStudents(topStudents);
}

function addStudent() {
  let name = document.getElementById("nameInput").value;
  let roll = parseInt(document.getElementById("rollInput").value);
  let marks = parseInt(document.getElementById("marksInput").value);

  if (name && !isNaN(roll) && !isNaN(marks)) {
    students.push({ name: name, roll: roll, marks: marks });
    displayStudents(students);
  } else {
    alert("Please fill in all fields correctly.");
  }
}
