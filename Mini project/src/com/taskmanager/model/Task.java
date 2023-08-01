package com.taskmanager.model;

public class Task {
    private int id;
    private String taskName;
    private String dueDate;
    private boolean isCompleted;
    private String username; 

    // Getters and Setters
    //Encapsulation

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }	
//Method override
    @Override
    public String toString() {
        return String.format("Task [id=%d, taskName='%s', dueDate=%s, isCompleted=%b, username='%s']",
                id, taskName, dueDate, isCompleted, username);
    }
}