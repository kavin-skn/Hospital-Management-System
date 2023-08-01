package com.taskmanager.main;

import java.util.List;
import java.util.Scanner;

import com.taskmanager.dao.TaskDao;
import com.taskmanager.dao.TaskDaoImpl;
import com.taskmanager.model.Task;

public class TaskManagerMain {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter your username:");
        String username = scanner.nextLine();

        TaskDao taskDao = new TaskDaoImpl(username);

        String choice;
        do {
            System.out.println("Task Manager Application");
            System.out.println("Logged in as: " + username);
            System.out.println("1. Add New Task");
            System.out.println("2. View Tasks");
            System.out.println("3. Mark Task as Completed");
            System.out.println("4. Exit");
            System.out.println("Enter your choice: ");
            int ch = scanner.nextInt();

            switch (ch) {
                case 1:
                   
                    System.out.println("\tWelcome to Task Manager");
                  
                    // Add New Task

                    System.out.println("Enter Userame:");
                    String username1 = scanner.next();
                    System.out.println("Enter task name:");
                    String taskName = scanner.next();

                    System.out.println("Enter due date (YYYY-MM-DD):");
                    String dueDateStr = scanner.next();

                    Task newTask = new Task();
                    newTask.setUsername(username1);
                    newTask.setTaskName(taskName);
                    newTask.setDueDate(dueDateStr);
                    newTask.setCompleted(false);

                    taskDao.addTask(newTask);
                    System.out.println("Task added successfully.");
                    break;
                case 2:
                    // View Tasks
                    List<Task> tasks = taskDao.getAllTasks();
                    if (tasks.isEmpty()) {
                        System.out.println("No tasks found.");
                    } else {
                        System.out.println("All Tasks:");
                        for (Task task : tasks) {
                            System.out.println(task);
                        }
                    }
                    break;
                case 3:
                    // Mark Task as Completed
                    System.out.println("Enter the ID of the task to mark as completed:");
                    int taskId = scanner.nextInt();
                    taskDao.markTaskAsCompleted(taskId);
                    System.out.println("Task marked as completed.");
                    break;
                case 4:
                    System.out.println("Exiting Task Manager Application.");
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid choice.");
            }

            System.out.println("Do you want to continue (yes/no)?");
            choice = scanner.next();
        } while (choice.equalsIgnoreCase("yes"));

        scanner.close();
    }
}