// Load saved data from local storage on page load
window.addEventListener("DOMContentLoaded", function () {
    const savedData = JSON.parse(localStorage.getItem("liststorage"));
    if (savedData) {
      // Restore the saved data for each list
      listTodos.innerHTML = savedData.todo || "";
      listDoing.innerHTML = savedData.doing || "";
      listDone.innerHTML = savedData.done || "";
  
      // Update item counts
      countTaskTodos.innerHTML = `(${savedData.countTodo || 0})`;
      countTaskDoing.innerHTML = `(${savedData.countDoing || 0})`;
      countTaskDone.innerHTML = `(${savedData.countDone || 0})`;
    }
  });
  
  createtask.addEventListener("click", function (e) {
    e.preventDefault();
  
    if (title !== "" && description !== "") {
      const status = statusTaskField.value;
  
      // Create list item elements
      listcontainer = document.createElement("li");
      listitemtitle = document.createElement("h5");
      listitemdescription = document.createElement("p");
      titletextnode = document.createTextNode(title);
      desctextnode = document.createTextNode(description);
      listitemtitle.appendChild(titletextnode);
      listitemdescription.appendChild(desctextnode);
      listcontainer.appendChild(listitemtitle);
      listcontainer.appendChild(listitemdescription);
      listcontainer.classList.add("listcontainer");
  
      // Add the list item to the appropriate list
      if (status === "Todo") {
        listTodos.appendChild(listcontainer);
        countitemtodo += 1;
        countTaskTodos.innerHTML = `(${countitemtodo})`;
      } else if (status === "Doing") {
        listDoing.appendChild(listcontainer);
        countitemdoing += 1;
        countTaskDoing.innerHTML = `(${countitemdoing})`;
      } else if (status === "Done") {
        listDone.appendChild(listcontainer);
        countitemdone += 1;
        countTaskDone.innerHTML = `(${countitemdone})`;
      }
  
      // Save updated data to local storage
      const savedData = {
        todo: listTodos.innerHTML,
        doing: listDoing.innerHTML,
        done: listDone.innerHTML,
        countTodo: countitemtodo,
        countDoing: countitemdoing,
        countDone: countitemdone,
      };
      localStorage.setItem("liststorage", JSON.stringify(savedData));
  
      // Clear input fields and reset variables
      inputField.value = "";
      descriptionField.value = "";
      title = "";
      description = "";
  
      // Close modal
      modal.classList.add("modal-hide");
      addNewButton.textContent = "Show Content";
    } else {
      alert("List item cannot be empty");
    }
  });
  
  
   countTaskTodos.innerHTML = `(${savedData.countTodo || 0})`;
      countTaskDoing.innerHTML = `(${savedData.countDoing || 0})`;
      countTaskDone.innerHTML = `(${savedData.countDone || 0})`;