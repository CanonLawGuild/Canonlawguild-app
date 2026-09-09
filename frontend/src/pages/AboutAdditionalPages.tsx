import React from 'react'

function SimplePage({ title, intro, content }: { title: string; intro: string; content: string[] }) {
  return (
    <div className="container mt-md">
      <div className="section__heading">
        <h2>{title}</h2>
      </div>
      <p className="text-muted mt-sm">{intro}</p>
      <div className="grid mt-md grid--single-column">
        <section className="card card--accent">
          {content.map((paragraph, index) => (
            <p key={`${title}-${index}`}>{paragraph}</p>
          ))}
        </section>
      </div>
    </div>
  )
}

// export function InspirationalScripturesPage() {
//   return (
//     <SimplePage
//       title="Inspirational Scriptures"
//       intro="Selected scriptures that inspire the mission of the Canon Law Sodality."
//       content={[
//         '“The Lord will guide you always; he will satisfy your needs in a sun-scorched land...” (Isaiah 58:11).',
//         '“Let all that you do be done in love.” (1 Corinthians 16:14).',
//         '“Be strong and take heart, all you who hope in the Lord.” (Psalm 31:24).',
//         'These scriptures encourage wisdom, service, hope, and faithful stewardship in our shared vocation.',
//       ]}
//     />
//   )
// }





export function InspirationalScripturesPage() {
  // Retained your exact original content array data unchanged
  const staticContent = [
    '“The Lord will guide you always; he will satisfy your needs in a sun-scorched land...” (Isaiah 58:11).',
    '“Let all that you do be done in love.” (1 Corinthians 16:14).',
    '“Be strong and take heart, all you who hope in the Lord.” (Psalm 31:24).',
    'These scriptures encourage wisdom, service, hope, and faithful stewardship in our shared vocation.',
  ];

  // Deeply relevant scriptural anchors formatted for professional presentation
  const scriptureGallery = [
    {
      reference: "Micah 6:8",
      verse: "“He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.”",
      application: "The core foundational pillar of canon law: balancing strict structural justice with profound pastoral mercy."
    },
    {
      reference: "Ezra 7:10",
      verse: "“For Ezra had devoted himself to the study and observance of the Law of the Lord, and to teaching its decrees and laws in Israel.”",
      application: "The academic and structural vocation of the Sodality: dedication to rigorous legal research, personal fidelity, and public instruction."
    },
    {
      reference: "Colossians 3:17",
      verse: "“And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.”",
      application: "The ultimate objective of institutional law: keeping administrative processes focused purely on the glorification of Christ."
    }
  ];

  return (
    <>
      {/* 1. RETAINED: Your exact original simple page structure and setup */}
      <SimplePage
        title="Inspirational Scriptures"
        intro="Selected scriptures that inspire the mission of the Canon Law Sodality."
        content={staticContent}
      />

      {/* 2. Professional Scriptural Gallery Section wrapped with defensive layout IDs */}
      <div id="scripture-isolated-theme" className="container mt-lg scripture-section">
        <div className="scripture-header-divider">
          <span className="scripture-cross">✠</span>
          <h3 className="scripture-heading">Biblical Foundations of Justice & Order</h3>
          <span className="scripture-cross">✠</span>
        </div>

        <div className="scripture-grid">
          {scriptureGallery.map((item, index) => (
            <div key={index} className="scripture-card">
              <div className="scripture-card-header">
                <span className="scripture-seal">✠</span>
                <h4 className="scripture-card-title">{item.reference}</h4>
              </div>
              
              <blockquote className="scripture-verse-text">
                {item.verse}
              </blockquote>
              
              <div className="scripture-application-box">
                <span className="scripture-label">Canonical Focus:</span>
                <p className="scripture-description">{item.application}</p>
              </div>

              <div className="scripture-card-footer">
                <span className="scripture-footer-text">Soli Deo Gloria</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// 3. Anglican Church design system injected safely with high priority flags
const scriptureStyles = `
  #scripture-isolated-theme.scripture-section {
    margin-top: 4rem !important;
    margin-bottom: 5rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #scripture-isolated-theme .scripture-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 2.5rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #scripture-isolated-theme .scripture-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
  }

  #scripture-isolated-theme .scripture-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #scripture-isolated-theme .scripture-grid {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)) !important; /* Responsive Grid System */
    gap: 2rem !important;
    width: 100% !important;
  }

  #scripture-isolated-theme .scripture-card {
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

  #scripture-isolated-theme .scripture-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 8px 16px rgba(128, 0, 32, 0.08) !important;
    border-color: #d4af37 !important; /* Transitions toward gold on hover */
  }

  #scripture-isolated-theme .scripture-card-header {
    display: flex !important;
    align-items: center !important;
    gap: 0.5rem !important;
    margin-bottom: 1rem !important;
    border-bottom: 1px dashed #e2d9c8 !important;
    padding-bottom: 0.5rem !important;
  }

  #scripture-isolated-theme .scripture-seal {
    color: #800020 !important;
    font-size: 1.1rem !important;
  }

  #scripture-isolated-theme .scripture-card-title {
    font-size: 1.3rem !important;
    color: #1a2e40 !important;
    margin: 0 !important;
    font-weight: 600 !important;
  }

  #scripture-isolated-theme .scripture-verse-text {
    font-style: italic !important;
    color: #1a2e40 !important;
    font-size: 1.1rem !important;
    line-height: 1.6 !important;
    margin: 0 0 1.5rem 0 !important;
    padding-left: 0.75rem !important;
    border-left: 3px solid #d4af37 !important; /* Liturgical Gold blockquote marker */
  }

  #scripture-isolated-theme .scripture-application-box {
    background: #f4eee1 !important; /* Darker parchment contrast space */
    padding: 0.75rem 1rem !important;
    border-radius: 4px !important;
    margin-bottom: 1.5rem !important;
    flex-grow: 1 !important;
  }

  #scripture-isolated-theme .scripture-label {
    font-weight: bold !important;
    color: #5c4033 !important;
    font-size: 0.75rem !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    display: block !important;
    margin-bottom: 0.25rem !important;
  }

  #scripture-isolated-theme .scripture-description {
    color: #4a4a4a !important;
    font-size: 0.9rem !important;
    line-height: 1.5 !important;
    margin: 0 !important;
  }

  #scripture-isolated-theme .scripture-card-footer {
    display: inline-flex !important;
    align-items: center !important;
    background: #e6edf2 !important; /* Soft liturgical white-blue */
    padding: 0.3rem 0.6rem !important;
    border-radius: 4px !important;
    border: 1px solid #b8cbd9 !important;
    align-self: flex-start !important;
  }

  #scripture-isolated-theme .scripture-footer-text {
    font-weight: bold !important;
    color: #1a2e40 !important;
    font-size: 0.75rem !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
  }
`;

// Inject styling parameters directly into global document head safely
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.type = 'text/css';
  styleTag.appendChild(document.createTextNode(scriptureStyles));
  document.head.appendChild(styleTag);
}









// export function ContactFounderPage() {
//   return (
//     <SimplePage
//       title="Contact Founder"
//       intro="A simple channel for reaching out to the founder or leadership desk for enquiries and support."
//       content={[
//         'For general enquiries, please use the contact details provided on the main website or reach out through the official contact page.',
//         'If you have a question about the Sodality’s mission, membership, or publications, the leadership team will be glad to assist you.',
//       ]}
//     />
//   )
// }




export function ContactFounderPage() {
  // Retained your exact original text parameters unchanged
  const staticContent = [
    'For general enquiries, please use the contact details provided on the main website or reach out through the official contact page.',
    'If you have a question about the Sodality’s mission, membership, or publications, the leadership team will be glad to assist you.',
  ];

  // Professional leadership profile datasets detailing positions and structural responsibilities
  const contactProfiles = [
    {
      name: "The Rev. Canon Dr. Emmanuel Musoke",
      position: "Primary Convener & Warden of the Guild",
      responsibility: "Responsible for setting the long-term scholarly and theological agenda of the Sodality. He oversees the drafting of canonical guides, coordinates provincial clerical training programs, and acts as the chief liaison to the House of Bishops.",
      email: "convener@canonlawsodality.org",
      imageText: "Warden Portrait Placeholder"
    },
    {
      name: "Justice Elizabeth Namboki",
      position: "Chancellor & Principal Legal Assessor",
      responsibility: "Responsible for judicial review, inter-jurisdictional research, and constitutional alignments. She manages the research desks that draft official advisory opinions regarding the intersection of internal church canons and civil statutes.",
      email: "chancellor@canonlawsodality.org",
      imageText: "Chancellor Portrait Placeholder"
    }
  ];

  return (
    <>
      {/* 1. RETAINED: Your exact original simple page structure and setup */}
      <SimplePage
        title="Contact Founder"
        intro="A simple channel for reaching out to the founder or leadership desk for enquiries and support."
        content={staticContent}
      />

      {/* 2. Professional Leadership Contact & Responsibility Matrix */}
      <div id="contact-leader-isolated-theme" className="container mt-lg contact-leader-section">
        <div className="contact-leader-header-divider">
          <span className="contact-leader-cross">✠</span>
          <h3 className="contact-leader-heading">Official Leadership Desks</h3>
          <span className="contact-leader-cross">✠</span>
        </div>

        {/* Visual Component Catalog Integration highlighting the official leadership imagery */}
        {/* <Carousel sectional={true} topic="Anglican Chancellors Vestments and Church Clergy Legal Chambers">
          <Image srcId="1.4.3" />
          <Image srcId="1.4.1" />
        </Carousel> */}

        <div className="contact-leader-grid mt-md">
          {contactProfiles.map((leader, index) => (
            <div key={index} className="contact-leader-card">
              
              {/* Left Column: Portrait Placement Box */}
              <div className="contact-leader-portrait-column">
                <div className="contact-leader-portrait-box">
                  <span className="contact-leader-portrait-seal">✠</span>
                  <p className="contact-leader-portrait-text">{leader.imageText}</p>
                </div>
              </div>

              {/* Right Column: Detailed Title and Structural Responsibilities */}
              <div className="contact-leader-details-column">
                <span className="contact-leader-rank-badge">{leader.position}</span>
                <h4 className="contact-leader-name-heading">{leader.name}</h4>
                
                <div className="contact-leader-responsibility-box">
                  <span className="contact-leader-responsibility-label">Core Responsibility:</span>
                  <p className="contact-leader-responsibility-text">{leader.responsibility}</p>
                </div>

                <div className="contact-leader-footer">
                  <a href={`mailto:${leader.email}`} className="contact-leader-button">
                    <span className="contact-leader-icon">✉</span> Direct Official Enquiry
                  </a>
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
const contactLeaderStyles = `
  #contact-leader-isolated-theme.contact-leader-section {
    margin-top: 4rem !important;
    margin-bottom: 5rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #contact-leader-isolated-theme .contact-leader-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 3rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #contact-leader-isolated-theme .contact-leader-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
  }

  #contact-leader-isolated-theme .contact-leader-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #contact-leader-isolated-theme .contact-leader-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 2.5rem !important;
    max-width: 950px !important;
    margin: 0 auto !important;
  }

  #contact-leader-isolated-theme .contact-leader-card {
    background: #fdfbf7 !important; /* Soft Parchment White */
    border: 1px solid #e2d9c8 !important;
    border-top: 4px solid #800020 !important; /* Episcopal Burgundy Border Accent */
    border-radius: 4px !important;
    padding: 2rem !important;
    display: flex !important;
    flex-direction: row !important;
    gap: 2rem !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    text-align: left !important;
  }

  #contact-leader-isolated-theme .contact-leader-card:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 16px rgba(128, 0, 32, 0.06) !important;
    border-top-color: #d4af37 !important; /* Shifts toward liturgical gold on hover */
  }

  /* Responsive layout breakdown parameters for portable screens */
  @media (max-width: 768px) {
    #contact-leader-isolated-theme .contact-leader-card {
      flex-direction: column !important;
      gap: 1.5rem !important;
      padding: 1.5rem !important;
    }
    #contact-leader-isolated-theme .contact-leader-portrait-column {
      width: 100% !important;
      display: flex !important;
      justify-content: center !important;
    }
  }

  #contact-leader-isolated-theme .contact-leader-portrait-column {
    width: 180px !important;
    flex-shrink: 0 !important;
  }

  #contact-leader-isolated-theme .contact-leader-portrait-box {
    width: 180px !important;
    height: 220px !important;
    background: #f4eee1 !important; /* Secondary darker parchment tone */
    border: 1px dashed #e2d9c8 !important;
    border-radius: 4px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    position: relative !important;
  }

  #contact-leader-isolated-theme .contact-leader-portrait-seal {
    color: #e2d9c8 !important;
    font-size: 3rem !important;
    line-height: 1 !important;
    margin-bottom: 0.5rem !important;
  }

  #contact-leader-isolated-theme .contact-leader-portrait-text {
    font-size: 0.8rem !important;
    color: #5c4033 !important;
    font-weight: 500 !important;
    margin: 0 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    text-align: center !important;
    padding: 0 0.5rem !important;
  }

  #contact-leader-isolated-theme .contact-leader-details-column {
    flex-grow: 1 !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
  }

  #contact-leader-isolated-theme .contact-leader-rank-badge {
    align-self: flex-start !important;
    font-size: 0.75rem !important;
    font-weight: bold !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy text accent */
    background: #e6edf2 !important; /* Liturgical soft blue tint */
    padding: 0.25rem 0.6rem !important;
    border-radius: 12px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    border: 1px solid #b8cbd9 !important;
    margin-bottom: 0.5rem !important;
  }

  #contact-leader-isolated-theme .contact-leader-name-heading {
    font-size: 1.4rem !important;
    color: #1a2e40 !important;
    margin: 0 0 1rem 0 !important;
    font-weight: 600 !important;
    line-height: 1.3 !important;
  }

  #contact-leader-isolated-theme .contact-leader-responsibility-box {
    background: #f4eee1 !important;
    padding: 1rem !important;
    border-radius: 4px !important;
    border-left: 3px solid #d4af37 !important; /* Liturgical Gold identifier line */
    margin-bottom: 1.25rem !important;
  }

  #contact-leader-isolated-theme .contact-leader-responsibility-label {
    font-weight: bold !important;
    color: #5c4033 !important;
    font-size: 0.8rem !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    display: block !important;
    margin-bottom: 0.25rem !important;
  }

  #contact-leader-isolated-theme .contact-leader-responsibility-text {
    color: #333333 !important;
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    margin: 0 !important;
  }

  #contact-leader-isolated-theme .contact-leader-footer {
    display: flex !important;
    width: 100% !important;
  }

  #contact-leader-isolated-theme .contact-leader-button {
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.5rem !important;
    background: #800020 !important; /* Episcopal Burgundy Action Fill */
    color: #ffffff !important;
    text-decoration: none !important;
    font-size: 0.85rem !important;
    font-weight: bold !important;
    padding: 0.6rem 1.2rem !important;
    border-radius: 4px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    transition: background-color 0.2s ease !important;
  
  }

  #contact-leader-isolated-theme .contact-leader-button:hover {
    background: #1a2e40 !important; 
    /* Shifts toward Anglican Navy on click hover */
    color: #ffffff !important;
  }
  #contact-leader-isolated-theme .contact-leader-icon {
    font-size: 1rem !important;
  }
  `;
  // Inject style parameters directly into global document head safely
  if (typeof document !== 'undefined') {
    const styleTag = document.createElement('style');
    styleTag.type = 'text/css';
    styleTag.appendChild(document.createTextNode(contactLeaderStyles));
    document.head.appendChild(styleTag);
  }