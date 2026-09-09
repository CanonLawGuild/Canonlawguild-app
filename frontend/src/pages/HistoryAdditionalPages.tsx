// import React from 'react'

// export function PrinciplesOfCanonLawPage() {
//   return (
//     <div className="container mt-md">
//       <div className="section__heading">
//         <h2>Principles of Canon Law</h2>
//       </div>
//       <p className="text-muted mt-sm">A concise introduction to the guiding principles that shape canonical discipline and ecclesial order.</p>

//       <div className="grid mt-md grid--single-column">
//         <section className="card card--accent">
//           <h3 className="section-subheading">Core Principles</h3>
//           <p>Canon law rests on principles of communion, justice, charity, and the proper ordering of the Church’s life.</p>
//           <ul>
//             <li>Respect for the dignity of the faithful</li>
//             <li>Care for the common good of the Church</li>
//             <li>Faithfulness to divine and ecclesial law</li>
//             <li>Balanced pastoral application</li>
//           </ul>
//         </section>
//       </div>
//     </div>
//   )
// }





import React from 'react'

export function PrinciplesOfCanonLawPage() {
  // Deep academic principles explaining Anglican Canon Law
  const corePrinciplesDetail = [
    {
      title: "The Principle of Ecclesial Communion (Communio)",
      description: "Canon law is fundamentally at the service of communion. It regulates the relationships between the bishop, clergy, and laity, ensuring that everyone remains united in doctrine, sacraments, and governance while preventing arbitrary uses of power."
    },
    {
      title: "The Principle of Canonical Equity (Aequitas Canonica)",
      description: "Unlike rigid civil law, canonical equity introduces mercy and Christian charity into legal interpretation. It reminds church leaders that laws are tools for spiritual healing, allowing flexibility or dispensation when applying a rule too strictly would cause pastoral harm."
    },
    {
      title: "The Principle of Due Process and Ecclesial Justice",
      description: "Justice within the church guarantees that the rights of all members of the faithful are vigorously protected. This principle requires transparency, fair hearings, and unbiased tribunals whenever administrative decisions, discipline, or disputes arise."
    },
    {
      title: "The Subordination to Divine and Natural Law",
      description: "Human ecclesiastical laws are always subject to higher legal realities: Divine Law (Scripture) and Natural Law (moral truth). Any church canon or administrative regulation that directly contradicts these primary foundations is considered invalid."
    },
    {
      title: "Salus Animarum: The Salvation of Souls",
      description: "The absolute supreme rule of all canon law is stated in traditional jurisprudence as 'Salus animarum suprema lex'—the salvation of souls must be the ultimate law. Every administrative process, election, and disciplinary action exists solely to advance this spiritual mission."
    }
  ];

  return (
    <>
      {/* 1. RETAINED: Your exact original page layout and content structure */}
      <div className="container mt-md">
        <div className="section__heading">
          <h2>Principles of Canon Law</h2>
        </div>
        <p className="text-muted mt-sm">A concise introduction to the guiding principles that shape canonical discipline and ecclesial order.</p>

        <div className="grid mt-md grid--single-column">
          <section className="card card--accent">
            <h3 className="section-subheading">Core Principles</h3>
            <p>Canon law rests on principles of communion, justice, charity, and the proper ordering of the Church’s life.</p>
            <ul>
              <li>Respect for the dignity of the faithful</li>
              <li>Care for the common good of the Church</li>
              <li>Faithfulness to divine and ecclesial law</li>
              <li>Balanced pastoral application</li>
            </ul>
          </section>
        </div>
      </div>

      {/* 2. Detailed Principles Section wrapped with defensive layout IDs */}
      <div id="principles-isolated-theme" className="container mt-lg principles-section">
        <div className="principles-header-divider">
          <span className="principles-cross">✠</span>
          <h3 className="principles-heading">Theological & Legal Pillars</h3>
          <span className="principles-cross">✠</span>
        </div>

        <div className="principles-grid">
          {corePrinciplesDetail.map((principle, index) => (
            <div key={index} className="principles-card">
              <div className="principles-card-header">
                <span className="principles-seal">✠</span>
                <h4 className="principles-card-title">{principle.title}</h4>
              </div>
              <p className="principles-card-description">{principle.description}</p>
              
              <div className="principles-card-footer">
                <span className="principles-footer-text">Ecclesial Order & Discipline</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// 3. Anglican Church design system injected safely with high priority flags
const principlesStyles = `
  #principles-isolated-theme.principles-section {
    margin-top: 4rem !important;
    margin-bottom: 5rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #principles-isolated-theme .principles-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 2.5rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #principles-isolated-theme .principles-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
  }

  #principles-isolated-theme .principles-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #principles-isolated-theme .principles-grid {
    display: grid !important;
    grid-template-columns: 1fr !important; /* Clean linear reading flow to match original single column spirit */
    gap: 1.5rem !important;
    width: 100% !important;
  }

  #principles-isolated-theme .principles-card {
    background: #fdfbf7 !important; /* Soft Parchment White */
    border: 1px solid #e2d9c8 !important;
    border-left: 4px solid #800020 !important; /* Episcopal Burgundy Accent Line */
    border-radius: 4px !important;
    padding: 1.75rem !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    text-align: left !important;
  }

  #principles-isolated-theme .principles-card:hover {
    transform: translateX(4px) !important;
    box-shadow: 0 6px 12px rgba(128, 0, 32, 0.06) !important;
    border-left-color: #d4af37 !important; /* Shifts toward gold on mouse-over */
  }

  #principles-isolated-theme .principles-card-header {
    display: flex !important;
    align-items: center !important;
    gap: 0.75rem !important;
    margin-bottom: 0.75rem !important;
  }

  #principles-isolated-theme .principles-seal {
    color: #800020 !important;
    font-size: 1.2rem !important;
  }

  #principles-isolated-theme .principles-card-title {
    font-size: 1.3rem !important;
    color: #1a2e40 !important;
    margin: 0 !important;
    font-weight: 600 !important;
    line-height: 1.3 !important;
  }

  #principles-isolated-theme .principles-card-description {
    color: #4a4a4a !important;
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    margin: 0 0 1rem 0 !important;
  }

  #principles-isolated-theme .principles-card-footer {
    display: inline-block !important;
    background: #f4eee1 !important; /* Darker parchment contrast container */
    padding: 0.3rem 0.7rem !important;
    border-radius: 4px !important;
    border-left: 2px solid #d4af37 !important; /* Gold accent ticker entry */
  }

  #principles-isolated-theme .principles-footer-text {
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
  styleTag.appendChild(document.createTextNode(principlesStyles));
  document.head.appendChild(styleTag);
}

