Prompt
Develop a Todo application and its features are given below
 
If a user want to add a new task , the user must add title & description
 
Users should be able to add a new task with a description.
 
Users should be able to view a list of all tasks.
 
Users should be able to edit the description of an existing task that is when clicked on the edit button the title & description should be filled with that particular title & description , button must be converted from add to confirm edit , when the user clicks on the confirm edit , the edited  names should be placed in the same list
 
Users should be able to delete a task from the list.
 
Users should be able to mark a task as completed or not completed i.e when the task is added title must be displayed and along with it three buttons must be displayed that is completed , edit & delete buttons
 
When the user clicks on the complete button the task will be shifted to the completed tasks , & now the edit option in completed section must be removed
 
Their must be undo option & delete option in the completed section, when the user clicks on the undo option , it should be moved to incomplete tasks
 
The tech stack must be HTML, CSS & JAVASCRIPT only
 
Use local storage for implementing features
 
The UI must be great that is use hovering effects & transitions for the input boxes & buttons
 
Buttons should have hovering effects & transitions , use standard way of designing button like border radius , when hovered scale size increases
 
input box when clicked on it , add transition effects like in great websites
 
When moving the completed tasks to completed section then it must give great transition
 
Use colors i.e now leetcode use gray & other gray options, so here also use better & good color combination
 
The UI must be excellent enhance the ui , use your own ideas also to enhance the ui
 
Now give the perfect code based on the above requirements , every feature above mentioned should be implemented







<!-- sqquence diagram -->
sequenceDiagram
    participant User
    participant UI
    participant JavaScript
   
    User->>UI: Opens the To-Do List App
    User->>UI: Enters Task Title and Description
    User->>UI: Clicks "Add Task"
    UI->>JavaScript: Calls addTask(title, description)
    JavaScript->>UI: Updates Active Task List
 
    User->>UI: Clicks "Edit" on a task
    UI->>JavaScript: Calls editTask(taskElement)
    JavaScript->>UI: Replaces text with input fields
    User->>UI: Enters new task details and clicks "Save"
    UI->>JavaScript: Updates Task Title and Description
 
    User->>UI: Clicks "Delete" on a task
    UI->>JavaScript: Calls deleteTask(taskElement)
    JavaScript->>UI: Removes task from the list
 
    User->>UI: Clicks "Complete" on a task
    UI->>JavaScript: Calls toggleComplete(taskElement)
    JavaScript->>UI: Moves task to Completed List
    JavaScript->>UI: Hides "Edit" button, changes "Complete" to "Undo"
 
    User->>UI: Clicks "Undo" on a completed task
    UI->>JavaScript: Calls toggleComplete(taskElement)
    JavaScript->>UI: Moves task back to Active List
    JavaScript->>UI: Restores "Edit" button, changes "Undo" to "Complete"