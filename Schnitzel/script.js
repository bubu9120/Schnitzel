let currentTaskIndex = 0; 

const tasks = [ 
  { location: "Eingang", description: "Willkommen! Was ist das erste Zimmer auf der rechten Seite?", answer: "Zimmer 101" }, 
  { location: "Bibliothek", description: "Wie viele Bücherregale gibt es hier?", answer: "5" }, 
  { location: "Labor", description: "Welche Farbe hat die Tür?", answer: "Blau" }, 
  { location: "Cafeteria", description: "Wie viele Tische gibt es in der Cafeteria?", answer: "10" }, 
  { location: "Turnhalle", description: "Was steht auf dem Schild neben der Turnhalle?", answer: "Kein Zutritt" } 
]; 

function startHunt() {
  document.getElementById('intro').classList.add('hidden'); 
  showTask(); 
} 

function showTask() { 
  const task = tasks[currentTaskIndex]; 
  document.getElementById('location-name').innerText = task.location;
  document.getElementById('description').innerText = task.description;
  document.getElementById('task').classList.remove('hidden'); 
} 

function checkAnswer() { 
  const userAnswer = document.getElementById('answer').value.trim(); 
  const task = tasks[currentTaskIndex]; 
  
  if (userAnswer.toLowerCase() === task.answer.toLowerCase()) { 
    document.getElementById('result-message').innerText = "Richtig!"; 
  } else {
    document.getElementById('result-message').innerText = "Falsch, versuche es nochmal."; 
  }
  
  document.getElementById('task').classList.add('hidden'); 
  document.getElementById('result').classList.remove('hidden'); 
}

function nextTask() { 
  document.getElementById('result').classList.add('hidden');
  document.getElementById('answer').value = '';
  currentTaskIndex++; 
  
  if (currentTaskIndex < tasks.length) { 
    showTask(); 
  } else { 
    document.getElementById('completion').classList.remove('hidden'); 
  } 
}
