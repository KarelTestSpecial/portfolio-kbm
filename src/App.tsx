import './index.css'

function App() {
  const projects = [
    {
      title: "FPC Gent - Officiële Website (Demo)",
      description: "Een volledige herbouw van de FPC Gent website met een modern, toegankelijk design. Ontwikkeld om digitale transparantie te vergroten.",
      url: "https://athenacmsfactory.github.io/fpc-gent-site/",
      tags: ["React", "Athena CMS", "UI/UX"],
      account: "athenacmsfactory"
    },
    {
      title: "AIGA - AI Automation Agency",
      description: "Mijn centrale hub voor AI-gestuurde automatiseringen. Gebouwd met geavanceerde agentic workflows voor tekst- en dataverwerking.",
      url: "https://kareltestspecial.github.io/aiga/",
      tags: ["Node.js", "GenAI", "Automation"],
      account: "KarelTestSpecial"
    },
    {
      title: "Athena CMS Factory",
      description: "Een gespecialiseerd CMS systeem voor het razendsnel genereren van professionele websites vanuit JSON-data.",
      url: "https://athenacmsfactory.github.io/athena/",
      tags: ["TypeScript", "CMS", "Vite"],
      account: "athenacmsfactory"
    },
    {
      title: "KDC Infrastructuur Dashboard",
      description: "Een live overzicht van mijn lokale server-omgeving, containers en PM2-processen op mijn Chromebook-ontwikkelomgeving.",
      url: "#",
      tags: ["DevOps", "PM2", "Debian"],
      account: "Lokaal / KDC"
    }
  ];

  const timelineItems = [
    {
      date: "Februari 2026",
      title: "Opstart Portfolio & Dossier 4-Dossiers",
      content: "Centraal overzicht gecreëerd voor de rechtbank en begeleiding om progressie en technische vaardigheden tastbaar te maken."
    },
    {
      date: "Januari - Februari 2026",
      title: "FPC Gent Media Automatisering",
      content: "Ontwikkeling van scripts voor het automatisch mappen van media-assets binnen de FPC Gent website structuur."
    },
    {
      date: "December 2025",
      title: "Athena CMS Core Ontwikkeling",
      content: "Optimalisatie van de 'website factory' engine voor snellere rendering en betere SEO-prestaties."
    }
  ];

  return (
    <div className="container">
      <header>
        <div className="badge">Geverifieerd Developer Dossier</div>
        <h1 className="hero-title">Karel's Portfolio</h1>
        <p className="hero-subtitle">
          Software Engineer gespecialiseerd in Node.js, AI Automatisering en moderne Web Architectuur. 
          Focus op re-integratie door middel van tastbare technische realisaties.
        </p>
      </header>

      <section>
        <h2 className="section-title">
          <span>🚀</span> Live Projecten
        </h2>
        <div className="grid">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <div style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem'}}>
                GitHub: {project.account}
              </div>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>
              <div className="card-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn">
                Bekijk Project
              </a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">
          <span>📅</span> Activiteiten & Voortgang
        </h2>
        <div className="timeline">
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{marginTop: '4rem', padding: '2rem', background: 'rgba(37, 99, 235, 0.05)', borderRadius: '12px', border: '1px solid var(--border-color)'}}>
        <h2 className="section-title">Professioneel Doel</h2>
        <p style={{fontSize: '1.1rem', color: 'var(--text-main)'}}>
          Mijn doel is succesvolle re-integratie en tewerkstelling binnen de IT-sector. 
          Ik gebruik mijn developer skills om waarde te creëren, systemen te bouwen en aan te tonen dat 
          herstel door middel van passie voor technologie mogelijk is. Dit dossier dient als 
          objectief bewijs van mijn dagelijkse inzet, leerproces en professionele output.
        </p>
      </section>

      <footer>
        <p>&copy; 2026 Karel - Gebouwd met React, Vite & Gemini CLI</p>
        <p style={{fontSize: '0.8rem', marginTop: '1rem'}}>
          GitHub Accounts: <a href="https://github.com/KarelTestSpecial" style={{color: 'var(--primary)'}}>KarelTestSpecial</a> | <a href="https://github.com/athenacmsfactory" style={{color: 'var(--primary)'}}>athenacmsfactory</a>
        </p>
      </footer>
    </div>
  )
}

export default App
