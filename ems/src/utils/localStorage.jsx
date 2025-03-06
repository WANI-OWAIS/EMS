const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Prepare monthly report",
                "taskDescription": "Compile financial data for the monthly report.",
                "taskDate": "2025-03-10",
                "category": "Finance",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Update client records",
                "taskDescription": "Ensure all client contact information is up to date.",
                "taskDate": "2025-03-12",
                "category": "Admin",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Conduct market research",
                "taskDescription": "Analyze competitor strategies and pricing.",
                "taskDate": "2025-03-15",
                "category": "Marketing",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Design new UI prototype",
                "taskDescription": "Create wireframes for the upcoming app redesign.",
                "taskDate": "2025-03-20",
                "category": "Design",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Develop API endpoints",
                "taskDescription": "Build RESTful APIs for the new project.",
                "taskDate": "2025-03-18",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Fix security vulnerabilities",
                "taskDescription": "Patch known security flaws in the system.",
                "taskDate": "2025-03-22",
                "category": "Security",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Optimize database queries",
                "taskDescription": "Improve the efficiency of existing queries.",
                "taskDate": "2025-03-17",
                "category": "Database",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Write technical documentation",
                "taskDescription": "Document API endpoints for developers.",
                "taskDate": "2025-03-25",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Coordinate team meeting",
                "taskDescription": "Schedule and lead the weekly team meeting.",
                "taskDate": "2025-03-14",
                "category": "Management",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Develop test cases",
                "taskDescription": "Write test cases for software validation.",
                "taskDate": "2025-03-21",
                "category": "QA",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () =>{
   localStorage.setItem('employess',JSON.stringify(employees))
   localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    console.log(employees, admin)
}

