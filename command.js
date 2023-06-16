const fs = require("fs");
const path = require("path");
const todoFilePath = path.join(__dirname, "todo.json");

function loadTasks() {
  try {
    const data = fs.readFileSync(todoFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function saveTasks(tasks) {
  fs.writeFileSync(todoFilePath, JSON.stringify(tasks, null, 2));
}
function addTask(task) {
  const tasks = loadTasks();
  const newTask = {
    id: Date.now(),
    task,
    completed: false,
  };
  tasks.push(newTask);
  saveTasks(tasks);
  console.log(`[${task}] 할 일이 추가되었습니다.`);
}

function listTasks() {
  const tasks = loadTasks();
  if (tasks.length > 0) {
    console.log("할 일 목록:");
    tasks.forEach((task, index) => {
      const status = task.completed ? "[완료]" : "[미완료]";
      console.log(`${index + 1}. ${status} ${task.task}`);
    });
  } else {
    console.log("할 일이 없습니다.");
  }
}

function completeTask(taskIndex) {
  const tasks = loadTasks();
  const index = parseInt(taskIndex) - 1;
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    saveTasks(tasks);
    console.log(`[${tasks[index].task}] 할 일이 완료로 표시되었습니다.`);
  } else {
    console.log("유효한 할 일 인덱스를 입력해주세요.");
  }
}
module.exports = {
  addTask,
  listTasks,
  completeTask,
};
