const header = {
  // all the properties are optional - can be left empty or deleted

}

const about = {
  name: 'Zachary Monea',
  role: 'Software Engineer',
  description:
    'A Software Engineer and life’s dedicated student. There is never a situation in which more knowledge comes at a detriment. My favorite thing to do is converse with people and learn the stories and knowledge they have. I yearn for the day that I have become an expert and I have more knowledge to share than to gain but know that this day will never truly come.',
  resume: 'https://docs.google.com/document/d/1hFTxY545l6JZ-xLiBfl39xzcanaXuCOEmsDWoNnwms4/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/zachary-monea/',
    github: 'https://github.com/Zmonea',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1- Pokedextrous',
    description:
      'My first project in the General Assembly course using the PokeAPI as a stand in for the backend. Front End only with working search bar and carosel',
    stack: ['Jquery', 'CSS', 'HTML', 'Javascript'],
    sourceCode: 'https://github.com/Zmonea/Pokedextrous',
    livePreview: 'https://pokedextrously.netlify.app/',
  },
  {
    name: 'Project 2 - Mongoosey',
    description:
      'A fantasy card based backend setup using MongoDB and Mongoose. Basic Sign up and sign in. MVC setup ',
    stack: ['Node', 'Mongoose', 'MongoDB'],
    sourceCode: 'https://github.com/Zmonea/Mongoosey',
    livePreview: 'https://mongooseyproject.herokuapp.com/gear',
  },
  {
    name: 'Project 3 - Find My Car',
    description:
      'Collab with Jimmy Nguyen for a MERN stack application. Car Cards and form setup complete with a basic login functionality. ',
    stack: ['Mongoose', 'Express', 'React','Node'],
    sourceCode: 'https://github.com/Zmonea/FindMyCar_Front',
    livePreview: 'https://findmycar-frontend.herokuapp.com/'
  },
  {
    name: 'Project 4 - The Lazy Dev',
    description:
      'Collab with Ian Lockharrt and Lorens Gueron. Full stack app using Python Django backend into a React frontend.',
    stack: ['Django', 'Python', 'React','Sass'],
    sourceCode: 'https://github.com/lockhaim/Project_4_Frontend',
    livePreview: 'https://lazy-dev-project-frontend.herokuapp.com/',
  },
  {
    name: 'Project 5 - ChattyRooms (General Assembly Capstone Project)',
    description:
      'Built a Chat app with MERN stack using socket IO. Used Oauth 2.0 with JWT bearer Tokens.',
    stack: ['Mongoose', 'Express', 'React','Node'],
    sourceCode: 'https://github.com/Zmonea/capstoneprojectFrontEnd',
    livePreview: 'https://chatty-rooms-project.herokuapp.com/',
  },
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'JQuery',
  'Mongoose',
  'React',
  'Context',
  'Router',
  'SASS',
  'Chakra UI',
  'Git',
  'PostgreSQL',
  'Python',
  'Django',
  'MongoDB',
  'Oauth 2.0',
  'Node',
  'Express'

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'zac.j.monea@gmail.com',
}

export { header, about, projects, skills, contact }
