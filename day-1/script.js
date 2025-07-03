let log = JSON.parse(localStorage.getItem("fitLog")) || [];
let timerInterval;

document.getElementById("workoutForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const entry = {
    date: document.getElementById("date").value,
    exercise: document.getElementById("exercise").value,
    sets: document.getElementById("sets").value,
    reps: document.getElementById("reps").value,
    weight: document.getElementById("weight").value,
  };
  log.push(entry);
  localStorage.setItem("fitLog", JSON.stringify(log));
  this.reset();
  displayLog();
  updateChart();
});

function displayLog() {
  const tbody = document.getElementById("logBody");
  tbody.innerHTML = "";
  log.forEach((entry, index) => {
    const row = `<tr>
      <td>${entry.date}</td>
      <td>${entry.exercise}</td>
      <td>${entry.sets}</td>
      <td>${entry.reps}</td>
      <td>${entry.weight}</td>
      <td><button onclick="deleteEntry(${index})">Delete</button></td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

function deleteEntry(index) {
  log.splice(index, 1);
  localStorage.setItem("fitLog", JSON.stringify(log));
  displayLog();
  updateChart();
}

function clearAll() {
  if (confirm("Clear all entries?")) {
    log = [];
    localStorage.removeItem("fitLog");
    displayLog();
    updateChart();
  }
}

// Timer functions
function startTimer() {
  let timeLeft = 180;
  updateTimerDisplay(timeLeft);
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay(timeLeft);
    if (timeLeft <= 0) clearInterval(timerInterval);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function updateTimerDisplay(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  document.getElementById("time").textContent = `${mins}:${secs}`;
}

// Chart.js progress chart
let chart;
function updateChart() {
  const labels = log.map(e => e.date);
  const data = log.map(e => parseInt(e.weight));
  const ctx = document.getElementById('progressChart').getContext('2d');

  if (chart) chart.destroy(); // clear old chart
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Weight Lifted (kg)',
        data: data,
        borderColor: 'blue',
        backgroundColor: 'lightblue',
        fill: true,
        tension: 0.3
      }]
    }
  });
}

// Initialize
displayLog();
updateChart();
