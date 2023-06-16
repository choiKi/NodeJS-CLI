#!/usr/bin/env node

const { program } = require("commander");
const { addTask, listTasks, completeTask } = require("./commands");
program.version("1.0.0").description("할 일 목록 관리자");
program
  .command("add <task>")
  .description("할 일을 추가합니다.")
  .action((task) => {
    addTask(task);
  });
program
  .command("list")
  .description("할 일 목록을 출력합니다.")
  .action(() => {
    listTasks();
  });
program
  .command("complete <taskIndex>")
  .description("할 일을 완료 상태로 표시합니다.")
  .action((taskIndex) => {
    completeTask(taskIndex);
  });
program.parse(process.argv);
