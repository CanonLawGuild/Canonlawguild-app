import React, { useState, useEffect } from 'react';

type Section = {
  title: string
  body: string | string[]
  bullets?: string[]
}

type ContentPageProps = {
  title: string
  intro: string
  sections: Section[]
}

function ContentPage({ title, intro, sections }: ContentPageProps) {
  return (
    <div className="container mt-md">
      <div className="section__heading">
        <h2>{title}</h2>
      </div>
      <p className="text-muted mt-sm">{intro}</p>

      <div className="grid mt-md grid--single-column">
        {sections.map((section, index) => (
          <section key={`${title}-${index}`} className="card card--accent">
            <h3 className="section-subheading">{section.title}</h3>
            {Array.isArray(section.body) ? (
              <div>
                {section.body.map((paragraph, paragraphIndex) => (
                  <p key={`${section.title}-${paragraphIndex}`}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <p>{section.body}</p>
            )}
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet, bulletIndex) => (
                  <li key={`${section.title}-bullet-${bulletIndex}`}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}

// export function BackgroundPage() {
//   return (
//     <ContentPage
//       title="Background"
//       intro="The Canon Law Sodality is rooted in the study, teaching, and practical application of canon law for clergy, jurists, scholars, and lay members who seek clarity and service."
//       sections={[
//         {
//           title: 'Our Purpose',
//           body: 'We exist to promote the proper understanding of ecclesiastical law, support scholarly exchange, and encourage careful reflection on canonical practice in church life.',
//         },
//         {
//           title: 'What We Stand For',
//           body: ['We bring together people who value discipline, justice, and fidelity to the Church’s teaching.', 'Our work is grounded in sound scholarship, practical guidance, and a shared commitment to service.'],
//           bullets: ['Canonical study', 'Public education', 'Faithful service'],
//         },
//       ]}
//     />
//   )
// }


export function BackgroundPage() {
  // Retained your exact original sections array data
  const staticSections = [
    {
      title: 'Our Purpose',
      body: 'We exist to promote the proper understanding of ecclesiastical law, support scholarly exchange, and encourage careful reflection on canonical practice in church life.',
    },
    {
      title: 'What We Stand For',
      body: [
        'We bring together people who value discipline, justice, and fidelity to the Church’s teaching.',
        'Our work is grounded in sound scholarship, practical guidance, and a shared commitment to service.'
      ],
      bullets: ['Canonical study', 'Public education', 'Faithful service'],
    },
  ];

  // Specific historical background context for the Sodality within Uganda
  const ugandaBackgroundMilestones = [
    {
      marker: 'The Provincial Legacy',
      title: 'Roots in Ugandan Church Order',
      narrative: 'The context of canon law within Uganda evolved alongside the development of the Church of Uganda (Anglican). Following the establishment of native dioceses and the Provincial Constitution, a clear need emerged for local legal experts who could interpret provincial enactments, diocesan regulations, and customary practices in perfect harmony with global Anglican polity.',
    },
    {
      marker: 'Ecclesial Justice',
      title: 'Bridging Church Canons and Ugandan Civil Law',
      narrative: 'The Sodality was established to bridge the gap between ecclesiastical courts and the secular Ugandan legal system. It provides an elite platform where trained legal jurists, chancellors, and theologians come together to safely navigate matters of church land trusts, clerical discipline, and constitutional reviews under the laws of Uganda.',
    },
    {
      marker: 'Contemporary Mission',
      title: 'Advancing Leadership and Scholarship across East Africa',
      narrative: 'Today, the Sodality serves as a central hub for canonical development across Uganda and its surrounding regions. By organizing training sessions, workshops, and high-level legal consultations, the guild empowers clergy and lay leaders to make fair, transparent, and legally sound choices that protect diocesan assets and support community life.',
    }
  ];

  return (
    <>
      {/* 1. RETAINED: Your exact original header and top content card profile layout */}
      <ContentPage
        title="Background"
        intro="The Canon Law Sodality is rooted in the study, teaching, and practical application of canon law for clergy, jurists, scholars, and lay members who seek clarity and service."
        sections={staticSections}
      />

      {/* 2. Uganda Contextual History Section wrapped with defensive layout IDs */}
      <div id="background-isolated-theme" className="container mt-lg bg-section">
        <div className="bg-header-divider">
          <span className="bg-cross">✠</span>
          <h3 className="bg-heading">The Ugandan Context & History</h3>
          <span className="bg-cross">✠</span>
        </div>

        <div className="bg-grid">
          {ugandaBackgroundMilestones.map((milestone, index) => (
            <div key={index} className="bg-card">
              <div className="bg-card-header">
                <span className="bg-tag">{milestone.marker}</span>
                <h4 className="bg-card-title">{milestone.title}</h4>
              </div>
              <p className="bg-card-description">{milestone.narrative}</p>
              
              <div className="bg-card-footer">
                <span className="bg-footer-cross">✠</span>
                <span className="bg-footer-text">Canon Law Guild of Uganda</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// 3. Anglican Church design system injected safely with high priority flags
const backgroundStyles = `
  #background-isolated-theme.bg-section {
    margin-top: 4rem !important;
    margin-bottom: 5rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #background-isolated-theme .bg-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 2.5rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #background-isolated-theme .bg-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
  }

  #background-isolated-theme .bg-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #background-isolated-theme .bg-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 2rem !important;
    width: 100% !important;
  }

  #background-isolated-theme .bg-card {
    background: #fdfbf7 !important; /* Soft Parchment White */
    border: 1px solid #e2d9c8 !important;
    border-left: 4px solid #1a2e40 !important; /* Anglican Navy Accent Line */
    border-radius: 4px !important;
    padding: 1.75rem !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    text-align: left !important;
  }

  #background-isolated-theme .bg-card:hover {
    transform: translateX(4px) !important;
    box-shadow: 0 6px 12px rgba(26, 46, 64, 0.06) !important;
    border-left-color: #d4af37 !important; /* Gold highlight shifts accent line on hover */
  }

  #background-isolated-theme .bg-card-header {
    display: flex !important;
    flex-direction: column !important;
    gap: 0.5rem !important;
    margin-bottom: 0.75rem !important;
  }

  #background-isolated-theme .bg-tag {
    align-self: flex-start !important;
    font-size: 0.75rem !important;
    font-weight: bold !important;
    color: #800020 !important; /* Liturgical Burgundy Accent */
    background: #f4eee1 !important; /* Secondary dark parchment shadow container */
    padding: 0.25rem 0.6rem !important;
    border-radius: 4px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    border: 1px solid #e2d9c8 !important;
  }

  #background-isolated-theme .bg-card-title {
    font-size: 1.3rem !important;
    color: #1a2e40 !important;
    margin: 0 !important;
    font-weight: 600 !important;
    line-height: 1.3 !important;
  }

  #background-isolated-theme .bg-card-description {
    color: #4a4a4a !important;
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    margin: 0 0 1.25rem 0 !important;
  }

  #background-isolated-theme .bg-card-footer {
    display: flex !important;
    align-items: center !important;
    gap: 0.4rem !important;
    background: #f4eee1 !important;
    padding: 0.4rem 0.8rem !important;
    border-radius: 4px !important;
    border-left: 3px solid #d4af37 !important; /* Liturgical Gold side tab accent */
    align-self: flex-start !important;
    display: inline-flex !important;
  }

  #background-isolated-theme .bg-footer-cross {
    color: #800020 !important;
    font-size: 0.85rem !important;
  }

  #background-isolated-theme .bg-footer-text {
    font-weight: bold !important;
    color: #5c4033 !important;
    font-size: 0.75rem !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
  }
`;

// Inject style parameters directly into global document head safely
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.type = 'text/css';
  styleTag.appendChild(document.createTextNode(backgroundStyles));
  document.head.appendChild(styleTag);
}








// export function FounderPage() {
//   return (
//     <ContentPage
//       title="Founder"
//       intro="The Sodality was shaped by a vision of scholarship and pastoral care, bringing canon law into conversation with the life of the Church."
//       sections={[
//         {
//           title: 'Foundational Vision',
//           body: 'The founder’s inspiration was to cultivate a community where canonical understanding could be studied seriously and applied with humility and care.',
//         },
//         {
//           title: 'Legacy',
//           body: 'That vision continues through our programs, publications, and fellowship today.',
//         },
//       ]}
//     />
//   )
// }





export function FounderPage() {
  // Retained your exact original sections array data unchanged
  const staticSections = [
    {
      title: 'Foundational Vision',
      body: 'The founder’s inspiration was to cultivate a community where canonical understanding could be studied seriously and applied with humility and care.',
    },
    {
      title: 'Legacy',
      body: 'That vision continues through our programs, publications, and fellowship today.',
    },
  ];

  // Professional profiles for your founders (Change names/details as needed)
  const foundersList = [
    {
      name: "The Rev. Canon Dr. Emmanuel Musoke", // Example Name - replace with your actual founder
      role: "Visionary & Primary Convener",
      contribution: "Conceived the initial blueprint for the Guild to anchor canonical scholarship within East Africa. He brought together legal experts and church leaders to create a formal guild dedicated to ecclesiastical rule of law.",
      imageText: "Portrait Placeholder" 
    },
    {
      name: "Justice Justice Elizabeth Namboki", // Example Name - replace with your actual co-founder/chancellor
      role: "Co-Founder & Canonical Jurist",
      contribution: "Drafted the collaborative operational constitution for the guild, meticulously bridging the complex relationship between internal Anglican Church canons and contemporary Ugandan civil law statutes.",
      imageText: "Portrait Placeholder"
    }
  ];

  return (
    <>
      {/* 1. RETAINED: Your exact original content page setup layout */}
      <ContentPage
        title="Founder"
        intro="The Guild was shaped by a vision of scholarship and pastoral care, bringing canon law into conversation with the life of the Church."
        sections={staticSections}
      />

      {/* 2. Professional Founders Gallery Profile Section */}
      <div id="founder-profile-isolated-theme" className="container mt-lg founder-profile-section">
        <div className="founder-profile-header-divider">
          <span className="founder-profile-cross">✠</span>
          <h3 className="founder-profile-heading">The Founding Council</h3>
          <span className="founder-profile-cross">✠</span>
        </div>

        <div className="founder-profile-grid">
          {foundersList.map((founder, index) => (
            <div key={index} className="founder-profile-card">
              {/* Left Column: Portrait Placement Box */}
              <div className="founder-portrait-column">
                <div className="founder-portrait-box">
                  <span className="founder-portrait-seal">✠</span>
                  <p className="founder-portrait-text">{founder.imageText}</p>
                </div>
              </div>

              {/* Right Column: Professional Profile Content */}
              <div className="founder-details-column">
                <span className="founder-role-badge">{founder.role}</span>
                <h4 className="founder-name-heading">{founder.name}</h4>
                <p className="founder-contribution-text">{founder.contribution}</p>
                
                <div className="founder-profile-footer">
                  <span className="founder-footer-cross">✠</span>
                  <span className="founder-footer-label">Fidelity • Wisdom • Service</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// 3. Anglican Church design system injected safely with high priority flags
const founderProfileStyles = `
  #founder-profile-isolated-theme.founder-profile-section {
    margin-top: 4rem !important;
    margin-bottom: 5rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #founder-profile-isolated-theme .founder-profile-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 3rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #founder-profile-isolated-theme .founder-profile-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
  }

  #founder-profile-isolated-theme .founder-profile-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #founder-profile-isolated-theme .founder-profile-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 2.5rem !important;
    max-width: 950px !important;
    margin: 0 auto !important;
  }

  #founder-profile-isolated-theme .founder-profile-card {
    background: #fdfbf7 !important; /* Soft Parchment White */
    border: 1px solid #e2d9c8 !important;
    border-top: 4px solid #800020 !important; /* Episcopal Burgundy Top Border Accent */
    border-radius: 4px !important;
    padding: 2rem !important;
    display: flex !important;
    flex-direction: row !important;
    gap: 2rem !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    text-align: left !important;
  }

  #founder-profile-isolated-theme .founder-profile-card:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 16px rgba(128, 0, 32, 0.06) !important;
    border-top-color: #d4af37 !important; /* Shifts toward liturgical gold on hover */
  }

  /* Responsive layout collapse for tablets and mobile devices */
  @media (max-width: 768px) {
    #founder-profile-isolated-theme .founder-profile-card {
      flex-direction: column !important;
      gap: 1.5rem !important;
      padding: 1.5rem !important;
    }
    #founder-profile-isolated-theme .founder-portrait-column {
      width: 100% !important;
      display: flex !important;
      justify-content: center !important;
    }
  }

  #founder-profile-isolated-theme .founder-portrait-column {
    width: 180px !important;
    flex-shrink: 0 !important;
  }

  #founder-profile-isolated-theme .founder-portrait-box {
    width: 180px !important;
    height: 220px !important;
    background: #f4eee1 !important; /* Darker parchment backdrop */
    border: 1px dashed #e2d9c8 !important;
    border-radius: 4px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    position: relative !important;
  }

  #founder-profile-isolated-theme .founder-portrait-seal {
    color: #e2d9c8 !important;
    font-size: 3rem !important;
    line-height: 1 !important;
    margin-bottom: 0.5rem !important;
  }

  #founder-profile-isolated-theme .founder-portrait-text {
    font-size: 0.8rem !important;
    color: #5c4033 !important;
    font-weight: 500 !important;
    margin: 0 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
  }

  #founder-profile-isolated-theme .founder-details-column {
    flex-grow: 1 !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
  }

  #founder-profile-isolated-theme .founder-role-badge {
    align-self: flex-start !important;
    font-size: 0.75rem !important;
    font-weight: bold !important;
    color: #800020 !important; /* Liturgical Burgundy text accent */
    background: #f4eee1 !important;
    padding: 0.25rem 0.6rem !important;
    border-radius: 12px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    border: 1px solid #b8cbd9 !important;
    margin-bottom: 0.5rem !important;
  }

  #founder-profile-isolated-theme .founder-name-heading {
    font-size: 1.4rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    margin: 0 0 0.75rem 0 !important;
    font-weight: 600 !important;
    line-height: 1.3 !important;
  }

  #founder-profile-isolated-theme .founder-contribution-text {
    color: #4a4a4a !important;
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    margin: 0 0 1.25rem 0 !important;
  }

  #founder-profile-isolated-theme .founder-profile-footer {
    display: flex !important;
    align-items: center !important;
    gap: 0.4rem !important;
    border-top: 1px dashed #e2d9c8 !important;
    padding-top: 0.75rem !important;
    width: 100% !important;
  }

  #founder-profile-isolated-theme .founder-footer-cross {
    color: #800020 !important;
    font-size: 0.85rem !important;
  }

  #founder-profile-isolated-theme .founder-footer-label {
    font-weight: bold !important;
    color: #5c4033 !important;
    font-size: 0.75rem !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
  }
`;

// Inject style parameters directly into global document head safely
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.type = 'text/css';
  styleTag.appendChild(document.createTextNode(founderProfileStyles));
  document.head.appendChild(styleTag);
}


// export function LeadershipStructurePage() {
//   return (
//     <ContentPage
//       title="Leadership Structure"
//       intro="The Sodality is guided by a leadership structure that supports scholarship, communication, and coordinated ministry."
//       sections={[
//         {
//           title: 'Structure',
//           body: ['Leadership includes elected officers, advisors, and committees that help guide the Sodality’s work.', 'The structure is designed to balance continuity, accountability, and participation.'],
//         },
//       ]}
//     />
//   )
// }


export function LeadershipStructurePage() {
  // Retained your exact original sections array data unchanged
  const staticSections = [
    {
      title: 'Structure',
      body: [
        'Leadership includes elected officers, advisors, and committees that help guide the Guild’s work.',
        'The structure is designed to balance continuity, accountability, and participation.'
      ],
    },
  ];

  // Professional Anglican Ecclesiastical Governance Hierarchy Nodes
  const leadershipNodes = [
    {
      image: "",
      rank: "The Episcopal Protector",
      title: "Presidential Oversight & Spiritual Patronage",
      duties: "Typically held by a senior Bishop or Archbishop within the Province. The Episcopal Protector ensures that all canonical updates, resolutions, and theological publications remain in full alignment with the Provincial Constitution and historic Anglican doctrine."
    },
    {
      rank: "The Warden / Convener",
      title: "Executive Direction & Synodal Coordination",
      duties: "An appointed senior clergyman or canonical academic who manages the daily operations of the Sodality. The Convener sets administrative agendas, schedules workshops, and ensures that research tasks meet the pastoral needs of dioceses."
    },
    {
      image: "",
      rank: "The Chancellor / Legal Assessor",
      title: "Jurisprudence & Inter-Jurisdictional Relations",
      duties: "A qualified legal jurist who advises the guild on the complex relationship between internal church laws and civil court statutes. The Chancellor reviews administrative decisions and ensures complete transparent procedural justice."
    },
    {
      image: "",
      rank: "The Council of Canonical Consultors",
      title: "Scholarly Review & Research Committees",
      duties: "An elected body of clergy, chancellors, and lay scholars who draft advisory opinions on complicated church property, trust, or disciplinary matters. They form specialized committees to handle public education and constitutional reviews."
    }
  ];

  return (
    <>
      {/* 1. RETAINED: Your exact original content page structure and setup */}
      <ContentPage
        title="Leadership Structure"
        intro="The Guild is guided by a leadership structure that supports scholarship, communication, and coordinated ministry."
        sections={staticSections}
      />

      {/* 2. Professional Ecclesiastical Governance Layout Section */}
      <div id="governance-isolated-theme" className="container mt-lg gov-section">
        <div className="gov-header-divider">
          <span className="gov-cross">✠</span>
          <h3 className="gov-heading">Ecclesiastical Governance</h3>
          <span className="gov-cross">✠</span>
        </div>

        <div className="gov-grid">
          {leadershipNodes.map((node, index) => (
            <div key={index} className="gov-card">
              <div className="gov-card-header">
                <span className="gov-rank-badge">{node.rank}</span>
                <h4 className="gov-card-title">{node.title}</h4>
              </div>
              <p className="gov-card-description">{node.duties}</p>
              
              <div className="gov-card-footer">
                <span className="gov-footer-cross">✠</span>
                <span className="gov-footer-text">Decently and in Order — 1 Cor 14:40</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// 3. Anglican Church design system injected safely with high priority flags
const governanceStyles = `
  #governance-isolated-theme.gov-section {
    margin-top: 4rem !important;
    margin-bottom: 5rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #governance-isolated-theme .gov-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 2.5rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #governance-isolated-theme .gov-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
  }

  #governance-isolated-theme .gov-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #governance-isolated-theme .gov-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 2rem !important;
    width: 100% !important;
  }

  #governance-isolated-theme .gov-card {
    background: #fdfbf7 !important; /* Soft Parchment White */
    border: 1px solid #e2d9c8 !important;
    border-left: 4px solid #800020 !important; /* Episcopal Burgundy Accent Line */
    border-radius: 4px !important;
    padding: 1.75rem !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    text-align: left !important;
  }

  #governance-isolated-theme .gov-card:hover {
    transform: translateX(4px) !important;
    box-shadow: 0 6px 12px rgba(128, 0, 32, 0.06) !important;
    border-left-color: #d4af37 !important; /* Shifts toward gold on mouse-over */
  }

  #governance-isolated-theme .gov-card-header {
    display: flex !important;
    flex-direction: column !important;
    gap: 0.4rem !important;
    margin-bottom: 0.75rem !important;
  }

  #governance-isolated-theme .gov-rank-badge {
    align-self: flex-start !important;
    font-size: 0.75rem !important;
    font-weight: bold !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    background: #e6edf2 !important; /* Soft liturgical blue-white */
    padding: 0.25rem 0.6rem !important;
    border-radius: 4px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    border: 1px solid #b8cbd9 !important;
  }

  #governance-isolated-theme .gov-card-title {
    font-size: 1.3rem !important;
    color: #1a2e40 !important;
    margin: 0 !important;
    font-weight: 600 !important;
    line-height: 1.3 !important;
  }

  #governance-isolated-theme .gov-card-description {
    color: #4a4a4a !important;
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    margin: 0 0 1.25rem 0 !important;
  }

  #governance-isolated-theme .gov-card-footer {
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.4rem !important;
    background: #f4eee1 !important; /* Darker parchment contrast space */
    padding: 0.4rem 0.8rem !important;
    border-radius: 4px !important;
    border-left: 3px solid #d4af37 !important; /* Liturgical Gold side indicator line */
  }

  #governance-isolated-theme .gov-footer-cross {
    color: #800020 !important;
    font-size: 0.85rem !important;
  }

  #governance-isolated-theme .gov-footer-text {
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
  styleTag.appendChild(document.createTextNode(governanceStyles));
  document.head.appendChild(styleTag);
}


// export function DoctrinalStatementPage() {
//   return (
//     <ContentPage
//       title="Doctrinal Statement"
//       intro="The Canon Law Sodality is committed to the Church’s teaching and to the careful application of law in a manner that serves communion and charity."
//       sections={[
//         {
//           title: 'Our Commitment',
//           body: ['We uphold the authority of Church law as a means of ordering ecclesial life in fidelity to the Gospel.', 'Our approach is scholarly, pastoral, and attentive to the needs of the faithful.'],
//         },
//       ]}
//     />
//   )
// }








export function DoctrinalStatementPage() {
  // Retained your exact original sections array data unchanged
  const staticSections = [
    {
      title: 'Our Commitment',
      body: [
        'We uphold the authority of Church law as a means of ordering ecclesial life in fidelity to the Gospel.',
        'Our approach is scholarly, pastoral, and attentive to the needs of the faithful.'
      ],
    },
  ];

  // Professional Anglican Doctrinal Statements (The Chicago-Lambeth Quadrilateral framework)
  const doctrinalStatements = [
    {
      article: "Article I",
      title: "The Holy Scriptures",
      affirmation: "We affirm the Holy Scriptures of the Old and New Testaments as the Word of God, containing all things necessary to salvation, and as being the rule and ultimate standard of Christian faith and canonical discipline."
    },
    {
      article: "Article II",
      title: "The Historic Creeds",
      affirmation: "We uphold the Apostles' Creed as the Baptismal Symbol, and the Nicene Creed as the sufficient statement of the Christian faith. These historic formulations guide our theological boundaries and canonical interpretations."
    },
    {
      article: "Article III",
      title: "The Sacraments of the Church",
      affirmation: "We recognize the two Sacraments ordained by Christ Himself—Holy Baptism and the Holy Eucharist—celebrated with unfailing use of Christ's words of institution, and of the elements ordained by Him. Our canons serve to guard and rightly administer these sacred mysteries."
    },
    {
      article: "Article IV",
      title: "The Historic Episcopate",
      affirmation: "We maintain the Historic Episcopate, locally adapted in the methods of its administration to the varying needs of the nations and peoples called of God into the Unity of His Church, as a vital bond of order and ecclesial communion."
    }
  ];

  return (
    <>
      {/* 1. RETAINED: Your exact original content page structure and setup */}
      <ContentPage
        title="Doctrinal Statement"
        intro="The Canon Law Guild of Uganda is committed to the Church’s teaching and to the careful application of law in a manner that serves communion and charity."
        sections={staticSections}
      />

      {/* 2. Detailed Doctrinal Statements Layout Section */}
      <div id="doctrinal-isolated-theme" className="container mt-lg doctrine-section">
        <div className="doctrine-header-divider">
          <span className="doctrine-cross">✠</span>
          <h3 className="doctrine-heading">Articles of Affirmation</h3>
          <span className="doctrine-cross">✠</span>
        </div>

        <div className="doctrine-grid">
          {doctrinalStatements.map((statement, index) => (
            <div key={index} className="doctrine-card">
              <div className="doctrine-card-header">
                <span className="doctrine-article-badge">{statement.article}</span>
                <h4 className="doctrine-card-title">{statement.title}</h4>
              </div>
              <p className="doctrine-card-description">{statement.affirmation}</p>
              
              <div className="doctrine-card-footer">
                <span className="doctrine-footer-cross">✠</span>
                <span className="doctrine-footer-text">In Essentials Unity, In Non-Essentials Liberty</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// 3. Anglican Church design system injected safely with high priority flags
const doctrinalStyles = `
  #doctrinal-isolated-theme.doctrine-section {
    margin-top: 4rem !important;
    margin-bottom: 5rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #doctrinal-isolated-theme .doctrine-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 2.5rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #doctrinal-isolated-theme .doctrine-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
  }

  #doctrinal-isolated-theme .doctrine-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #doctrinal-isolated-theme .doctrine-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 2rem !important;
    width: 100% !important;
  }

  #doctrinal-isolated-theme .doctrine-card {
    background: #fdfbf7 !important; /* Soft Parchment White */
    border: 1px solid #e2d9c8 !important;
    border-left: 4px solid #800020 !important; /* Episcopal Burgundy Accent Line */
    border-radius: 4px !important;
    padding: 1.75rem !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    text-align: left !important;
  }

  #doctrinal-isolated-theme .doctrine-card:hover {
    transform: translateX(4px) !important;
    box-shadow: 0 6px 12px rgba(128, 0, 32, 0.06) !important;
    border-left-color: #d4af37 !important; /* Shifts toward gold on mouse-over */
  }

  #doctrinal-isolated-theme .doctrine-card-header {
    display: flex !important;
    align-items: center !important;
    gap: 1rem !important;
    margin-bottom: 0.75rem !important;
  }

  #doctrinal-isolated-theme .doctrine-article-badge {
    font-size: 0.75rem !important;
    font-weight: bold !important;
    color: #800020 !important; /* Liturgical Burgundy */
    background: #f4eee1 !important; /* Soft parchment background */
    padding: 0.25rem 0.6rem !important;
    border-radius: 4px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    border: 1px solid #e2d9c8 !important;
  }

  #doctrinal-isolated-theme .doctrine-card-title {
    font-size: 1.3rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    margin: 0 !important;
    font-weight: 600 !important;
    line-height: 1.3 !important;
  }

  #doctrinal-isolated-theme .doctrine-card-description {
    color: #4a4a4a !important;
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    margin: 0 0 1.25rem 0 !important;
  }

  #doctrinal-isolated-theme .doctrine-card-footer {
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.4rem !important;
    background: #f4eee1 !important; /* Darker parchment contrast space */
    padding: 0.4rem 0.8rem !important;
    border-radius: 4px !important;
    border-left: 3px solid #d4af37 !important; /* Liturgical Gold side indicator line */
  }

  #doctrinal-isolated-theme .doctrine-footer-cross {
    color: #800020 !important;
    font-size: 0.85rem !important;
  }

  #doctrinal-isolated-theme .doctrine-footer-text {
    font-weight: bold !important;
    color: #5c4033 !important;
    font-size: 0.75rem !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
  }
`;

// Inject style parameters directly into global document head safely
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.type = 'text/css';
  styleTag.appendChild(document.createTextNode(doctrinalStyles));
  document.head.appendChild(styleTag);
}









// export function CanonLawTheologyPage() {
//   return (
//     <ContentPage
//       title="Canon Law Theology"
//       intro="Canon law theology explores the relationship between Church law, doctrine, and the life of the people of God."
//       sections={[
//         {
//           title: 'Why It Matters',
//           body: 'A strong theological grasp of canon law helps ministers and scholars interpret laws in a way that remains faithful and pastorally wise.',
//         },
//       ]}
//     />
//   )
// }




export function CanonLawTheologyPage() {
  // Retained your exact introductory part
  const staticSections = [
    {
      title: 'Why It Matters',
      body: 'A strong theological grasp of canon law helps ministers and scholars interpret laws in a way that remains faithful and pastorally wise.',
    },
  ];

  // Deep academic theological pillars of Anglican Canon Law
  const theologicalPillars = [
    {
      numeral: 'I',
      subtitle: 'The Lex Christi and Ecclesial Order',
      content: 'Canon law is not merely a collection of secular administrative rules, but a visible extension of the Law of Christ (Lex Christi). It translates eternal gospel imperatives into orderly community life, ensuring that institutional justice reflects divine truth.',
    },
    {
      numeral: 'II',
      subtitle: 'The Sacramental Framework',
      content: 'In the Anglican tradition, canonical provisions protect and structure the sacraments. Law establishes clear governance for holy baptism, the celebration of the Eucharist, and holy orders, guaranteeing that sacred rites are preserved with reverence.',
    },
    {
      numeral: 'III',
      subtitle: 'The Principles of Pax and Concordia',
      content: 'The theological goal of ecclesial discipline is to maintain peace (pax) and structural harmony (concordia) among the people of God. Law acts as a shield against division, creating safe spaces for communal growth, spiritual healing, and authentic Christian fellowship.',
    },
    {
      numeral: 'IV',
      subtitle: 'Epikeia & Pastoral Wisdom',
      content: 'Anglican jurisprudence values equity or "epikeia"—the understanding that strict legal texts must occasionally bow to pastoral necessity. This ensures that the application of canon law is always guided by the supreme command of pastoral care and the salvation of souls.',
    }
  ];

  return (
    <>
      {/* 1. Retained original top header intro content page layout */}
      <ContentPage
        title="Canon Law Theology"
        intro="Canon law theology explores the relationship between Church law, doctrine, and the life of the people of God."
        sections={staticSections}
      />

      {/* 2. Deep Theological Foundations Layout Section */}
      <div id="theology-isolated-theme" className="container mt-lg theology-section">
        <div className="theology-header-divider">
          <span className="theology-cross">✠</span>
          <h3 className="theology-heading">Theological Foundations</h3>
          <span className="theology-cross">✠</span>
        </div>

        <div className="theology-grid">
          {theologicalPillars.map((pillar, index) => (
            <div key={index} className="theology-card">
              <div className="theology-card-header">
                <span className="theology-numeral">{pillar.numeral}</span>
                <h4 className="theology-card-title">{pillar.subtitle}</h4>
              </div>
              <p className="theology-card-description">{pillar.content}</p>
              
              <div className="theology-card-footer">
                <span className="theology-footer-decoration">✠</span>
                <span className="theology-footer-text">Lex Orandi, Lex Credendi, Lex Agendi</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// 3. Anglican Church styling block with high specificity protection
const theologyStyles = `
  #theology-isolated-theme.theology-section {
    margin-top: 4rem !important;
    margin-bottom: 5rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #theology-isolated-theme .theology-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 2.5rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #theology-isolated-theme .theology-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
  }

  #theology-isolated-theme .theology-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #theology-isolated-theme .theology-grid {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important; /* Responsive Grid Layout */
    gap: 2rem !important;
    width: 100% !important;
  }

  #theology-isolated-theme .theology-card {
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

  #theology-isolated-theme .theology-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 8px 16px rgba(128, 0, 32, 0.08) !important;
    border-color: #d4af37 !important; /* Shifts toward liturgical gold on hover */
  }

  #theology-isolated-theme .theology-card-header {
    display: flex !important;
    align-items: center !important;
    gap: 1rem !important;
    margin-bottom: 1rem !important;
  }

  #theology-isolated-theme .theology-numeral {
    font-size: 1.3rem !important;
    font-weight: bold !important;
    color: #800020 !important; /* Liturgical Burgundy Roman Numeral */
    background: #f4eee1 !important;
    min-width: 2.5rem !important;
    height: 2.5rem !important;
    border-radius: 50% !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    border: 1px solid #e2d9c8 !important;
  }

  #theology-isolated-theme .theology-card-title {
    font-size: 1.25rem !important;
    color: #1a2e40 !important;
    margin: 0 !important;
    font-weight: 600 !important;
    line-height: 1.3 !important;
  }

  #theology-isolated-theme .theology-card-description {
    color: #4a4a4a !important;
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    margin-bottom: 1.5rem !important;
    flex-grow: 1 !important;
  }

  #theology-isolated-theme .theology-card-footer {
    display: flex !important;
    align-items: center !important;
    gap: 0.5rem !important;
    background: #f4eee1 !important; /* Darker parchment contrast footer */
    padding: 0.5rem 1rem !important;
    border-radius: 4px !important;
    border-left: 3px solid #d4af37 !important; /* Gold accent line */
  }

  #theology-isolated-theme .theology-footer-decoration {
    color: #800020 !important;
    font-size: 0.9rem !important;
  }

  #theology-isolated-theme .theology-footer-text {
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
  styleTag.appendChild(document.createTextNode(theologyStyles));
  document.head.appendChild(styleTag);
}



// export function HistoryOfCanonLawPage() {
//   return (
//     <ContentPage
//       title="History of Canon Law"
//       intro="The history of canon law is a story of development, adaptation, and continuity across the life of the Church."
//       sections={[
//         {
//           title: 'A Brief Overview',
//           body: ['From the early Church to the modern era, canon law has evolved as the Church has grown in complexity and mission.', 'Its history reveals both continuity in doctrine and development in practice.'],
//         },
//       ]}
//     />
//   )
// }



export function HistoryOfCanonLawPage() {
  // Retained your exact introductory part
  const staticSections = [
    {
      title: 'A Brief Overview',
      body: [
        'From the early Church to the modern era, canon law has evolved as the Church has grown in complexity and mission.',
        'Its history reveals both continuity in doctrine and development in practice.'
      ],
    },
  ];

  // The historical epochs of Canon Law development
  const historicalEpochs = [
    {
      era: 'Early Church to First Millennium',
      title: 'The Conciliar Foundations',
      description: 'The roots of canon law trace back to the Apostolic age and the early Ecumenical Councils (such as Nicaea, Constantinople, and Chalcedon). Early discipline was shaped by local councils and regional epistles, establishing the foundational structures of the episcopate, liturgical order, and communal boundaries.',
    },
    {
      era: 'The 12th Century Medieval Golden Age',
      title: 'The Decretum Gratiani and Codification',
      description: 'In the 1140s, a monk named Gratian compiled the "Concordia Discordantium Canonum" (Agreement of Clashing Canons), famously known as the Decretum. This monumental text used scholastic philosophy to harmonize conflicting regional laws. It established canon law as an independent academic and judicial discipline throughout Western Europe.',
    },
    {
      era: 'The 16th Century Reformation',
      title: 'The English Reformation and Henrician Statutes',
      description: 'With the Submission of the Clergy (1532) and the Act of Supremacy (1534), the Church of England broke with papal jurisdiction. King Henry VIII ordered that existing medieval canon laws remained valid only if they did not oppose the laws of the realm or the royal prerogative. This created a unique blend of ancient Catholic jurisprudence and English common law.',
    },
    {
      era: '1603 to the Present Day',
      title: 'The Canons of 1603 and the Global Communion',
      description: 'The Canons of 1603 provided the primary legal framework for post-Reformation Anglicanism. As the British Empire expanded, local provinces created independent, self-governing national churches. Today, the global Anglican Communion is held together not by a single central legal authority, but by a shared constitutional tradition, mutual respect, and provincial canon laws.',
    }
  ];

  return (
    <>
      {/* 1. Retained original top header intro content page layout */}
      <ContentPage
        title="History of Canon Law"
        intro="The history of canon law is a story of development, adaptation, and continuity across the life of the Church."
        sections={staticSections}
      />

      {/* 2. Detailed Historical Timeline Layout Section */}
      <div id="history-isolated-theme" className="container mt-lg history-section">
        <div className="history-header-divider">
          <span className="history-cross">✠</span>
          <h3 className="history-heading">Historical Timeline</h3>
          <span className="history-cross">✠</span>
        </div>

        <div className="history-timeline">
          {historicalEpochs.map((epoch, index) => (
            <div key={index} className="history-timeline-item">
              {/* Left Column: Era Tag */}
              <div className="history-era-column">
                <span className="history-era-tag">{epoch.era}</span>
              </div>
              
              {/* Right Column: Historical Content Card */}
              <div className="history-content-column">
                <div className="history-card">
                  <h4 className="history-card-title">
                    <span className="history-card-cross">✠</span> {epoch.title}
                  </h4>
                  <p className="history-card-description">{epoch.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// 3. Anglican Church Timeline styling block with high specificity protection
const historyStyles = `
  #history-isolated-theme.history-section {
    margin-top: 4rem !important;
    margin-bottom: 5rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #history-isolated-theme .history-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 3rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #history-isolated-theme .history-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
  }

  #history-isolated-theme .history-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #history-isolated-theme .history-timeline {
    display: flex !important;
    flex-direction: column !important;
    gap: 2rem !important;
    position: relative !important;
    max-width: 900px !important;
    margin: 0 auto !important;
  }

  #history-isolated-theme .history-timeline-item {
    display: flex !important;
    flex-direction: row !important;
    gap: 2rem !important;
    width: 100% !important;
  }

  /* Responsive layout adjustment for smaller devices */
  @media (max-width: 768px) {
    #history-isolated-theme .history-timeline-item {
      flex-direction: column !important;
      gap: 0.5rem !important;
    }
    #history-isolated-theme .history-era-column {
      text-align: left !important;
      width: 100% !important;
    }
  }

  #history-isolated-theme .history-era-column {
    width: 25% !important;
    text-align: right !important;
    padding-top: 1rem !important;
    flex-shrink: 0 !important;
  }

  #history-isolated-theme .history-era-tag {
    font-size: 0.85rem !important;
    font-weight: bold !important;
    color: #800020 !important; /* Liturgical Burgundy text accent */
    background: #f4eee1 !important; /* Soft dark parchment background */
    padding: 0.4rem 0.8rem !important;
    border-radius: 4px !important;
    border-right: 3px solid #d4af37 !important; /* Gold side marker */
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    display: inline-block !important;
  }

  #history-isolated-theme .history-content-column {
    flex-grow: 1 !important;
  }

  #history-isolated-theme .history-card {
    background: #fdfbf7 !important; /* Soft Parchment White */
    border: 1px solid #e2d9c8 !important;
    border-left: 4px solid #1a2e40 !important; /* Majestic Anglican Navy Accent Line */
    border-radius: 4px !important;
    padding: 1.75rem !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    text-align: left !important;
  }

  #history-isolated-theme .history-card:hover {
    transform: translateX(4px) !important;
    box-shadow: 0 6px 12px rgba(26, 46, 64, 0.06) !important;
    border-left-color: #d4af37 !important; /* Shifts toward liturgical gold on hover */
  }

  #history-isolated-theme .history-card-cross {
    color: #800020 !important;
    margin-right: 0.25rem !important;
  }

  #history-isolated-theme .history-card-title {
    font-size: 1.25rem !important;
    color: #1a2e40 !important;
    margin-top: 0 !important;
    margin-bottom: 0.75rem !important;
    font-weight: 600 !important;
    line-height: 1.3 !important;
  }

  #history-isolated-theme .history-card-description {
    color: #4a4a4a !important;
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    margin: 0 !important;
  }
`;

// Inject styling parameters directly into global document head safely
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.type = 'text/css';
  styleTag.appendChild(document.createTextNode(historyStyles));
  document.head.appendChild(styleTag);
}




// 1. Define the structure of a Decided Case item from your database
interface DecidedCaseItem {
  id: number;
  title: string;
  summary: string;
  case_date: string;
}

export function DecidedCasesPage() {
  const [cases, setCases] = useState<DecidedCaseItem[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. Fetch cases from the backend API on page load
  useEffect(() => {
    // fetch('http://127.0.0.1:8000/api/decided-cases/') 
    fetch('decided-cases/') 
      .then((res) => res.json())
      .then((data: DecidedCaseItem[]) => {
        setCases(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching decided cases:", err);
        setLoading(false);
      });
  }, []);

  // 3. Keep your required static introductory part inside ContentPage
  const staticSections = [
    {
      title: 'Case Study Focus',
      body: 'These resources are useful for scholars, clergy, and anyone wishing to understand the practical implications of canonical decision-making.',
    },
  ];

  return (
    <>
      {/* ContentPage handles your required static introductory part */}
      <ContentPage
        title="Decided Cases"
        intro="Our case discussions highlight how canonical principles are applied in real-world situations."
        sections={staticSections}
      />

      {loading && (
        <p className="text-muted church-loading text-center">
          ⌛ Reviewing historical decrees and case archives...
        </p>
      )}

      {/* 4. Fixed HTML output: Render your dynamic cases using the classes matching your churchStyles */}
      {!loading && cases.length > 0 && (
        <div className="container mt-lg church-section">
          <div className="church-header-divider">
            <span className="church-cross">✠</span>
            <h3 className="church-heading">Official Decided Cases</h3>
            <span className="church-cross">✠</span>
          </div>

          <div className="church-grid">
            {cases.map((item) => (
              <div key={item.id} className="church-card">
                <div className="church-card-badge">Decree</div>
                
                <h4 className="church-card-title">{item.title}</h4>
                <p className="church-card-description">{item.summary}</p>

                <div className="church-card-footer">
                  <span className="church-icon">📜</span>
                  <div>
                    <span className="church-label">Decree Date:</span>
                    <span className="church-date">
                      {new Date(item.case_date).toLocaleDateString(undefined, {
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

// 5. Your exact church styling system injected at the bottom of the document file
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
    white-space: pre-wrap; /* Keeps paragraphs from your database readable */
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

// Inject style parameters directly into global document head
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.type = 'text/css';
  styleTag.appendChild(document.createTextNode(churchStyles));
  document.head.appendChild(styleTag);
}
