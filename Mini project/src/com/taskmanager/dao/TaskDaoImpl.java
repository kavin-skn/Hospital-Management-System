package com.taskmanager.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.taskmanager.model.Task;
import com.taskmanager.util.DBHandler;

public class TaskDaoImpl implements TaskDao {
    private String username;

    public TaskDaoImpl(String username) {
        this.username = username;
    }

    @Override
    public void addTask(Task task) {
        try (Connection conn = DBHandler.getConnection();
             PreparedStatement ps = conn.prepareStatement("INSERT INTO tasks (username, task_name, due_date, is_completed) VALUES (?, ?, ?, ?)")) {
            ps.setString(1, task.getUsername());
            ps.setString(2, task.getTaskName());
            ps.setString(3, task.getDueDate());
            ps.setBoolean(4, task.isCompleted());
            ps.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<Task> getAllTasks() {
        List<Task> tasks = new ArrayList<>();
        try (Connection conn = DBHandler.getConnection();
             PreparedStatement ps = conn.prepareStatement("SELECT * FROM tasks WHERE username = ?");
        ) {
            ps.setString(1, username);
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    Task task = new Task();
                    task.setId(rs.getInt("id"));
                    task.setTaskName(rs.getString("task_name"));
                    task.setDueDate(rs.getString("due_date"));
                    task.setCompleted(rs.getBoolean("is_completed"));
                    tasks.add(task);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return tasks;
    }

    @Override
    public void markTaskAsCompleted(int taskId) {
        try (Connection conn = DBHandler.getConnection();
             PreparedStatement ps = conn.prepareStatement("UPDATE tasks SET is_completed = ? WHERE id = ? AND username = ?")) {
            ps.setBoolean(1, true);
            ps.setInt(2, taskId);
            ps.setString(3, username);
            ps.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}