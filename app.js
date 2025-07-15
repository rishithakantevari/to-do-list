let tasks =[];
const addTask = ()=>{
  const taskInput = document.getElementById('taskinput');
  const text = taskInput.value.trim();
if(text){
  tasks.push({text:text, completed :false});
  updateTasksList();
}
};

const updateTasksList =()=>{
  const taskList = document.getElementById(task-list)
  taskList.innerHTML=''

  tasks.forEach(task =>{
    const ListItem = document.createElement('li')
    
    ListItem.innerHTML `
    <div class ="taskItem">
          <div class ="task>
          <input type ="checkbox" class ="checkbos/>
          <p> Finish this project</p>
          </div>
          <div class ="icons">
          <img src ="bin.png">
          <img src ="edit.png">
          </div>
          </div>
          `;
  });
};
document.getElementById('newTask').addEventListener('click',function(e){
  e.preventDefault();

  addTask();

});