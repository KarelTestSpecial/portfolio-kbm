import './index.css'

interface Repo {
  name: string;
  description: string;
  url: string;
  updatedAt: string;
  account: string;
}

function App() {
  const karelRepos: Repo[] = [
    { name: "portfolio-kbm", description: "Centraal re-integratie portfolio dossier.", url: "https://github.com/KarelTestSpecial/portfolio-kbm", updatedAt: "2026-02-26", account: "KarelTestSpecial" },
    { name: "kdc-master-dashboard", description: "Centraal dashboard voor KDC infrastructuur.", url: "https://github.com/KarelTestSpecial/kdc-master-dashboard", updatedAt: "2026-02-24", account: "KarelTestSpecial" },
    { name: "aiga", description: "AI Automation Agency core engine.", url: "https://github.com/KarelTestSpecial/aiga", updatedAt: "2026-02-24", account: "KarelTestSpecial" },
    { name: "new-tab-organizer", description: "Chrome extension dashboard met Kanban.", url: "https://github.com/KarelTestSpecial/new-tab-organizer", updatedAt: "2026-02-24", account: "KarelTestSpecial" },
    { name: "youtube-rightclick", description: "Browser extension voor media-export.", url: "https://github.com/KarelTestSpecial/youtube-rightclick", updatedAt: "2026-02-21", account: "KarelTestSpecial" },
    { name: "athena-x", description: "Core engine van Athena CMS Factory.", url: "https://github.com/athenacmsfactory/athena-x", updatedAt: "2026-02-25", account: "athenacmsfactory" },
    { name: "demo-portfolio", description: "Athena CMS Showcase: Portfolio template.", url: "https://github.com/athenacmsfactory/demo-portfolio", updatedAt: "2026-02-25", account: "athenacmsfactory" },
    { name: "demo-consultant", description: "Athena CMS Showcase: Consultant template.", url: "https://github.com/athenacmsfactory/demo-consultant", updatedAt: "2026-02-25", account: "athenacmsfactory" }
    // De rest van de 50+ repos zijn lokaal bekend en kunnen via een 'Toon Alles' knop of lijst getoond worden
  ];

  const allReposCount = 53; // Totaal aantal gevonden

  return (
    <div className="container">
      <header>
        <div className="badge">Fase 1: Inventarisatie & Overzicht</div>
        <h1 className="hero-title">Developer Dossier: Karel</h1>
        <p className="hero-subtitle">
          Een compleet overzicht van alle software-projecten en repositories ontwikkeld tijdens het re-integratietraject. 
          Dit portfolio fungeert als bewijslast van technische vaardigheden en dagelijkse professionele activiteit.
        </p>
      </header>

      <section>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
          <h2 className="section-title" style={{margin: 0}}><span>📂</span> Belangrijkste Repositories</h2>
          <span style={{color: 'var(--text-muted)'}}>Totaal: {allReposCount} projecten op GitHub</span>
        </div>
        
        <div className="grid">
          {karelRepos.map((repo, index) => (
            <div key={index} className="card">
              <div style={{fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.5rem'}}>
                {repo.account.toUpperCase()}
              </div>
              <h3 className="card-title">{repo.name}</h3>
              <p className="card-description">{repo.description || "Geen beschrijving beschikbaar."}</p>
              <div style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem'}}>
                Laatst bijgewerkt: {new Date(repo.updatedAt).toLocaleDateString()}
              </div>
              <a href={repo.url} target="_blank" rel="noopener noreferrer" className="btn">
                Bekijk Code
              </a>
            </div>
          ))}
        </div>
        
        <div style={{textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px dashed var(--border-color)'}}>
          <p style={{color: 'var(--text-muted)'}}>
            Er zijn nog {allReposCount - karelRepos.length} andere repositories beschikbaar op GitHub onder de accounts 
            <a href="https://github.com/KarelTestSpecial" style={{color: 'var(--primary)', marginLeft: '5px'}}>KarelTestSpecial</a> en 
            <a href="https://github.com/athenacmsfactory" style={{color: 'var(--primary)', marginLeft: '5px'}}>athenacmsfactory</a>.
          </p>
        </div>
      </section>

      <section style={{marginTop: '4rem'}}>
        <h2 className="section-title"><span>🚀</span> Fase 2: Athena CMS Integratie</h2>
        <div className="card" style={{borderLeft: '4px solid var(--primary)'}}>
          <h3>Geplande Uitbreidingen</h3>
          <p style={{marginTop: '1rem', color: 'var(--text-muted)'}}>
            In de volgende fase van dit dossier zullen we de <strong>Athena CMS Factory</strong> inzetten om:
          </p>
          <ul style={{marginLeft: '1.5rem', marginTop: '1rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            <li>Nieuwe CSS-templates te definiëren voor verschillende sectoren.</li>
            <li>Meerdere versies van websites te genereren als technische showcase.</li>
            <li>Directe koppelingen te maken tussen dit portfolio en de live gedraaide Athena-sites.</li>
            <li>Nieuwe layout-templates te ontwikkelen die dynamisch gevoed worden door JSON-data.</li>
          </ul>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 Karel - Re-integratie Project</p>
        <p style={{fontSize: '0.8rem', marginTop: '1rem', color: 'var(--text-muted)'}}>
          Gegenereerd op basis van live GitHub data van KarelTestSpecial & athenacmsfactory.
        </p>
      </footer>
    </div>
  )
}

export default App
