const firstPage = document.getElementById('firstPage')
const secondPage = document.getElementById('secondPage')
const firstLink = document.getElementById('firstLink')
const secondLink = document.getElementById('secondLink')

firstPage.style.display = 'block';
secondPage.style.display = 'none';

firstLink.addEventListener('click', function (e) {
  e.preventDefault();
  firstPage.style.display = 'block';
  secondPage.style.display = 'none';
});

secondLink.addEventListener('click', function (e) {
  e.preventDefault();
  secondPage.style.display = 'block';
  firstPage.style.display = 'none';
});



// Set a Goal pages

const newGoalBtn = document.getElementById('newGoalBtn')
const closeModalBtn = document.getElementById('closeModalBtn')
const modal = document.getElementById('newGoalModal')
const goalForm = document.getElementById('goalForm')
const activeGoalsList = document.getElementById('activeGoals')
const doneGoalsList = document.getElementById('doneGoals')
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn')
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn')
const deleteModal = document.getElementById('deleteModal')
const tabs = document.querySelectorAll('.tab')
const active = document.querySelector('.active')
const done = document.querySelector('.done')

let goalToDelete = null


newGoalBtn.addEventListener('click', () => {
  modal.style.display = 'flex'
})


closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none'
})


tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'))
    tab.classList.add('active')

    if (tab.dataset.tab === 'active') {
      activeGoalsList.style.display = 'block'
      doneGoalsList.style.display = 'none'
    } else {
      activeGoalsList.style.display = 'none'
      doneGoalsList.style.display = 'block'
    }
  })
})


goalForm.addEventListener('submit', function (e) {
  e.preventDefault()

  const title = document.getElementById('goalTitle').value
  const deadline = document.getElementById('goalDeadline').value
  const desc = document.getElementById('goalDescription').value

  const goal = document.createElement('div')
  goal.className = 'goal-item'
  goal.innerHTML = `
    <div class="goal-header">
      <div class="goal-title">${title}</div>
      <div class="goal-deadline"><i class="far fa-calendar-alt"></i> Due: ${deadline}</div>
    </div>
    <div class="goal-description">${desc}</div>
    <div class="goal-actions">
      <button class="btn btn-sm btn-success">Done</button>
      <button class="btn btn-sm btn-danger">Delete</button>
    </div>
  `


  goal.querySelector('.btn-success').addEventListener('click', () => {
    goal.querySelector('.btn-success').remove()
    goal.querySelector('.goal-actions').insertAdjacentHTML('afterbegin', `<span class="goal-status btn-success">Done</span>`)
    doneGoalsList.prepend(goal)
  })

  goal.querySelector('.btn-danger').addEventListener('click', () => {
    goalToDelete = goal
    deleteModal.style.display = 'flex'
  })

  activeGoalsList.prepend(goal)
  modal.style.display = 'none'
  goalForm.reset()
})


confirmDeleteBtn.addEventListener('click', () => {
  if (goalToDelete) {
    goalToDelete.remove()
    goalToDelete = null
  }
  deleteModal.style.display = 'none'
})

cancelDeleteBtn.addEventListener('click', () => {
  deleteModal.style.display = 'none'
})



// Plans made by Mentors
const plans = [
  {
    id: 1,
    name: "Nurlan Bekov",
    specialization: "Frontend Developer",
    bio: "Frontend engineer focused on building modern UI using React and Tailwind CSS. 5+ years of experience.",
    image: "mentor-m.jpg",
    tasks: [
      {
        text: "Understand semantic HTML and accessibility basics",
        links: [
          { title: "HTML Elements", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
          { title: "ARIA Guide", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA" }
        ]
      },
      {
        text: "Style UI with Tailwind CSS",
        links: [
          { title: "Tailwind Docs", url: "https://tailwindcss.com/docs" },
          { title: "Tailwind Examples", url: "https://tailwindui.com/" }
        ]
      },
      {
        text: "Build components using React",
        links: [
          { title: "React Docs", url: "https://reactjs.org/docs/getting-started.html" },
          { title: "React Components", url: "https://react.dev/learn/your-first-component" }
        ]
      },
      {
        text: "Handle state using React hooks",
        links: [
          { title: "React Hooks", url: "https://reactjs.org/docs/hooks-intro.html" }
        ]
      },
      {
        text: "Make app responsive using media queries",
        links: [
          { title: "Responsive Design", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" }
        ]
      },
      {
        text: "Fetch data from APIs using fetch/Axios",
        links: [
          { title: "Using Fetch", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" },
          { title: "Axios Guide", url: "https://axios-http.com/docs/intro" }
        ]
      },
      {
        text: "Deploy frontend app with Vercel or Netlify",
        links: [
          { title: "Vercel Docs", url: "https://vercel.com/docs" },
          { title: "Netlify Docs", url: "https://docs.netlify.com/" }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Aigerim Serik",
    specialization: "Backend Developer",
    bio: "Backend engineer skilled in Node.js and Express, with strong experience in database design and API development.",
    image: "mentor2-w.jpg",
    tasks: [
      {
        text: "Set up a Node.js + Express project",
        links: [
          { title: "Node.js Intro", url: "https://nodejs.org/en/docs/guides/getting-started-guide/" },
          { title: "Express Guide", url: "https://expressjs.com/en/starter/installing.html" }
        ]
      },
      {
        text: "Create RESTful APIs",
        links: [
          { title: "REST API Basics", url: "https://restfulapi.net/" }
        ]
      },
      {
        text: "Work with MongoDB",
        links: [
          { title: "MongoDB Docs", url: "https://www.mongodb.com/docs/" },
          { title: "Mongoose Guide", url: "https://mongoosejs.com/docs/guide.html" }
        ]
      },
      {
        text: "Add authentication with JWT",
        links: [
          { title: "JWT Intro", url: "https://jwt.io/introduction" },
          { title: "Auth Example", url: "https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs" }
        ]
      },
      {
        text: "Handle async operations using async/await",
        links: [
          { title: "Async/Await", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises" }
        ]
      },
      {
        text: "Secure API endpoints",
        links: [
          { title: "OWASP Node Security", url: "https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html" }
        ]
      },
      {
        text: "Deploy backend with Render or Railway",
        links: [
          { title: "Render Docs", url: "https://docs.render.com/" },
          { title: "Railway Guide", url: "https://docs.railway.app/" }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Ivan Ivanov",
    specialization: "UX/UI Designer",
    bio: "Creative designer focused on user-centric design and prototyping with Figma and Adobe XD.",
    image: "mentor3-m.jpg",
    tasks: [
      {
        text: "Learn the fundamentals of UX design",
        links: [
          { title: "UX Basics", url: "https://www.interaction-design.org/literature/topics/ux-design" }
        ]
      },
      {
        text: "Create wireframes in Figma",
        links: [
          { title: "Figma Guide", url: "https://help.figma.com/hc/en-us/articles/360040514753-Create-your-first-wireframe" }
        ]
      },
      {
        text: "Design a responsive UI layout",
        links: [
          { title: "Figma Responsive", url: "https://www.figma.com/blog/designing-responsive-layouts/" }
        ]
      },
      {
        text: "Understand color theory and accessibility",
        links: [
          { title: "Color Theory", url: "https://material.io/design/color/the-color-system.html" },
          { title: "Accessibility Basics", url: "https://www.a11yproject.com/" }
        ]
      },
      {
        text: "Create a UI component library",
        links: [
          { title: "Figma Components", url: "https://help.figma.com/hc/en-us/articles/360040451373-Components" }
        ]
      },
      {
        text: "Prototype interactive flows",
        links: [
          { title: "Prototyping in Figma", url: "https://help.figma.com/hc/en-us/articles/360040451493-Create-prototypes" }
        ]
      },
      {
        text: "Hand off designs to developers",
        links: [
          { title: "Figma Dev Handoff", url: "https://help.figma.com/hc/en-us/articles/360040529373-Developer-Handoff" }
        ]
      }
    ]
  }
]

const designMentor = document.getElementById('designMentor');
const frontendMentor = document.getElementById('frontendMentor');
const backendMentor = document.getElementById('backendMentor');
const planPage = document.getElementById('plans-page');


function showMentorPlan(mentorIndex) {
  const mentor = plans[mentorIndex];
  
  let tasksHTML = '';
  mentor.tasks.forEach(task => {
    let linksHTML = '';
    task.links.forEach(link => {
      linksHTML += `<a href="${link.url}" target="_blank" class="resource-link">${link.title}</a>`;
    });
    
    tasksHTML += `
      <div class="task-item">
        <div class="task-text">${task.text}</div>
        <div class="task-links">${linksHTML}</div>
      </div>
    `;
  });
  
  planPage.innerHTML = `
    <div class="mentor-plan">
      <h2>План обучения от ${mentor.name}</h2>
      <p class="specialization">${mentor.specialization}</p>
      <div class="tasks-container">
        ${tasksHTML}
      </div>
    </div>
  `;
}

designMentor.addEventListener('click', () => showMentorPlan(2));
frontendMentor.addEventListener('click', () => showMentorPlan(0));
backendMentor.addEventListener('click', () => showMentorPlan(1));






// save resources
let myLeads = []
const titleInput = document.getElementById("title-input")
const urlInput = document.getElementById("url-input")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i].url}'>
                    ${leads[i].title}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function () {
    const title = titleInput.value.trim()
    const url = urlInput.value.trim()

    if (title && url) {
        myLeads.push({ title: title, url: url })
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)

      
        titleInput.value = ""
        urlInput.value = ""
    }
})

deleteBtn.addEventListener("click", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
