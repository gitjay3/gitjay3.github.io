import './App.css'

const profile = {
  name: '박재성',
  title: 'Backend / Full-Stack Developer',
  email: 'js20525@naver.com',
  github: 'https://github.com/gitjay3',
}

const about = `
안녕하세요. 안정적이고 확장 가능한 서버를 설계하는 것을 좋아하는 개발자입니다.
백엔드를 중심으로 풀스택 개발을 지향합니다.
`

const skills = {
  Backend: ['Java', 'Spring Boot', 'Node.js'],
  Database: ['MySQL', 'PostgreSQL'],
  'Infra / DevOps': ['Docker', 'Terraform', 'GitHub Actions', 'AWS'],
}

const projects = [
  {
    name: 'Project 1',
    period: '2024.01 - 2024.06',
    description: '프로젝트에 대한 설명을 작성하세요.',
    details: [
      '주요 기능 또는 성과 1',
      '주요 기능 또는 성과 2',
    ],
    tech: 'React, TypeScript',
    link: 'https://github.com',
  },
  {
    name: 'Project 2',
    period: '2023.06 - 2023.12',
    description: '프로젝트에 대한 설명을 작성하세요.',
    details: [
      '주요 기능 또는 성과 1',
      '주요 기능 또는 성과 2',
    ],
    tech: 'Node.js, Express',
    link: 'https://github.com',
  },
]

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>{profile.name}</h1>
        <p className="title">{profile.title}</p>
        <div className="contact">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span className="divider">|</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </header>

      {/* About */}
      <section className="section">
        <h2>About</h2>
        <p className="about-text">{about}</p>
      </section>

      {/* Skills */}
      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <strong>{category}</strong>
              <span>{items.join(', ')}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <div className="project-header">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <strong>{project.name}</strong>
              </a>
              <span className="period">{project.period}</span>
            </div>
            <p>{project.description}</p>
            <ul>
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <p className="tech">Tech: {project.tech}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default App
