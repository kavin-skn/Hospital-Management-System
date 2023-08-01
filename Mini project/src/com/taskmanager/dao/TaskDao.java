package com.taskmanager.dao;

import java.util.List;

import com.taskmanager.model.Task;

public interface TaskDao {
	//Abstraction
    void addTask(Task task);

    List<Task> getAllTasks();

    void markTaskAsCompleted(int taskId);
}
