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
    description: '부스트캠프 내 멘토링·특강·시니어 리뷰 등 선착순 예약을 통합 관리하는 서비스',
    meta: '4인 팀 · 백엔드, 프론트엔드, 인프라/배포 담당',
    tech: 'NestJS · React · TypeScript · PostgreSQL · Redis · Docker · Terraform · GitHub Actions · Prometheus · Grafana',
    details: [
      {
        summary: '무중단 배포 파이프라인 구축',
        detail: '기존에는 docker compose down/up으로 배포할 때마다 20~30초 정도 서비스가 중단되었습니다. 블루-그린 방식도 고려했지만 NCP 20만 크레딧이라는 제한 내에서 서버 2대를 유지하는 비용이 부담되어, 교체 순간에만 컨테이너 2개가 실행되는 롤링 업데이트 방식을 선택했습니다.\n새 컨테이너가 준비되기 전에 기존 컨테이너가 종료되면 요청이 유실되는 문제가 있었는데, 새 컨테이너가 정상 동작하는 것을 확인한 뒤, 기존 컨테이너에 drain 파일을 생성해 의도적으로 healthcheck를 실패시켰습니다. Docker 내부 DNS는 healthy 컨테이너에만 트래픽을 전달하기 때문에 기존 컨테이너로는 새 요청이 들어가지 않게 되고, 처리 중인 요청까지 완료된 후 안전하게 종료하는 방식으로 무중단 배포를 구축했습니다.',
      },
      {
        summary: '모니터링 구성 및 부하 테스트',
        detail: '선착순 예약 특성상 오픈 시점에 트래픽이 한꺼번에 몰리기 때문에 배포 전에 병목을 파악할 필요가 있었습니다. Terraform으로 별도 모니터링 서버를 구성하고, Prometheus로 메트릭을 수집하고 Grafana 대시보드로 시각화하여 서버 상태를 모니터링 할 수 있도록 설계했습니다.\nk6로 성공/정원초과/중복/서버에러를 구분하는 커스텀 메트릭을 만들고, 200VU부터 10,000VU까지 단계별 시나리오를 실행했습니다. 그 결과 DB Full Table Scan과 Nginx 커넥션 포화 같은 병목을 사전에 발견할 수 있었습니다. 다만 로컬 Docker 환경에서만 진행하여 실제 서버 스펙과 네트워크 조건을 반영하지 못한 점이 아쉬움으로 남습니다.',
      },
      {
        summary: 'SSH Brute Force 공격 탐지 및 대응',
        detail: '운영 중 NCP Basic Security 알림으로 두 서버에 각각 1,700~1,800회의 SSH 로그인 시도가 감지되었습니다. 로그를 분석한 결과 여러 해외 IP에서 root, admin, ethereum 같은 계정명으로 무차별 대입 공격이 들어오고 있었습니다.\n원인은 Terraform ACG 설정에서 SSH 22번 포트를 0.0.0.0/0으로 열어둔 것과 비밀번호 인증이 활성화되어 있던 점이었습니다. 즉시 SSH Key 인증만 허용하도록 변경하고, fail2ban으로 반복 실패 IP를 자동 차단하도록 설정했습니다. 침해 여부를 조사한 결과 비밀번호 로그인 성공 기록은 없었고, 모든 접속이 SSH Key를 통한 것으로 확인되었습니다.',
      },
      {
        summary: '유저 ID 기반 Rate Limiting 도입',
        detail: '처음에는 IP 기반으로 Rate Limiting을 적용했는데, VPN을 사용하면 IP를 바꿔서 우회할 수 있는 문제가 있었습니다. 그래서 CustomThrottlerGuard에서 유저 ID를 추적 키로 사용하도록 재설계했습니다.\n또한 전역으로 Throttler를 적용하니 일반 페이지 탐색이나 폴링에도 429 에러가 발생해서, 로그인과 예약 엔드포인트에만 각각 다른 제한값을 설정하는 방식으로 바꿨습니다.',
      },
    ],
    link: 'https://github.com/gitjay3/web20-bibimbap',
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
                <li key={i}>
                  <strong className="detail-summary">{detail.summary}</strong>
                  {detail.detail.split('\n').map((line, j) => (
                    <p key={j} className="detail-description">{line}</p>
                  ))}
                </li>
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
