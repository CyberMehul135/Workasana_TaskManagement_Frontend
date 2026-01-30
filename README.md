# Workasana ( Task Management App )

Workasana is a full-stack task management application for creating, assigning, and tracking tasks across projects.
It supports real-time task status updates, priorities, and filtering for better team productivity.
Built with React, Node.js, Express, MongoDB, and RESTful APIs.

---

## Demo Link

[Live Demo](https://workasana-task-management-frontend.vercel.app/)

## Quick Start

```
git clone https://github.com/CyberMehul135/Workasana_TaskManagement_Frontend.git
cd <your-repo>
npm install
npm run dev
```

## Technologies

#### Frontend :

- React JS
- Tailwind CSS
- Chart.js + React Chart.js 2
- Context API (State Management)
- Axios
- React Router

#### Backend :

- Node.js
- Express
- Mongoose
- RESTful APIs

#### Database :

- MongoDB

## Demo Video

Watch a walkthrough (5-6 minutes) of all major features of this app :
[Video Link](https://www.loom.com/share/2f4d3b1fc511447fb2d561ecbb077612)

## Features

**Dashboard**

- Displays overall task statistics
- Shows task distribution by priority
- Shows Completed & Assign task by chart

**Authentication**

- User signup and login using JWT-based authentication
- JWT token is generated on login and securely stored in localStorage
- Protected routes ensure only authenticated users can access the application

**Project Management**

- Create and delete projects
- View all projects in a centralized list
- Access project-specific tasks and progress

**Task Management**

- Create, update, and delete tasks within projects
- Assign tasks to team members
- Track task status (To Do, In Progress, Completed, Blocked)

**Team Management**

- Create and manage teams
- Add or remove team members
- Assign tasks to specific teams or members

**Reports (Charts)**

- Completed tasks overview for the last week
- Pending work days breakdown by project
- Tasks closed analysis by team
- Tasks closed analysis by owner
- Project-wise task closure insights

**Settings**

- View and update user profile details
- Edit profile name and email information

## API Reference

### **GET /tasks**<br>

List all tasks<br>
Sample Response:<br>
`[{_id, name, project, team, ...}, ...]`

### **GET /tasks/:id**<br>

Get details for one task<br>
Sample Response:<br>
`{_id, name, project, team, ...}`

### **GET /projects**<br>

List all projects<br>
Sample Response:<br>
`[{_id, name, description, createdAt}, ...]`

### **GET /projects/:id**<br>

Get details for one project<br>
Sample Response:<br>
`{_id, name, description, createdAt}`

### **GET /teams**<br>

List all teams<br>
Sample Response:<br>
`[{_id, name, description, members}, ...]`

### **GET /teams/:id**<br>

Get details for one project<br>
Sample Response:<br>
`{_id, name, description, members}`

### **GET /owners**<br>

List all owners<br>
Sample Response:<br>
`[{_id, name, email, password}, ...]`

### **GET /tags**<br>

List all tags<br>
Sample Response:<br>
`[{_id, name}, ...]`

### **GET /auth/me**<br>

Get details for one user<br>
Sample Response:<br>
`{_id, name, email}`

### **GET /report/last-week**<br>

Get details for last week completed tasks<br>
Sample Response:<br>
`{message, tasks}`

### **GET /report/pending**<br>

Get details for Project-wise pending days<br>
Sample Response:<br>
`{message, data}`

### **GET /report/closed-tasks/teams**<br>

Get details Task closed by team<br>
Sample Response:<br>
`{message, tasks}`

### **GET /report/closed-tasks/owners**<br>

Get details Task closed by owners<br>
Sample Response:<br>
`{message, tasks}`

### **GET /report/closed-tasks/project**<br>

Get details Task closed by project<br>
Sample Response:<br>
`{message, tasks}`

### **GET /report/tasks/stats/status**<br>

Get Tasks by status<br>
Sample Response:<br>
`{message, tasks}`

### **GET /report/tasks/stats/priority**<br>

Get Tasks by priority<br>
Sample Response:<br>
`{message, tasks}`

### **GET /report/tasks/stats/weekly-created-completed**<br>

Get last week completed and created tasks<br>
Sample Response:<br>
`{message, tasks}`

### **POST /tasks**<br>

Create a new task<br>
Sample Response:<br>
`{_id, name, project, team, ...}`

### **POST /projects**<br>

Create a new project<br>
Sample Response:<br>
`{_id, name, description, createdAt}`

### **POST /teams**<br>

Create a new team<br>
Sample Response:<br>
`{_id, name, description, members}`

### **POST /tags**<br>

Create a new tag<br>
Sample Response:<br>
`{_id, name, password}`

### **POST /auth/signup**<br>

Create a new user<br>
Sample Response:<br>
`{_id, name, email, password}`

### **POST /auth/login**<br>

Authenticate an existing user and return an access token<br>
Sample Response:<br>
`{message, token}`

### **POST /tasks/:id**<br>

Update a task<br>
Sample Response:<br>
`{_id, name, project, team, ...}`

### **POST /teams/:id**<br>

Update a team<br>
Sample Response:<br>
`{_id, name, description, members}`

### **POST /auth/me/:id**<br>

Update a user<br>
Sample Response:<br>
`{_id, name, email}`

### **DELETE /tasks/:id**<br>

Delete a task<br>
Sample Response:<br>
`{_id, name, project, team, ...}`

### **DELETE /tasks/:id**<br>

Delete a project<br>
Sample Response:<br>
`{_id, name, description, createdAt}`

## Contact

For bugs or feature requests, please reach out to mehulrathod9254@gmail.com
