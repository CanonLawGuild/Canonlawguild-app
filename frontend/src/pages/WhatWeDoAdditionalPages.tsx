import React, { useEffect, useState } from 'react';

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
  )
}

// export function AreasOfFocusPage() {
//   return (
//     <Page
//       title="Areas of Focus"
//       intro="The Sodality concentrates on key areas that strengthen both scholarship and practical ecclesial service."
//       bullets={[
//         'Canonical interpretation and education',
//         'Support for clergy, scholars, and pastoral leaders',
//         'Promotion of sound practice in ecclesial governance',
//         'Encouragement of thoughtful public engagement with canon law',
//       ]}
//     />
//   )
// }



export function AreasOfFocusPage() {
  // Retained your exact introductory part
  const staticBullets = [
    'Canonical interpretation and education',
    'Support for clergy, scholars, and pastoral leaders',
    'Promotion of sound practice in ecclesial governance',
    'Encouragement of thoughtful public engagement with canon law',
  ];

  // Professional Core Disciplines of Anglican Canonical Law
  const professionalFocusAreas = [
    {
      icon: '🏛️',
      title: 'Constitutional & Ecclesiastical Governance',
      description: 'Analysis and application of provincial constitutions, diocesan canons, and synodical structures. This focus area ensures that institutional governance remains aligned with historic Anglican polity and legislative frameworks.',
    },
    {
      icon: '✝️',
      title: 'Sacramental and Ministry Jurisprudence',
      description: 'Legal provisions governing holy orders, licensing of clergy, pastoral offices, and liturgical discipline. It provides critical boundaries for ministerial execution, safeguarding practices, and clerical responsibilities.',
    },
    {
      icon: '📜',
      title: 'Ecclesiastical Courts & Canonical Procedure',
      description: 'Academic and practical guidance regarding judicial trials, faculty systems, and dispute resolution mechanisms. This discipline maintains justice, due process, and order within church tribunals and administrative actions.',
    },
    {
      icon: '⛪',
      title: 'Temporal Goods and Property Administration',
      description: 'The management of church trusts, parish properties, historic cathedrals, and temporal resources. This framework navigates the intersection between historic ecclesial customs and contemporary civil property statutes.',
    }
  ];

  return (
    <>
      {/* 1. Retained original top header layout block */}
      <Page
        title="Areas of Focus"
        intro="The Sodality concentrates on key areas that strengthen both scholarship and practical ecclesial service."
        bullets={staticBullets}
      />

      {/* 2. Professional Core Focus Areas Layout Section */}
      <div id="focus-isolated-theme" className="container mt-lg focus-section">
        <div className="focus-header-divider">
          <span className="focus-cross">✠</span>
          <h3 className="focus-heading">Core Canonical Disciplines</h3>
          <span className="focus-cross">✠</span>
        </div>

        <div className="focus-grid">
          {professionalFocusAreas.map((area, index) => (
            <div key={index} className="focus-card">
              <div className="focus-card-header">
                <span className="focus-icon-badge">{area.icon}</span>
                <h4 className="focus-card-title">{area.title}</h4>
              </div>
              <p className="focus-card-description">{area.description}</p>
              
              <div className="focus-card-footer">
                <span className="focus-footer-decoration">✠</span>
                <span className="focus-footer-text">Anglican Canonical Tradition</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// 3. Anglican Church styling block with high specificity protection
const focusStyles = `
  #focus-isolated-theme.focus-section {
    margin-top: 4rem !important;
    margin-bottom: 5rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #focus-isolated-theme .focus-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 2.5rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #focus-isolated-theme .focus-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
  }

  #focus-isolated-theme .focus-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #focus-isolated-theme .focus-grid {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important; /* Makes it a professional responsive grid */
    gap: 2rem !important;
    width: 100% !important;
  }

  #focus-isolated-theme .focus-card {
    background: #fdfbf7 !important; /* Soft Parchment White */
    border: 1px solid #e2d9c8 !important;
    border-top: 4px solid #800020 !important; /* Episcopal Burgundy Border Accent */
    border-radius: 4px !important;
    padding: 2rem !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    text-align: left !important;
  }

  #focus-isolated-theme .focus-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 8px 16px rgba(128, 0, 32, 0.08) !important;
    border-color: #d4af37 !important; /* Shifts outline towards gold on interaction */
  }

  #focus-isolated-theme .focus-card-header {
    display: flex !important;
    align-items: center !important;
    gap: 1rem !important;
    margin-bottom: 1rem !important;
  }

  #focus-isolated-theme .focus-icon-badge {
    font-size: 1.5rem !important;
    background: #f4eee1 !important;
    padding: 0.5rem !important;
    border-radius: 4px !important;
    border: 1px solid #e2d9c8 !important;
    display: inline-flex !important;
  }

  #focus-isolated-theme .focus-card-title {
    font-size: 1.25rem !important;
    color: #1a2e40 !important;
    margin: 0 !important;
    font-weight: 600 !important;
    line-height: 1.3 !important;
  }

  #focus-isolated-theme .focus-card-description {
    color: #4a4a4a !important;
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    margin-bottom: 1.5rem !important;
    flex-grow: 1 !important;
  }

  #focus-isolated-theme .focus-card-footer {
    display: flex !important;
    align-items: center !important;
    gap: 0.5rem !important;
    background: #f4eee1 !important; /* Darker parchment contrast */
    padding: 0.5rem 1rem !important;
    border-radius: 4px !important;
    border-left: 3px solid #d4af37 !important; /* Gold accent line */
  }

  #focus-isolated-theme .focus-footer-decoration {
    color: #800020 !important;
    font-size: 0.9rem !important;
  }

  #focus-isolated-theme .focus-footer-text {
    font-weight: bold !important;
    color: #5c4033 !important;
    font-size: 0.75rem !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
  }
`;

// Inject styling parameters directly into global document head safely
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.type = 'text/css';
  styleTag.appendChild(document.createTextNode(focusStyles));
  document.head.appendChild(styleTag);
}


// export function AdvisoryOpinionsPage() {
//   return (
//     <Page
//       title="Advisory Opinions"
//       intro="Advisory opinions provide helpful guidance on questions that arise in canonical practice and church administration."
//       bullets={[
//         'Clarification of procedural questions',
//         'Guidance on church governance matters',
//         'Support for responsible decision-making',
//         'Practical insight for leaders and communities',
//       ]}
//     />
//   )
// }



// 1. Define the structure of an Advisory Opinion item from your database
interface AdvisoryOpinionItem {
  id: number;
  title: string;
  summary: string;
  issued_at: string;
}

export function AdvisoryOpinionsPage() {
  const [opinions, setOpinions] = useState<AdvisoryOpinionItem[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. Fetch advisory opinions from your backend API on page load
    // 2. Fetch advisory opinions and force the newest to the top
  useEffect(() => {
    // fetch('http://127.0.0.1:8000/api/advisory-opinions/')
    fetch('api/advisory-opinions/')
      .then((res) => res.json())
      .then((data: AdvisoryOpinionItem[]) => {
        // Force sort on the frontend to guarantee the latest is always on top
        const forceSorted = [...data].sort((a, b) => 
          new Date(b.issued_at).getTime() - new Date(a.issued_at).getTime()
        );
        setOpinions(forceSorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching advisory opinions:", err);
        setLoading(false);
      });
  }, []);


  return (
    <>
      {/* 3. Retained your required introductory layout block */}
      <Page
        title="Advisory Opinions"
        intro="Advisory opinions provide helpful guidance on questions that arise in canonical practice and church administration."
        bullets={[
          'Clarification of procedural questions',
          'Guidance on church governance matters',
          'Support for responsible decision-making',
          'Practical insight for leaders and communities',
        ]}
      />

      {loading && (
        <p className="text-muted opinion-loading text-center">
           Adil ⌛ Reviewing official canonical guidance records...
        </p>
      )}

      {/* 4. Display live database rows using the custom high-priority theme wrapper */}
      {!loading && opinions.length > 0 && (
        <div id="opinion-isolated-theme" className="container mt-lg opinion-section">
          <div className="opinion-header-divider">
            <span className="opinion-cross">✠</span>
            <h3 className="opinion-heading">Official Guidance Archives</h3>
            <span className="opinion-cross">✠</span>
          </div>

          <div className="opinion-grid">
            {opinions.map((item) => (
              <div key={item.id} className="opinion-card">
                <div className="opinion-card-badge">Guidance</div>
                
                <h4 className="opinion-card-title">{item.title}</h4>
                <p className="opinion-card-description">{item.summary}</p>

                <div className="opinion-card-footer">
                  <span className="opinion-icon">✍️</span>
                  <div>
                    <span className="opinion-label">Issued At:</span>
                    <span className="opinion-date">
                      {new Date(item.issued_at).toLocaleDateString(undefined, {
                        weekday: 'short',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

// 5. Anglican Church styling block with protective IDs to prevent global style overriding
const opinionStyles = `
  #opinion-isolated-theme.opinion-section {
    margin-top: 3rem !important;
    margin-bottom: 4rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #opinion-isolated-theme .opinion-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 2rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #opinion-isolated-theme .opinion-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
  }

  #opinion-isolated-theme .opinion-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #opinion-isolated-theme .opinion-grid {
    display: grid !important;
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
    width: 100% !important;
  }

  #opinion-isolated-theme .opinion-card {
    background: #fdfbf7 !important; /* Soft Parchment White */
    border: 1px solid #e2d9c8 !important;
    border-top: 4px solid #800020 !important; /* Episcopal Burgundy Border Accent */
    border-radius: 4px !important;
    padding: 1.5rem !important;
    position: relative !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    text-align: left !important;
  }

  #opinion-isolated-theme .opinion-card:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 12px rgba(128, 0, 32, 0.08) !important;
  }

  #opinion-isolated-theme .opinion-card-badge {
    position: absolute !important;
    top: 1rem !important;
    right: 1.5rem !important;
    background-color: #f4eee1 !important; /* Dark Parchment */
    color: #800020 !important; /* Burgundy text accent */
    font-size: 0.75rem !important;
    font-weight: bold !important;
    padding: 0.25rem 0.6rem !important;
    border-radius: 12px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    border: 1px solid #d4af37 !important; /* Liturgical Gold Border */
    display: inline-block !important;
  }

  #opinion-isolated-theme .opinion-card-title {
    font-size: 1.35rem !important;
    color: #1a2e40 !important;
    margin-top: 0 !important;
    margin-bottom: 0.75rem !important;
    font-weight: 600 !important;
    padding-right: 7rem !important; /* Protect header layout space */
    font-family: 'Georgia', 'Times New Roman', serif !important;
    line-height: 1.3 !important;
  }

  #opinion-isolated-theme .opinion-card-description {
    color: #4a4a4a !important;
    font-size: 1rem !important;
    line-height: 1.6 !important;
    margin-bottom: 1.25rem !important;
    white-space: pre-wrap !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
  }

  #opinion-isolated-theme .opinion-card-footer {
    display: flex !important;
    align-items: flex-start !important;
    gap: 0.5rem !important;
    background: #f4eee1 !important; /* Darker parchment contrast */
    padding: 0.75rem 1rem !important;
    border-radius: 4px !important;
    border-left: 3px solid #d4af37 !important; /* Liturgical Gold accent line */
    border-top: none !important;
    border-right: none !important;
    border-bottom: none !important;
  }

  #opinion-isolated-theme .opinion-icon {
    font-size: 1.1rem !important;
    margin-top: 2px !important;
    display: inline-block !important;
  }

  #opinion-isolated-theme .opinion-label {
    font-weight: bold !important;
    color: #5c4033 !important;
    font-size: 0.85rem !important;
    text-transform: uppercase !important;
    margin-right: 0.5rem !important;
    display: inline-block !important;
  }

  #opinion-isolated-theme .opinion-date {
    font-size: 0.9rem !important;
    color: #1a2e40 !important;
    font-weight: 500 !important;
    display: inline-block !important;
  }

  .opinion-loading {
    font-size: 1.1rem !important;
    font-style: italic !important;
    color: #800020 !important;
    padding: 2rem !important;
    font-family: 'Georgia', serif !important;
  }
`;

// Inject styling parameters directly into global document head safely
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.type = 'text/css';
  styleTag.appendChild(document.createTextNode(opinionStyles));
  document.head.appendChild(styleTag);
}
