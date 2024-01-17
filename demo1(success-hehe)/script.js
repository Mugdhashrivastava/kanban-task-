
//local storage
//domcontentload on top
window.addEventListener("DOMContentLoaded", function () {
  const savedDataShow = JSON.parse(localStorage.getItem("liststorage"));
  if (savedDataShow) {

    todoUl.innerHTML = savedDataShow.todo || "";
    doingUl.innerHTML = savedDataShow.doing || "";
    doneUl.innerHTML = savedDataShow.done || "";

    valueCountDo = savedDataShow.countTodo || 0;
    valueCountDoing = savedDataShow.countDoing || 0;
    valueCountDone = savedDataShow.countDoing ||0;

    countTaskTodos.innerHTML = `(${savedDataShow.countTodo || 0})`;
    countTaskDoing.innerHTML = `(${savedDataShow.countDoing || 0})`;
    countTaskDone.innerHTML = `(${savedDataShow.countDone || 0})`;
 
  }
});




function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}



// modal js
const button = document.getElementById('button');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const form=document.querySelector('#form')

//btn click = block display bro
button.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// window.addEventListener('click', (event) => {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// });



// //nested modal
const formBtn = document.getElementById('formBtn');
// const modal2 = document.getElementById('modal2');
// const closeBtn2 = document.querySelector('.close2');

// formBtn.addEventListener('click',()=>{
    
//     modal2.style.display = 'block';
   

// });

// closeBtn2.addEventListener('click', () => {
//     modal2.style.display = 'none';
// });

// window.addEventListener('click', (event) => {
//     event.preventDefault();
//     if (event.target === modal2) {
//         modal2.style.display = 'none';
//     }
// });




const choiceList = document.querySelector('#taskPriority');

const title =document.querySelector('#title');
const description=document.querySelector('.desc');


const todoUl = document.querySelector('.todoul');
const doingUl = document.querySelector('.doingul');
const doneUl = document.querySelector('.doneul');

//count 
const countTaskTodos = document.getElementById("idTodo");
const countTaskDoing = document.getElementById("idDoing");
const countTaskDone = document.getElementById("idDone");



//numerical values of count
let valueCountDo = 0;
let valueCountDoing = 0;
let valueCountDone = 0;


//when you submit the form popup bro
form.addEventListener('submit', (e) => {

 e.preventDefault();

    
     modal.style.display = 'none';

    const list = document.createElement('li');
    const description = document.createElement('p');
    const heading = document.createElement('h3');

    //css classes of container
    list.classList.add("liContainer");
    description.classList.add("written");
    heading.classList.add("title-css");
    


    heading.innerText = title.value;
    description.innerText = desc.value;
    // list.innerText = todoul.value;


    
    

    list.appendChild(heading);
    list.appendChild(description);
 
    
    
    if(choiceList.value ==="Todo"){
todoUl.appendChild(list);
valueCountDo+= 1;
countTaskTodos.innerHTML = `(${valueCountDo})`;



}


if(choiceList.value == "Doing"){
doingUl.appendChild(list);
valueCountDoing +=1;
countTaskDoing.innerHTML = `(${valueCountDoing})`

}

if(choiceList.value == "Done"){
    doneUl.appendChild(list);

    valueCountDone +=1;
    countTaskDone.innerHTML = `(${valueCountDone})`
    
    }






   //local storage object

    const savedData = {
      todo: todoUl.innerHTML,
      doing: doingUl.innerHTML,
      done: doneUl.innerHTML,


      countTodo: valueCountDo,
      countDoing: valueCountDoing,
      countDone:valueCountDone

    };
    localStorage.setItem("liststorage", JSON.stringify(savedData));




    






    


   
      
     
      
    


});













  
 
  














