// import React, { useEffect, useState } from 'react'
// import api, { setAuthToken } from '../api/api'

// type Publication = { id:number; title:string; slug:string; published_at:string | null }

// const fallbackPublications: Publication[] = [
//   {
//     id: 1,
//     title: 'Canonical Practice in Contemporary Church Life',
//     slug: 'canonical-practice-in-contemporary-church-life',
//     published_at: '2026-07-12',
//   },
//   {
//     id: 2,
//     title: 'A Guide to Ecclesiastical Procedure',
//     slug: 'guide-to-ecclesiastical-procedure',
//     published_at: '2026-05-22',
//   },
//   {
//     id: 3,
//     title: 'The Role of Canon Law in Pastoral Ministry',
//     slug: 'role-of-canon-law-in-pastoral-ministry',
//     published_at: '2026-03-08',
//   },
// ]

// export default function PublicationsList(){
//   const [items, setItems] = useState<Publication[]>(fallbackPublications)
//   const [loading, setLoading] = useState(true)

//   useEffect(()=>{
//     const token = localStorage.getItem('cl_token')
//     if(token) setAuthToken(token)
//     async function load(){
//       try{
//         const res = await api.get('/api/publications/')
//         if(Array.isArray(res.data) && res.data.length > 0){
//           setItems(res.data)
//         }
//       }catch(e){
//         console.error(e)
//       }finally{setLoading(false)}
//     }
//     load()
//   },[])

//   return (
//     <div className="container mt-md">
//       <div className="section__heading"><h2>Publications</h2></div>
//       {loading ? <div>Loading...</div> : (
//         <div className="grid mt-md">
//           {items.map(p=> (
//             <div key={p.id} className="card">
//               <div className="title">{p.title}</div>
//               <div className="meta">{p.published_at || 'Draft'}</div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }






import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api, { setAuthToken } from '../api/api';

type Publication = { 
  id: number; 
  title: string; 
  slug: string; 
  published_at: string | null;
  author?: string; 
  category?: 'Jurisprudence' | 'Commentary' | 'Dissertations' | string;
  abstract?: string;
};

export default function PublicationsList() {
  const [items, setItems] = useState<Publication[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<string>('All');

  useEffect(() => {
    const token = localStorage.getItem('cl_token');
    if (token) setAuthToken(token);

    async function loadPublicationsFromDB() {
      try {
        setLoading(true);
        setErrorMessage(null);
        const res = await api.get('/api/publications/');
        if (Array.isArray(res.data)) {
          setItems(res.data);
        } else {
          setErrorMessage("Received invalid structural response payload from the data repository.");
        }
      } catch (e: any) {
        console.error("Database collection transmission failure:", e);
        setErrorMessage(e.response?.data?.message || "Unable to securely establish a connection with the database repository server.");
      } finally {
        setLoading(false);
      }
    }
    loadPublicationsFromDB();
  }, []);

  // Live File Stream Download Logic targeting the backend port 8000
  const handleDownloadPDF = async (id: number, title: string) => {
    try {
      const response = await api.get(`/api/publications/${id}/download/`, {
        responseType: 'blob', // Tells Axios to safely handle binary file streams
      });

      // Create transient browser anchor execution context for file download conversion
      const blobUrl = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.href = blobUrl;

      // Formatting smooth, search-engine-friendly file strings dynamically
      const cleanFileName = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      link.setAttribute('download', `${cleanFileName}.pdf`);

      document.body.appendChild(link);
      link.click();

      // Clean memory traces immediately
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("PDF download transfer alert:", error);
      alert("Failed to download the document asset. Please ensure your backend endpoint supports the file action.");
    }
  };

  const filteredItems = items.filter(p => {
    const titleMatch = p.title?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
    const authorMatch = p.author?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
    const abstractMatch = p.abstract?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
    
    const matchesSearch = titleMatch || authorMatch || abstractMatch;
    const matchesTab = activeTab === 'All' || p.category === activeTab;
    
    return matchesSearch && matchesTab;
  });

  return (
    <div className="container mt-md" style={{ fontFamily: 'system-ui, sans-serif', paddingBottom: '60px' }}>
      <div className="section__heading" style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', marginBottom: '24px' }}>
        <h2>Research & Publications Archive</h2>
      </div>
      <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '30px', maxWidth: '800px' }}>
        Streaming institutional legal commentary, peer-reviewed dissertations, and official jurisprudence direct from the Canon Law repository database.
      </p>

      {errorMessage && (
        <div style={{ backgroundColor: '#fff5f5', color: '#c53030', padding: '16px', borderRadius: '6px', border: '1px solid #fed7d7', marginBottom: '20px', fontWeight: '500' }}>
          ⚠️ Connection Alert: {errorMessage}
        </div>
      )}

      <div className="filters-panel" style={styles.filterBar}>
        <div className="search-box-wrapper" style={{ flexGrow: 1 }}>
          <input 
            type="text" 
            placeholder="Query database items by title, author, keywords..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
            disabled={!!errorMessage}
          />
        </div>
        <div className="tabs-group" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['All', 'Jurisprudence', 'Commentary', 'Dissertations'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              disabled={!!errorMessage}
              style={{
                ...styles.tabButton,
                backgroundColor: activeTab === tab ? '#1a202c' : '#edf2f7',
                color: activeTab === tab ? '#ffffff' : '#4a5568',
                opacity: errorMessage ? 0.5 : 1
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div style={styles.loadingWrapper}>
          <div style={styles.skeletonCard}><p style={{ padding: '20px', color: '#718096' }}>Querying index directories from backend relational database...</p></div>
          <div style={styles.skeletonCard}></div>
        </div>
      ) : (
        <>
          {filteredItems.length === 0 && !errorMessage ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#718096', border: '1px dashed #cbd5e0', borderRadius: '8px' }}>
              No current document records reside inside this database partition collection index.
            </div>
          ) : (
            <div className="grid mt-md" style={styles.stackGrid}>
              {filteredItems.map(p => (
                <div key={p.id} className="card" style={styles.publicationCard}>
                  <div style={styles.cardHeader}>
                    <span style={styles.categoryBadge}>{p.category || 'General Document'}</span>
                    <span className="meta" style={{ color: '#718096', fontSize: '0.85rem' }}>
                      DB Entry Date: {p.published_at ? new Date(p.published_at).toLocaleDateString() : 'Draft Status'}
                    </span>
                  </div>

                  <h3 className="title" style={styles.documentTitle}>{p.title}</h3>
                  <div style={styles.authorLine}>Attributed Scholar: <strong>{p.author || 'Anonymous / Unassigned Registry'}</strong></div>
                  <p style={styles.abstractText}>{p.abstract || 'No structural abstract summary synopsis index column supplied inside this document record framework row cell.'}</p>

                  <div style={styles.actionBlock}>
                    <Link 
                      to={`/what-we-do/publications/${p.id}`} 
                      style={{ ...styles.primaryLinkBtn, textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
                    >
                      Read Online
                    </Link>
                    
                    {/* FIXED: Swapped out the old alert() button trigger workflow block for handleDownloadPDF */}
                    <button 
                      onClick={() => handleDownloadPDF(p.id, p.title)}
                      style={styles.downloadBtn}
                    >
                      📥 Download PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

// Complete Visual design theme layout definitions
const styles: { [key: string]: React.CSSProperties } = {
  filterBar: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '16px',
    alignItems: 'center',
    marginBottom: '24px',
    backgroundColor: '#f7fafc',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  },
  searchInput: {
    width: '100%',
    padding: '10px 14px',
    borderRadius: '6px',
    border: '1px solid #cbd5e0',
    fontSize: '0.95rem',
    boxSizing: 'border-box'
  },
  tabButton: {
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    fontWeight: '600',
    fontSize: '0.85rem',
    cursor: 'pointer',
    transition: 'all 0.15s ease'
  },
  stackGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  publicationCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderLeft: '4px solid #3182ce',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px'
  },
  categoryBadge: {
    backgroundColor: '#ebf8ff',
    color: '#2b6cb0',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    padding: '4px 10px',
    borderRadius: '9999px',
    textTransform: 'uppercase'
  },
  documentTitle: {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#1a202c',
    margin: '0 0 6px 0'
  },
  authorLine: {
    fontSize: '0.9rem',
    color: '#4a5568',
    marginBottom: '14px'
  },
  abstractText: {
    fontSize: '0.95rem',
    color: '#4a5568',
    lineHeight: '1.6',
    margin: '0 0 20px 0',
    backgroundColor: '#f8fafc',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #edf2f7'
  },
  actionBlock: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  },
  primaryLinkBtn: {
    backgroundColor: 'transparent',
    border: '1px solid #3182ce',
    color: '#3182ce',
    padding: '8px 16px',
    borderRadius: '4px',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '0.9rem'
  },
  downloadBtn: {
    backgroundColor: '#3182ce',
    border: 'none',
    color: '#ffffff',
    padding: '8px 16px',
    borderRadius: '4px',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '0.9rem'
  },
  loadingWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  skeletonCard: {
    minHeight: '140px',
    backgroundColor: '#edf2f7',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};
