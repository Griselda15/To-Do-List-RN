// Import necessary components and hooks from React and React Native
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Link } from "expo-router";
import { styles } from "./styles";

// Define the main App component
export default function App() {
  // Create a state variable 'task' for the current task input, initialized as an empty string
  const [task, setTask] = useState("");
  // Create a state variable 'tasks' for the list of tasks, initialized as an empty array
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = () => {
    // Check if the task is not just whitespace
    if (task.trim().length > 0) {
      // Add the new task to the tasks array
      setTasks([...tasks, { id: Math.random().toString(), value: task }]);
      // Clear the input field
      setTask("");
    }
  };

  // Function to remove a task
  const removeTask = (taskId) => {
    // Filter out the task with the given id
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Return the JSX for rendering the app
  return (
    <View style={styles.container}>
      {/* App title */}
      <Text style={styles.title}>To-Do List</Text>

      {/* Container for input and add button */}
      <View style={styles.inputContainer}>
        {/* Text input for new tasks */}
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={task}
          onChangeText={setTask}
        />
        {/* Button to add a new task */}
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* List of tasks */}
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          // Container for each task
          <View style={styles.taskContainer}>
            {/* Task text */}
            <Text style={styles.taskText}>{item.value}</Text>
            {/* Button to delete the task */}
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => removeTask(item.id)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
