var inputAggiungi = document.getElementById("inputAggiungi");
var bottoneAggiungi = document.getElementById("bottoneAggiungi");
var lista = document.getElementById("lista");
var inputRimuovi = document.getElementById("inputRimuovi");
var bottoneRimuovi = document.getElementById("bottoneRimuovi");
var bottoneVisualizza = document.getElementById("bottoneVisualizza");
var toDoList = [];
var idCounter = 1;
function aggiungiTask() {
    var testo = inputAggiungi.value;
    var nuovoTask = {
        id: idCounter++,
        testo: testo,
    };
    toDoList.push(nuovoTask);
    inputAggiungi.value = "";
}
;
function rimuoviTask() {
    var taskDaRimuovere = inputRimuovi.value;
    toDoList.forEach(function (task, index) {
        if (task.testo == taskDaRimuovere) {
            toDoList.splice(index, 1);
        }
    });
    inputRimuovi.value = "";
}
function aggiornaLista() {
    lista.innerHTML = '';
    toDoList.forEach(function (todo) {
        var task = document.createElement("li");
        task.textContent = todo.testo;
        task.addEventListener("click", function () {
            lista.removeChild(task);
            aggiornaLista();
        });
        lista.appendChild(task);
    });
}
bottoneAggiungi.addEventListener("click", aggiungiTask);
bottoneRimuovi.addEventListener("click", rimuoviTask);
bottoneVisualizza.addEventListener("click", aggiornaLista);
