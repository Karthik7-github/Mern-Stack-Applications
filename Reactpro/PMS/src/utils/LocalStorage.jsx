localStorage.clear()

const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "e@e.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },  
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Compile and analyze monthly sales data.",
        taskDate: "2026-02-20",
        category: "Sales",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Follow-up",
        taskDescription: "Follow up with clients regarding pending invoices.",
        taskDate: "2026-02-15",
        category: "Communication",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update CRM",
        taskDescription: "Update customer records in CRM system.",
        taskDate: "2026-02-10",
        category: "Data Entry",
      },
    ],
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create UI design for new product landing page.",
        taskDate: "2026-02-22",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve responsive issue in navigation bar.",
        taskDate: "2026-02-18",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Attend sprint planning meeting.",
        taskDate: "2026-02-24",
        category: "Meeting",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Prototype Review",
        taskDescription: "Review and test new feature prototype.",
        taskDate: "2026-02-12",
        category: "Testing",
      },
    ],
  },
  {
    id: 3,
    firstName: "Aditya",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Content Writing",
        taskDescription: "Write blog post for company website.",
        taskDate: "2026-02-21",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Optimize website pages for SEO.",
        taskDate: "2026-02-14",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Email Campaign",
        taskDescription: "Prepare and schedule email campaign.",
        taskDate: "2026-02-25",
        category: "Communication",
      },
    ],
  },
  {
    id: 4,
    firstName: "Rohan",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Server Maintenance",
        taskDescription: "Perform routine server maintenance.",
        taskDate: "2026-02-23",
        category: "IT",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Backup company database.",
        taskDate: "2026-02-17",
        category: "IT",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Security Audit",
        taskDescription: "Conduct internal security audit.",
        taskDate: "2026-02-11",
        category: "Security",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "System Upgrade",
        taskDescription: "Upgrade operating systems on all machines.",
        taskDate: "2026-02-26",
        category: "IT",
      },
    ],
  },
  {
    id: 5,
    firstName: "Kabir",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Recruitment Drive",
        taskDescription: "Organize campus recruitment event.",
        taskDate: "2026-02-28",
        category: "HR",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Policy Update",
        taskDescription: "Update company HR policies document.",
        taskDate: "2026-02-16",
        category: "HR",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Employee Feedback",
        taskDescription: "Collect and analyze employee feedback forms.",
        taskDate: "2026-02-27",
        category: "HR",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
