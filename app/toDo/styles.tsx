import { StyleSheet } from "react-native";

// Define styles for the components
export const styles = StyleSheet.create({
  container: {
    flex: 1, // Use all available space
    padding: 30, // Add padding around the edges
    backgroundColor: "#f8f8f8", // Light gray background
  },
  title: {
    fontSize: 24, // Large font size for the title
    fontWeight: "bold", // Make the title bold
    marginBottom: 20, // Add some space below the title
  },
  inputContainer: {
    flexDirection: "row", // Arrange children horizontally
    marginBottom: 20, // Add space below this container
  },
  input: {
    flex: 1, // Take up all available space
    borderWidth: 1, // Add a border
    borderColor: "#ddd", // Light gray border
    padding: 10, // Add some internal padding
    fontSize: 18, // Increase font size for better readability
    borderRadius: 6, // Rounded corners
  },
  addButton: {
    backgroundColor: "#0080ff", // Blue background for the button
    padding: 10, // Add some padding inside the button
    borderRadius: 6, // Rounded corners
    marginLeft: 10, // Add some space to the left of the button
  },
  addButtonText: {
    color: "white", // White text
    fontSize: 18, // Larger font size
    fontWeight: "bold", // Make the text bold
  },
  taskContainer: {
    flexDirection: "row", // Arrange children horizontally
    justifyContent: "space-between", // Space out the task and delete button
    alignItems: "center", // Center items vertically
    marginBottom: 15, // Add space below each task
    backgroundColor: "white", // White background
    padding: 15, // Add padding inside the container
    borderRadius: 6, // Rounded corners
    elevation: 3, // Add a shadow (Android only)
  },
  taskText: {
    fontSize: 16, // Slightly larger font for readability
  },
  deleteButton: {
    backgroundColor: "#ff3830", // Red background for delete button
    padding: 8, // Add some padding inside the button
    borderRadius: 6, // Rounded corners
  },
  deleteButtonText: {
    color: "white", // White text
    fontWeight: "bold", // Make the text bold
  },
});
