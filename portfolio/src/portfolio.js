const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  name: 'Zachary Monea',
  role: 'Software Engineer',
  description:
    'A Software Engineer and life’s dedicated student. There is never a situation in which more knowledge comes at a detriment. My favorite thing to do is converse with people and learn the stories and knowledge they have. I yearn for the day that I have become an expert and I have more knowledge to share than to gain but know that this day will never truly come.',
  resume: 'https://example.com',
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
      'A',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3 - Find My Car',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://findmycar-frontend.herokuapp.com/'
  },
  {
    name: 'Project 4 - The Lazy Dev',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Django', 'Python', 'React'],
    sourceCode: 'https://github.com/lockhaim/Project_4_Frontend',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 5 - ChattyRooms (General Assembly Capstone Project)',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Django', 'Python', 'React'],
    sourceCode: 'https://github.com',
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
  'Oauth 2.0'

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'https://github.com/Zmonea',
}

export { header, about, projects, skills, contact }
