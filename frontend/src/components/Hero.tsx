// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Hero(){
//   return (
//     <header className="hero">
//       <div className="hero-inner container">
//         <div className="hero-copy">
//           <h1>Canon Law Sodality</h1>
//           <p>Advancing canonical scholarship, decided cases, and advisory opinions.</p>
//           <div className="hero-cta">
//             <Link className="btn btn-primary" to="/publications">FIND OUT MORE</Link>
//           </div>
//         </div>
//         <div className="hero-media">
//           <img src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="Vaulted ceiling" />
//         </div>
//       </div>
//     </header>
//   )
// }



// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function HomePage() {
//   return (
//     <div className="homepage-wrapper">
//       {/* --- HERO HEADER SECTION --- */}
//       <header className="hero">
//         <div className="hero-inner container">
//           <div className="hero-copy">
//             <h1>Canon Law Sodality</h1>
//             <p>Advancing canonical scholarship, decided cases, and advisory opinions.</p>
//             <div className="hero-cta">
//               <Link className="btn btn-primary" to="/publications">FIND OUT MORE</Link>
//             </div>
//           </div>
//           <div className="hero-media">
//             <img 
//               src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" 
//               alt="Vaulted ceiling architecture" 
//             />
//           </div>
//         </div>
//       </header>

//       {/* --- CORE SECTIONS SUMMARY --- */}
//       <main className="container mt-md" style={{ paddingBottom: '60px' }}>
        
//         {/* Section 1: Publications & Research */}
//         <section className="mt-md" style={styles.sectionBlock}>
//           <div className="section__heading" style={styles.headingLeft}>
//             <h2>Jurisprudence & Publications</h2>
//           </div>
//           <p className="text-muted mt-sm">
//             Access our collected legal archives, peer-reviewed commentary, and formal interpretations of ecclesiastical law.
//           </p>
//           <div className="grid mt-sm" style={styles.threeColumnGrid}>
//             <div className="card" style={styles.summaryCard}>
//               <h3 style={styles.cardTitle}>Decided Cases</h3>
//               <p style={styles.cardText}>In-depth analysis of definitive tribunal judgments, precedent structures, and decreetal applications.</p>
//               <Link to="/publications" style={styles.cardLink}>Browse Cases →</Link>
//             </div>
//             <div className="card" style={styles.summaryCard}>
//               <h3 style={styles.cardTitle}>Advisory Opinions</h3>
//               <p style={styles.cardText}>Formal reviews regarding practical applications of the Code of Canon Law within diocesan frameworks.</p>
//               <Link to="/publications" style={styles.cardLink}>View Opinions →</Link>
//             </div>
//             <div className="card" style={styles.summaryCard}>
//               <h3 style={styles.cardTitle}>Academic Papers</h3>
//               <p style={styles.cardText}>Scholarly treatises exploring the history, theology, and philosophy of contemporary church systems.</p>
//               <Link to="/publications" style={styles.cardLink}>Read Journals →</Link>
//             </div>
//           </div>
//         </section>

//         {/* Section 2: Membership Options & Sodality Enrollment */}
//         <section className="mt-lg" style={styles.sectionBlock}>
//           <div className="section__heading" style={styles.headingLeft}>
//             <h2>Society Membership</h2>
//           </div>
//           <p className="text-muted mt-sm">
//             Join a network dedicated to the rigor, integrity, and exploration of Catholic church law.
//           </p>
//           <div className="grid mt-sm" style={styles.threeColumnGrid}>
//             <div className="card" style={styles.summaryCard}>
//               <h3 style={styles.cardTitle}>Annual Tier</h3>
//               <p style={styles.cardText}>Standard access for practicing canonists, tribunal advocates, chancellors, and active consultants.</p>
//               <Link to="/membership" style={styles.cardLink}>View Benefits →</Link>
//             </div>
//             <div className="card" style={styles.summaryCard}>
//               <h3 style={styles.cardTitle}>Goodwill Tier</h3>
//               <p style={styles.cardText}>A supportive tier designed for civil attorneys, parish planners, students, and interested laity.</p>
//               <Link to="/membership" style={styles.cardLink}>Join as Supporter →</Link>
//             </div>
//             <div className="card" style={styles.summaryCard}>
//               <h3 style={styles.cardTitle}>Life Tier</h3>
//               <p style={styles.cardText}>The highest tier of commitment, ensuring a permanent place in our society registry without ongoing dues.</p>
//               <Link to="/membership" style={styles.cardLink}>Secure Life Access →</Link>
//             </div>
//           </div>
//         </section>

//         {/* Section 3: Two-Column split for Donations & Contact Info */}
//         <section className="mt-lg" style={styles.twoColumnGrid}>
//           {/* Donation Summary Card */}
//           <div className="card" style={{ ...styles.summaryCard, padding: '30px' }}>
//             <h3 style={styles.cardTitle}>Support Our Mission</h3>
//             <p style={{ ...styles.cardText, marginBottom: '20px' }}>
//               Your financial contributions help fund research grants, publish canon law papers, and support continuing education seminars for tribunal staffs worldwide.
//             </p>
//             <Link to="/donate" className="btn btn-primary" style={{ display: 'inline-block', textAlign: 'center' }}>
//               Make a Donation
//             </Link>
//           </div>

//           {/* Contact & Inquiry Summary Card */}
//           <div className="card" style={{ ...styles.summaryCard, padding: '30px' }}>
//             <h3 style={styles.cardTitle}>Contact the Secretariat</h3>
//             <p style={{ ...styles.cardText, marginBottom: '20px' }}>
//               Have questions regarding membership, research submissions, or canonical consultations? Reach out to our leadership office directly for formal inquiries.
//             </p>
//             <Link to="/contact" className="btn btn-secondary" style={{ display: 'inline-block', textAlign: 'center' }}>
//               Get In Touch
//             </Link>
//           </div>
//         </section>

//       </main>
//     </div>
//   );
// }

// // Clean layout styles matching a professional academic theme
// const styles: { [key: string]: React.CSSProperties } = {
//   sectionBlock: {
//     marginBottom: '4rem'
//   },
//   headingLeft: {
//     textAlign: 'left',
//     borderBottom: '2px solid #e2e8f0',
//     paddingBottom: '0.5rem',
//     marginBottom: '1rem'
//   },
//   threeColumnGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//     gap: '20px',
//     marginTop: '1.5rem'
//   },
//   twoColumnGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
//     gap: '30px',
//     marginTop: '3rem'
//   },
//   summaryCard: {
//     backgroundColor: '#fff',
//     border: '1px solid #e2e8f0',
//     borderRadius: '8px',
//     padding: '24px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
//   },
//   cardTitle: {
//     fontSize: '1.25rem',
//     fontWeight: '600',
//     color: '#1a202c',
//     margin: '0 0 10px 0'
//   },
//   cardText: {
//     fontSize: '0.95rem',
//     color: '#4a5568',
//     lineHeight: '1.5',
//     margin: '0 0 20px 0',
//     flexGrow: 1
//   },
//   cardLink: {
//     color: '#3182ce',
//     fontWeight: '600',
//     textDecoration: 'none',
//     fontSize: '0.95rem'
//   }
// };







import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="homepage-wrapper">
      {/* --- HERO HEADER SECTION WITH BACKGROUND IMAGE --- */}
      <header 
        className="hero" 
        style={{
          position: 'relative',
          background: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url("./static/images/canon-law-image.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '100px 0',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <div className="hero-inner container" style={{ maxWidth: '800px', margin: '0 auto', zIndex: 2 }}>
          <div className="hero-copy">
            <h1 style={{ fontSize: '3rem', fontWeight: '700', color: '#ffffff', marginBottom: '20px' }}>
              Canon Law Guild
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#f7fafc', marginBottom: '30px', lineHeight: '1.6' }}>
              Advancing canonical scholarship, decided cases, and advisory opinions.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" to="/publications" style={{ padding: '12px 30px', fontSize: '1rem' }}>
                FIND OUT MORE
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* --- CORE SECTIONS SUMMARY --- */}
      <main className="container mt-md" style={{ paddingBottom: '60px' }}>
        
        {/* Section 1: Publications & Research */}
        <section className="mt-md" style={styles.sectionBlock}>
          <div className="section__heading" style={styles.headingLeft}>
            <h2>Jurisprudence & Publications</h2>
          </div>
          <p className="text-muted mt-sm">
            Access our collected legal archives, peer-reviewed commentary, and formal interpretations of ecclesiastical law.
          </p>
          <div className="grid mt-sm" style={styles.threeColumnGrid}>
            <div className="card" style={styles.summaryCard}>
              <h3 style={styles.cardTitle}>Decided Cases</h3>
              <p style={styles.cardText}>In-depth analysis of definitive tribunal judgments, precedent structures, and decreetal applications.</p>
              <Link to="what-we-do/decided-cases" style={styles.cardLink}>Browse Cases →</Link>
            </div>
            <div className="card" style={styles.summaryCard}>
              <h3 style={styles.cardTitle}>Advisory Opinions</h3>
              <p style={styles.cardText}>Formal reviews regarding practical applications of the Code of Canon Law within diocesan frameworks.</p>
              <Link to="what-we-do/advisory-opinions" style={styles.cardLink}>View Opinions →</Link>
            </div>
            <div className="card" style={styles.summaryCard}>
              <h3 style={styles.cardTitle}>Academic Papers</h3>
              <p style={styles.cardText}>Scholarly treatises exploring the history, theology, and philosophy of contemporary church systems.</p>
              <Link to="/publications" style={styles.cardLink}>Read Journals →</Link>
            </div>
          </div>
        </section>

        {/* Section 2: Membership Options & Sodality Enrollment */}
        <section className="mt-lg" style={styles.sectionBlock}>
          <div className="section__heading" style={styles.headingLeft}>
            <h2>Society Membership</h2>
          </div>
          <p className="text-muted mt-sm">
            Join a network dedicated to the rigor, integrity, and exploration of Catholic church law.
          </p>
          <div className="grid mt-sm" style={styles.threeColumnGrid}>
            <div className="card" style={styles.summaryCard}>
              <h3 style={styles.cardTitle}>Annual Tier</h3>
              <p style={styles.cardText}>Standard access for practicing canonists, tribunal advocates, chancellors, and active consultants.</p>
              <Link to="/membership" style={styles.cardLink}>View Benefits →</Link>
            </div>
            <div className="card" style={styles.summaryCard}>
              <h3 style={styles.cardTitle}>Goodwill Tier</h3>
              <p style={styles.cardText}>A supportive tier designed for civil attorneys, parish planners, students, and interested laity.</p>
              <Link to="/membership" style={styles.cardLink}>Join as Supporter →</Link>
            </div>
            <div className="card" style={styles.summaryCard}>
              <h3 style={styles.cardTitle}>Life Tier</h3>
              <p style={styles.cardText}>The highest tier of commitment, ensuring a permanent place in our society registry without ongoing dues.</p>
              <Link to="/membership" style={styles.cardLink}>Secure Life Access →</Link>
            </div>
          </div>
        </section>

        {/* Section 3: Two-Column split for Donations & Contact Info */}
        <section className="mt-lg" style={styles.twoColumnGrid}>
          {/* Donation Summary Card */}
          <div className="card" style={{ ...styles.summaryCard, padding: '30px' }}>
            <h3 style={styles.cardTitle}>Support Our Mission</h3>
            <p style={{ ...styles.cardText, marginBottom: '20px' }}>
              Your financial contributions help fund research grants, publish canon law papers, and support continuing education seminars for tribunal staffs worldwide.
            </p>
            <Link to="/donate" className="btn btn-primary" style={{ display: 'inline-block', textAlign: 'center' }}>
              Make a Donation
            </Link>
          </div>

          {/* Contact & Inquiry Summary Card */}
          <div className="card" style={{ ...styles.summaryCard, padding: '30px' }}>
            <h3 style={styles.cardTitle}>Contact the Secretariat</h3>
            <p style={{ ...styles.cardText, marginBottom: '20px' }}>
              Have questions regarding membership, research submissions, or canonical consultations? Reach out to our leadership office directly for formal inquiries.
            </p>
            <Link to="/contact" className="btn btn-secondary" style={{ display: 'inline-block', textAlign: 'center' }}>
              Get In Touch
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  sectionBlock: {
    marginBottom: '4rem'
  },
  headingLeft: {
    textAlign: 'left',
    borderBottom: '2px solid #e2e8f0',
    paddingBottom: '0.5rem',
    marginBottom: '1rem'
  },
  threeColumnGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginTop: '1.5rem'
  },
  twoColumnGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '30px',
    marginTop: '3rem'
  },
  summaryCard: {
    backgroundColor: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1a202c',
    margin: '0 0 10px 0'
  },
  cardText: {
    fontSize: '0.95rem',
    color: '#4a5568',
    lineHeight: '1.5',
    margin: '0 0 20px 0',
    flexGrow: 1
  },
  cardLink: {
    color: '#3182ce',
    fontWeight: '600',
    textDecoration: 'none',
    fontSize: '0.95rem'
  }
};
