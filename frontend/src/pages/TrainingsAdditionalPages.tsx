import React, { useEffect, useState } from 'react';

// 1. Define the structure matching your Django model fields
interface TrainingItem {
  id: number;
  title: string;
  description: string;
  published_at: string;
  start_date: string;
  end_date: string;
  category: string;
}

// Keep your exact original page structure layout
function Page({ title, intro, bullets }: { title: string; intro: string; bullets: string[] }) {
  return (
    <div className="container mt-md">
      <div className="section__heading">
        <h2>{title}</h2>
      </div>
      <p className="text-muted mt-sm">{intro}</p>
      
      <div className="grid mt-md grid--single-column">
        <section className="card card--accent">
          <ul>
            {bullets.map((bullet, index) => (
              <li key={`${title}-${index}`}>{bullet}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

// 2. Create a small helper component to list the dynamic API items nicely
function LiveTrainingList({ categoryType }: { categoryType: string }) {
  const [trainings, setTrainings] = useState<TrainingItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch('http://127.0.0.1:8000/api/trainings/')
    fetch('api/trainings/')
      .then(res => res.json())
      .then((data: TrainingItem[]) => {
        const filtered = data.filter(item => item.category.toLowerCase() === categoryType.toLowerCase());
        setTrainings(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching live trainings:", err);
        setLoading(false);
      });
  }, [categoryType]);

  if (loading) return <p className="text-muted church-loading text-center">⌛ Reading upcoming church records...</p>;
  if (trainings.length === 0) return null; 

  return (
    <div className="container mt-lg church-section">
      <div className="church-header-divider">
        <span className="church-cross">✠</span>
        <h3 className="church-heading">Official Upcoming Sessions</h3>
        <span className="church-cross">✠</span>
      </div>
      
      <div className="church-grid">
        {trainings.map(item => (
          <div key={item.id} className="church-card">
            <div className="church-card-badge">{item.category}</div>
            <h4 className="church-card-title">{item.title}</h4>
            <p className="church-card-description">{item.description}</p>
            
            <div className="church-card-footer">
              <span className="church-icon">📅</span>
              <div>
                <span className="church-label">Session Term:</span> 
                <span className="church-date">
                  {new Date(item.start_date).toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })} 
                  <span className="church-arrow"> → </span> 
                  {new Date(item.end_date).toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. Export your pages updated with real-time backend updates
export function AnnualAGMPage() {
  return (
    <>
      <Page 
        title="Annual AGM Meetings"
        intro="Our yearly general meetings gather organizational leaders to review canonical assessments, milestones, and vote on upcoming initiatives."
        bullets={[
          'Review of constitutional bylaws and amendments',
          'Financial audits and updates',
          'Election of executive board members',
        ]}
      />
      <LiveTrainingList categoryType="agm" />
    </>
  );
}

export function WorkshopsPage() {
  return (
    <>
      <Page 
        title="Workshops"
        intro="Intensive practical sessions built around operational case studies and applications of canonical provisions."
        bullets={[
          'Practical deep-dives into procedural law',
          'Guided peer reviews and group exercises',
          'Interactive question and answer panels',
        ]}
      />
      <LiveTrainingList categoryType="Workshop" />
    </>
  );
}

export function ConferencesPage() {
  return (
    <>
      <Page
        title="Conferences"
        intro="Conferences bring together scholars, clergy, and members for shared learning and fellowship."
        bullets={[
          'Presentations from leading experts',
          'Opportunities for networking and discussion',
          'Focused sessions on current canonical issues',
          'Spaces for reflection and practical application',
        ]}
      />
      <LiveTrainingList categoryType="Conference" />
    </>
  );
}

// 4. Church styling block injected at the bottom of the file
const churchStyles = `
  .church-section {
    margin-top: 3rem;
    margin-bottom: 4rem;
    font-family: 'Georgia', 'Times New Roman', serif;
  }

  .church-header-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid #d4af37; /* Liturgical Gold */
    padding-bottom: 0.5rem;
  }

  .church-heading {
    font-size: 1.75rem;
    color: #1a2e40; /* Majestic Anglican Navy */
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
  }

  .church-cross {
    color: #800020; /* Liturgical Burgundy */
    font-size: 1.5rem;
  }

  .church-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .church-card {
    background: #fdfbf7; /* Soft Parchment White */
    border: 1px solid #e2d9c8;
    border-top: 4px solid #800020; /* Episcopal Burgundy Border Accent */
    border-radius: 4px;
    padding: 1.5rem;
    position: relative;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .church-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(128, 0, 32, 0.08);
  }

  .church-card-badge {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    background-color: #e6edf2;
    color: #1a2e40;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 0.25rem 0.6rem;
    border-radius: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border: 1px solid #b8cbd9;
  }

  .church-card-title {
    font-size: 1.35rem;
    color: #1a2e40;
    margin-top: 0;
    margin-bottom: 0.75rem;
    font-weight: 600;
    padding-right: 6rem; /* Avoid text bumping into badge */
  }

  .church-card-description {
    color: #4a4a4a;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.25rem;
  }

  .church-card-footer {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    background: #f4eee1; /* Darker parchment contrast */
    padding: 0.75rem 1rem;
    border-radius: 4px;
    border-left: 3px solid #d4af37; /* Gold accent */
  }

  .church-icon {
    font-size: 1.1rem;
    margin-top: 2px;
  }

  .church-label {
    font-weight: bold;
    color: #5c4033;
    font-size: 0.85rem;
    text-transform: uppercase;
    margin-right: 0.5rem;
    display: inline-block;
  }

  .church-date {
    font-size: 0.9rem;
    color: #1a2e40;
    font-weight: 500;
  }

  .church-arrow {
    color: #800020;
    font-weight: bold;
    padding: 0 0.25rem;
  }

  .church-loading {
    font-size: 1.1rem;
    font-style: italic;
    color: #800020;
    padding: 2rem;
  }
`;

// Inject styles directly into document head
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.type = 'text/css';
  styleTag.appendChild(document.createTextNode(churchStyles));
  document.head.appendChild(styleTag);
}
