const inputAggiungi = document.getElementById("inputAggiungi")! as HTMLInputElement;
const bottoneAggiungi = document.getElementById("bottoneAggiungi")! as HTMLButtonElement;
const lista = document.getElementById("lista")! as HTMLUListElement;
const inputRimuovi = document.getElementById("inputRimuovi")! as HTMLInputElement;
const bottoneRimuovi = document.getElementById("bottoneRimuovi")! as HTMLButtonElement;
const bottoneVisualizza = document.getElementById("bottoneVisualizza")! as HTMLButtonElement;

type ToDo = {
    id: number;
    testo: string;
};

let toDoList : ToDo [] = []

let idCounter = 1

function aggiungiTask (): void {
        const testo = inputAggiungi.value;

        const nuovoTask: ToDo = {
           
            id: idCounter++,
            testo: testo,
        };

        toDoList.push (nuovoTask);
        inputAggiungi.value = "";
};

function rimuoviTask (): void {
    const taskDaRimuovere = inputRimuovi.value;
    toDoList.forEach((task, index) => {
        if (task.testo == taskDaRimuovere) {
            toDoList.splice(index,1);
        }
    });
    inputRimuovi.value="";
}

function aggiornaLista ():void {
    lista.innerHTML = '';
    toDoList.forEach (todo => {
        const task = document.createElement("li");
        task.textContent = todo.testo;
    
        task.addEventListener("click", () => {
            lista.removeChild(task);
            aggiornaLista();
        });
    
        lista.appendChild (task);
    });
}

bottoneAggiungi.addEventListener("click", aggiungiTask);
bottoneRimuovi.addEventListener("click", rimuoviTask);
bottoneVisualizza.addEventListener("click", aggiornaLista);