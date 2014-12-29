/*
* I detta dokument skriver kod för att lägga till och ta bort tasks
* i todo-listen. Utöver funktionerna som finns nedan måste du hämta 
* elementen från DOMet och spara ner dem i variabler samt lägga till
* de eventlisteners som behövs.
*/

/* 
* Funktionen ska köras när add-knappen klickas på
* Förväxla inte add-knappen med save-knappen
*/
var taskInput = document.getElementById("new-task");
var unsavedTasks = document.getElementById("tasks");
var addBtn = document.getElementById("addbutton").addEventListener("click", addTask);
var newDeleteButton = document.getElementById("newDeleteButton").addEventListener("click",deleteTask);

function addTask()
{
    var listItem = document.createElement("li");   
    var deleteBtn = document.createElement("button");
    
    listItem.innerHTML = taskInput.value;
    deleteBtn.innerHTML="delete";
    
    deleteBtn.addEventListener("click",deleteTask);
    unsavedTasks.appendChild(listItem);
     listItem.appendChild(deleteBtn);
    
    taskInput.value ="";
}

/* 
* Funktionen ska köras när delete-knappen klickas på för en task klickas på.
* Knappen ska endast finnas när det finns en task i listan.
* Förväxla inte delete-knappen för tasks med delete-knappen i saved-listan.
*/
function deleteTask()

{this.parentNode.remove();
}