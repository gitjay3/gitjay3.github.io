import './App.css'
import { Mail, Github, Server, Database, Cloud, ExternalLink, PenLine, Code2 } from 'lucide-react'

const profile = {
  name: '박재성',
  title: 'Software Engineer',
  email: 'js20525@naver.com',
  github: 'https://github.com/gitjay3',
  blog: 'https://velog.io/@gitjay3',
}

const about = `AI와 프레임워크를 넘어, 본질적인 문제 해결 능력을 추구합니다.`

const skills = [
  { category: 'Frontend', icon: Code2, items: ['React', 'TypeScript'] },
  { category: 'Backend', icon: Server, items: ['Node.js', 'NestJS'] },
  { category: 'Database', icon: Database, items: ['PostgreSQL', 'Redis'] },
  { category: 'Infra / DevOps', icon: Cloud, items: ['Docker', 'Terraform', 'GitHub Actions', 'NCP'] },
]

const education = {
  school: {
    name: '고려대학교',
    major: '컴퓨터학과',
    period: '2021.03 - 재학 중',
  },
  programs: [
    {
      name: '네이버 부스트캠프',
      period: '2025.06 - 2026.02',
      description: '웹·모바일 10기 (웹 풀스택)',
    },
    {
      name: 'NIPA-Kakao Full-Stack 부트캠프',
      period: '2024.07 - 2024.08',
      description: '수도권 ICT이노베이션스퀘어',
    },
  ],
}

const projects = [
  {
    name: 'Bookstcamp',
    period: '2025.12 - 2026.02',
    description: '네이버 부스트캠프 선착순 예약 시스템',
    meta: '4인 팀 · 프론트엔드, 백엔드, 인프라/배포',
    tech: 'React · TypeScript · NestJS · PostgreSQL · Redis · Docker · Terraform · NCP',
    details: [
      '예약 목록/상세 UI, 마이페이지, 템플릿 관리 페이지 구현',
      'Template CRUD API 구현, Vitest/Jest 테스트 작성',
      'GitHub Actions CI/CD 파이프라인 구성 (PR → 빌드 → 배포 → Health Check)',
      'Terraform IaC로 NCP 인프라 구성',
      'Prometheus + Grafana 모니터링 설정',
      'Docker Multi-stage 빌드, HTTPS/SSL 설정, dotenvx 환경변수 암호화',
    ],
    link: 'https://github.com/boostcampwm2025/web20-bibimbap',
  },
]

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header" >
        <h1>{profile.name}</h1>
        <p className="title">{profile.title}</p>
        <div className="contact">
          <a href={`mailto:${profile.email}`}>
            <Mail size={16} />
            {profile.email}
          </a>
          <span className="divider">|</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} />
            GitHub
          </a>
          <span className="divider">|</span>
          <a href={profile.blog} target="_blank" rel="noopener noreferrer">
            <PenLine size={16} />
            Blog
          </a>
        </div>
      </header>

      {/* About */}
      <section className="section" >
        <h2>About</h2>
        <p className="about-text">{about}</p>
      </section>

      {/* Skills */}
      <section className="section" >
        <h2>Skills</h2>
        <div className="skills">
          {skills.map(({ category, icon: Icon, items }) => (
            <div key={category} className="skill-category">
              <div className="skill-label">
                <Icon size={18} />
                <strong>{category}</strong>
              </div>
              <span className="skill-items">{items.join(' · ')}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="section" >
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <div className="project-header">
              <strong>{project.name}</strong>
              <span className="period">{project.period}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-meta">
              <p>{project.meta}</p>
              <p>{project.tech}</p>
            </div>
            <ul>
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                GitHub <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="section">
        <h2>Education</h2>
        <div className="education-item">
          <strong className="education-name">{education.school.name}</strong>
          <p className="major">{education.school.major}</p>
          <span className="period">{education.school.period}</span>
        </div>
        {education.programs.map((item, index) => (
          <div key={index} className="education-item">
            <strong className="education-name">{item.name}</strong>
            <p className="major">{item.description}</p>
            <span className="period">{item.period}</span>
          </div>
        ))}
      </section>

    </div>
  )
}

export default App
