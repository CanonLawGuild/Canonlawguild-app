// import React from 'react';

// // 1. Definition layout structures for Constitution Sections
// type ConstitutionSection = {
//   title: string;
//   body: string | string[];
//   bullets?: string[];
//   pdf_file?: string; // Added field for optional document links
// };

// type ConstitutionPageProps = {
//   title: string;
//   intro: string;
//   sections: ConstitutionSection[];
// };

// // 2. Generic structural layout component
// function ContentPage({ title, intro, sections }: ConstitutionPageProps) {
//   return (
//     <div className="container mt-md" style={{ paddingBottom: '60px' }}>
//       <div className="section__heading" style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', marginBottom: '24px' }}>
//         <h2>{title}</h2>
//       </div>
//       <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '30px', maxWidth: '800px' }}>
//         {intro}
//       </p>

//       <div className="grid mt-md grid--single-column" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//         {sections.map((section, index) => (
//           <section 
//             key={`${title}-${index}`} 
//             className="card card--accent" 
//             style={{ padding: '24px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
//           >
//             <h3 className="section-subheading" style={{ fontSize: '20px', fontWeight: '700', color: '#2b6cb0', margin: '0 0 12px 0' }}>
//               {section.title}
//             </h3>
            
//             {Array.isArray(section.body) ? (
//               <div style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '15px' }}>
//                 {section.body.map((paragraph, paragraphIndex) => (
//                   <p key={`${section.title}-${paragraphIndex}`} style={{ marginBottom: '12px' }}>{paragraph}</p>
//                 ))}
//               </div>
//             ) : (
//               <p style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '15px', margin: '0 0 12px 0' }}>{section.body}</p>
//             )}

//             {section.bullets && (
//               <ul style={{ paddingLeft: '20px', color: '#4a5568', lineHeight: '1.6', fontSize: '15px', marginTop: '8px' }}>
//                 {section.bullets.map((bullet, bulletIndex) => (
//                   <li key={`${section.title}-bullet-${bulletIndex}`} style={{ marginBottom: '6px' }}>{bullet}</li>
//                 ))}
//               </ul>
//             )}

//             {section.pdf_file && (
//               <div style={{ marginTop: '20px' }}>
//                 <button 
//                   onClick={() => alert(`Simulating text registry stream transfer for: ${section.title}`)}
//                   style={{ fontSize: '13px', fontWeight: '600', backgroundColor: '#edf2f7', color: '#2d3748', padding: '8px 14px', borderRadius: '6px', border: '1px solid #cbd5e0', cursor: 'pointer' }}
//                 >
//                   📥 Download Version Asset
//                 </button>
//               </div>
//             )}
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// }

// // 3. Exported view component for your Constitution page path
// export default function ConstitutionPage() {
//   return (
//     <ContentPage
//       title="Constitution & Bylaws"
//       intro="Reviewing institutional governance charters, administrative code laws, and operational compliance frameworks for the Canon Law Guild structure."
//       sections={[
//         {
//           title: 'Canon Law Constitution - 2026 Amendment v3.2',
//           body: 'Current active organizational document framework row. This edition modernizes electronic document collection tracking, updates membership assessment regulations, and clarifies formal tribunal reporting timelines.',
//           bullets: ['Digital registry governance rules', 'Refined council voting margins', 'Tribunal protocol amendments'],
//           pdf_file: '#',
//         },
//         {
//           title: 'Canon Law Constitution - 2020 Revision v2.0',
//           body: [
//             'Historical archive partition entry row tracking record.',
//             'This version organized fundamental operational compliance structures, external registry affiliations, and established formal scholarship commentary standards.'
//           ],
//           pdf_file: '#',
//         },
//         {
//           title: 'Founding Constitutional Charter - 2015 v1.0',
//           body: 'The foundational original framework outlining the core organizational purpose, structural council voting boundaries, and initial ministerial code of ethics definitions.',
//           pdf_file: '#',
//         },
//       ]}
//     />
//   );
// }




// import React, { useState, useEffect } from 'react';
// import api, { setAuthToken } from '../api/api'; // Integrated your database connection instances

// // 1. Definition layout structures for Constitution Sections (First part kept exactly)
// type ConstitutionSection = {
//   id?: number; // Added optional backend database key row identifier
//   title: string;
//   body: string | string[];
//   bullets?: string[];
//   pdf_file?: string; // Added field for optional document links
// };

// type ConstitutionPageProps = {
//   title: string;
//   intro: string;
//   sections: ConstitutionSection[];
//   handleDownloadPDF: (id: number, title: string) => void; // Added download bridge trigger handler
// };

// // 2. Generic structural layout component (Kept exactly with slight additions for active download handling)
// function ContentPage({ title, intro, sections, handleDownloadPDF }: ConstitutionPageProps) {
//   return (
//     <div className="container mt-md" style={{ paddingBottom: '60px' }}>
//       <div className="section__heading" style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', marginBottom: '24px' }}>
//         <h2>{title}</h2>
//       </div>
//       <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '30px', maxWidth: '800px' }}>
//         {intro}
//       </p>

//       <div className="grid mt-md grid--single-column" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//         {sections.map((section, index) => (
//           <section 
//             key={`${title}-${index}`} 
//             className="card card--accent" 
//             style={{ padding: '24px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
//           >
//             <h3 className="section-subheading" style={{ fontSize: '20px', fontWeight: '700', color: '#2b6cb0', margin: '0 0 12px 0' }}>
//               {section.title}
//             </h3>
            
//             {Array.isArray(section.body) ? (
//               <div style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '15px' }}>
//                 {section.body.map((paragraph, paragraphIndex) => (
//                   <p key={`${section.title}-${paragraphIndex}`} style={{ marginBottom: '12px' }}>{paragraph}</p>
//                 ))}
//               </div>
//             ) : (
//               <p style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '15px', margin: '0 0 12px 0' }}>{section.body}</p>
//             )}

//             {section.bullets && (
//               <ul style={{ paddingLeft: '20px', color: '#4a5568', lineHeight: '1.6', fontSize: '15px', marginTop: '8px' }}>
//                 {section.bullets.map((bullet, bulletIndex) => (
//                   <li key={`${section.title}-bullet-${bulletIndex}`} style={{ marginBottom: '6px' }}>{bullet}</li>
//                 ))}
//               </ul>
//             )}

//             {section.pdf_file && (
//               <div style={{ marginTop: '20px' }}>
//                 <button 
//                   onClick={() => section.id ? handleDownloadPDF(section.id, section.title) : alert("File identifier unavailable.")}
//                   style={{ fontSize: '13px', fontWeight: '600', backgroundColor: '#edf2f7', color: '#2d3748', padding: '8px 14px', borderRadius: '6px', border: '1px solid #cbd5e0', cursor: 'pointer' }}
//                 >
//                   📥 Download Version Asset
//                 </button>
//               </div>
//             )}
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// }

// // 3. Exported view component for your Constitution page path
// export default function ConstitutionPage() {
//   const [sections, setSections] = useState<ConstitutionSection[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   useEffect(() => {
//     const token = localStorage.getItem('cl_token');
//     if (token) setAuthToken(token);

//     async function loadConstitutionsFromDB() {
//       try {
//         setLoading(true);
//         setErrorMessage(null);
//         // Fetches data cleanly from the path registered inside your urls.py file
//         const res = await api.get('http://127.0.0.1:8000/api/constitution-versions/');
        
//         if (Array.isArray(res.data)) {
//           // Cleans up any potential escaped characters like '\n' automatically from database input boxes
//           const formattedData = res.data.map((item: any) => ({
//             id: item.id,
//             title: item.title,
//             body: typeof item.body === 'string' ? item.body.replace(/\\n/g, '\n') : item.body,
//             bullets: Array.isArray(item.bullets) ? item.bullets : [],
//             pdf_file: item.download_url || null
//           }));
//           setSections(formattedData);
//         } else {
//           setErrorMessage("Received invalid structural response payload from the data repository.");
//         }
//       } catch (e: any) {
//         console.error("Database collection transmission failure:", e);
//         setErrorMessage(e.response?.data?.message || "Unable to securely establish a connection with the database repository server.");
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadConstitutionsFromDB();
//   }, []);

//   // Secure Live Stream Document Download Translation Handler
//   const handleDownloadPDF = async (id: number, title: string) => {
//     try {
//       const response = await api.get(`/api/constitution-versions/${id}/`, {
//         responseType: 'blob', // Safe binary transmission streams 
//       });

//       const blobUrl = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
//       const link = document.createElement('a');
//       link.href = blobUrl;

//       const cleanFileName = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
//       link.setAttribute('download', `${cleanFileName}.pdf`);

//       document.body.appendChild(link);
//       link.click();

//       link.parentNode?.removeChild(link);
//       window.URL.revokeObjectURL(blobUrl);
//     } catch (error) {
//       console.error("PDF download transfer alert:", error);
//       alert("Failed to download the document asset. Please ensure your backend endpoint supports the file action.");
//     }
//   };

//   // 1. Loading Visual Frame Fallback
//   if (loading) {
//     return (
//       <div className="container mt-md" style={{ paddingBottom: '60px' }}>
//         <div style={{ textAlign: 'center', padding: '40px', color: '#718096', border: '1px dashed #cbd5e0', borderRadius: '8px' }}>
//           Querying index directories from backend relational database...
//         </div>
//       </div>
//     );
//   }

//   // 2. Custom Connection Error Tracker Framework Panel
//   if (errorMessage) {
//     return (
//       <div className="container mt-md" style={{ paddingBottom: '60px' }}>
//         <div style={{ backgroundColor: '#fff5f5', color: '#c53030', padding: '16px', borderRadius: '6px', border: '1px solid #fed7d7', fontWeight: '500' }}>
//           ⚠️ Connection Alert: {errorMessage}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       {sections.length === 0 ? (
//         <div className="container mt-md" style={{ paddingBottom: '60px' }}>
//           <div style={{ textAlign: 'center', padding: '40px', color: '#718096', border: '1px dashed #cbd5e0', borderRadius: '8px' }}>
//             No current document records reside inside this database partition collection index.
//           </div>
//         </div>
//       ) : (
//         <ContentPage
//           title="Constitution & Bylaws"
//           intro="Reviewing institutional governance charters, administrative code laws, and operational compliance frameworks for the Canon Law Guild structure."
//           sections={sections}
//           handleDownloadPDF={handleDownloadPDF}
//         />
//       )}
//     </>
//   );
// }












// import React, { useState, useEffect } from 'react';
// import api, { setAuthToken } from '../api/api'; 

// type ConstitutionSection = {
//   id?: number; 
//   title: string;
//   body: string | string[];
//   bullets?: string[];
//   pdf_file?: string; 
// };

// type ConstitutionPageProps = {
//   title: string;
//   intro: string;
//   sections: ConstitutionSection[];
//   handleDownloadPDF: (id: number, title: string) => void; 
// };

// function ContentPage({ title, intro, sections, handleDownloadPDF }: ConstitutionPageProps) {
//   return (
//     <div className="container mt-md" style={{ paddingBottom: '60px' }}>
//       <div className="section__heading" style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', marginBottom: '24px' }}>
//         <h2>{title}</h2>
//       </div>
//       <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '30px', maxWidth: '800px' }}>
//         {intro}
//       </p>

//       <div className="grid mt-md grid--single-column" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//         {sections.map((section, index) => (
//           <section 
//             key={`${title}-${index}`} 
//             className="card card--accent" 
//             style={{ padding: '24px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
//           >
//             <h3 className="section-subheading" style={{ fontSize: '20px', fontWeight: '700', color: '#2b6cb0', margin: '0 0 12px 0' }}>
//               {section.title}
//             </h3>
            
//             {Array.isArray(section.body) ? (
//               <div style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '15px' }}>
//                 {section.body.map((paragraph, paragraphIndex) => (
//                   <p key={`${section.title}-${paragraphIndex}`} style={{ marginBottom: '12px' }}>{paragraph}</p>
//                 ))}
//               </div>
//             ) : (
//               <p style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '15px', margin: '0 0 12px 0' }}>{section.body}</p>
//             )}

//             {section.bullets && (
//               <ul style={{ paddingLeft: '20px', color: '#4a5568', lineHeight: '1.6', fontSize: '15px', marginTop: '8px' }}>
//                 {section.bullets.map((bullet, bulletIndex) => (
//                   <li key={`${section.title}-bullet-${bulletIndex}`} style={{ marginBottom: '6px' }}>{bullet}</li>
//                 ))}
//               </ul>
//             )}

//             {section.pdf_file && (
//               <div style={{ marginTop: '20px' }}>
//                 <button 
//                   onClick={() => section.id ? handleDownloadPDF(section.id, section.title) : alert("File identifier unavailable.")}
//                   style={{ fontSize: '13px', fontWeight: '600', backgroundColor: '#edf2f7', color: '#2d3748', padding: '8px 14px', borderRadius: '6px', border: '1px solid #cbd5e0', cursor: 'pointer' }}
//                 >
//                   📥 Download Version Asset
//                 </button>
//               </div>
//             )}
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function ConstitutionPage() {
//   const [sections, setSections] = useState<ConstitutionSection[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   useEffect(() => {
//     const token = localStorage.getItem('cl_token');
//     if (token) setAuthToken(token);

//     async function loadConstitutionsFromDB() {
//       try {
//         setLoading(true);
//         setErrorMessage(null);
//         const res = await api.get('http://127.0.0.1:8000/api/constitution-versions/');
        
//         if (Array.isArray(res.data)) {
//           const formattedData = res.data.map((item: any) => ({
//             id: item.id,
//             title: item.title,
//             body: typeof item.body === 'string' ? item.body.replace(/\\n/g, '\n') : item.body,
//             bullets: Array.isArray(item.bullets) ? item.bullets : [],
//             // FIXED: Standardized field parameter mapping layout 
//             pdf_file: item.download_url || item.pdf_file || null
//           }));
//           setSections(formattedData);
//         } else {
//           setErrorMessage("Received invalid structural response payload from the data repository.");
//         }
//       } catch (e: any) {
//         console.error("Database collection transmission failure:", e);
//         setErrorMessage(e.response?.data?.message || "Unable to securely establish a connection with the database repository server.");
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadConstitutionsFromDB();
//   }, []);

//   // Secure Live Stream Document Download Translation Handler
//   const handleDownloadPDF = async (id: number, title: string) => {
//     try {
//       // FIXED: Pointed your file stream reader directly to your active Django backend host route layout address
//       const response = await api.get(`http://127.0.0{id}/`, {
//         responseType: 'blob', 
//       });

//       const blobUrl = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
//       const link = document.createElement('a');
//       link.href = blobUrl;

//       const cleanFileName = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
//       link.setAttribute('download', `${cleanFileName}.pdf`);

//       document.body.appendChild(link);
//       link.click();

//       link.parentNode?.removeChild(link);
//       window.URL.revokeObjectURL(blobUrl);
//     } catch (error) {
//       console.error("PDF download transfer alert:", error);
//       alert("Failed to download the document asset. Please ensure your backend endpoint supports the file action.");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="container mt-md" style={{ paddingBottom: '60px' }}>
//         <div style={{ textAlign: 'center', padding: '40px', color: '#718096', border: '1px dashed #cbd5e0', borderRadius: '8px' }}>
//           Querying index directories from backend relational database...
//         </div>
//       </div>
//     );
//   }

//   if (errorMessage) {
//     return (
//       <div className="container mt-md" style={{ paddingBottom: '60px' }}>
//         <div style={{ backgroundColor: '#fff5f5', color: '#c53030', padding: '16px', borderRadius: '6px', border: '1px solid #fed7d7', fontWeight: '500' }}>
//           ⚠️ Connection Alert: {errorMessage}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       {sections.length === 0 ? (
//         <div className="container mt-md" style={{ paddingBottom: '60px' }}>
//           <div style={{ textAlign: 'center', padding: '40px', color: '#718096', border: '1px dashed #cbd5e0', borderRadius: '8px' }}>
//             No current document records reside inside this database partition collection index.
//           </div>
//         </div>
//       ) : (
//         <ContentPage
//           title="Constitution & Bylaws"
//           intro="Reviewing institutional governance charters, administrative code laws, and operational compliance frameworks for the Canon Law Guild structure."
//           sections={sections}
//           handleDownloadPDF={handleDownloadPDF}
//         />
//       )}
//     </>
//   );
// }




import React, { useState, useEffect } from 'react';
import api, { setAuthToken } from '../api/api'; 

// 1. Structural layout definitions for our data content cards
type ConstitutionSection = {
  id?: number; 
  title: string;
  body: string | string[];
  bullets?: string[];
  pdf_file?: string; 
};

type ConstitutionPageProps = {
  title: string;
  intro: string;
  sections: ConstitutionSection[];
};

// 2. Generic structural layout component
function ContentPage({ title, intro, sections }: ConstitutionPageProps) {
  return (
    <div className="container mt-md" style={{ paddingBottom: '60px' }}>
      <div className="section__heading" style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', marginBottom: '24px' }}>
        <h2>{title}</h2>
      </div>
      <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '30px', maxWidth: '800px' }}>
        {intro}
      </p>

      <div className="grid mt-md grid--single-column" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {sections.map((section, index) => (
          <section 
            key={`${title}-${index}`} 
            className="card card--accent" 
            style={{ padding: '24px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
          >
            <h3 className="section-subheading" style={{ fontSize: '20px', fontWeight: '700', color: '#2b6cb0', margin: '0 0 12px 0' }}>
              {section.title}
            </h3>
            
            {Array.isArray(section.body) ? (
              <div style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '15px' }}>
                {section.body.map((paragraph, paragraphIndex) => (
                  <p key={`${section.title}-${paragraphIndex}`} style={{ marginBottom: '12px' }}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <p style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '15px', margin: '0 0 12px 0' }}>{section.body}</p>
            )}

            {section.bullets && (
              <ul style={{ paddingLeft: '20px', color: '#4a5568', lineHeight: '1.6', fontSize: '15px', marginTop: '8px' }}>
                {section.bullets.map((bullet, bulletIndex) => (
                  <li key={`${section.title}-bullet-${bulletIndex}`} style={{ marginBottom: '6px' }}>{bullet}</li>
                ))}
              </ul>
            )}

            {section.pdf_file && (
              <div style={{ marginTop: '20px' }}>
                {/* FIXED: Replaced complex broken fetch trigger with a native link pointing to your Django uploaded media file url */}
                <a 
                  href={section.pdf_file}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'inline-block',
                    fontSize: '13px', 
                    fontWeight: '600', 
                    backgroundColor: '#edf2f7', 
                    color: '#2d3748', 
                    padding: '8px 14px', 
                    borderRadius: '6px', 
                    border: '1px solid #cbd5e0', 
                    textDecoration: 'none',
                    cursor: 'pointer' 
                  }}
                >
                  📥 Download Version Asset
                </a>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

// 3. Exported view component for your Constitution page path
export default function ConstitutionPage() {
  const [sections, setSections] = useState<ConstitutionSection[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('cl_token');
    if (token) setAuthToken(token);

    async function loadConstitutionsFromDB() {
      try {
        setLoading(true);
        setErrorMessage(null);
        // const res = await api.get('http://127.0.0.1:8000/api/constitution-versions/');
        const res = await api.get('constitution-versions/');

        
        if (Array.isArray(res.data)) {
          const formattedData = res.data.map((item: any) => ({
            id: item.id,
            title: item.title,
            body: typeof item.body === 'string' ? item.body.replace(/\\n/g, '\n') : item.body,
            bullets: Array.isArray(item.bullets) ? item.bullets : [],
            // Maps your file field string array property
            pdf_file: item.download_url || item.pdf_file || null
          }));
          setSections(formattedData);
        } else {
          setErrorMessage("Received invalid structural response payload from the data repository.");
        }
      } catch (e: any) {
        console.error("PDF download transfer alert:", Error);
  alert("Failed to download the document asset. Please ensure your backend endpoint supports the file action.");
      } finally {
        setLoading(false);
      }
    }
    loadConstitutionsFromDB();
  }, []);

  if (loading) {
    return (
      <div className="container mt-md" style={{ paddingBottom: '60px' }}>
        <div style={{ textAlign: 'center', padding: '40px', color: '#718096', border: '1px dashed #cbd5e0', borderRadius: '8px' }}>
          Querying index directories from backend relational database...
        </div>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="container mt-md" style={{ paddingBottom: '60px' }}>
        <div style={{ backgroundColor: '#fff5f5', color: '#c53030', padding: '16px', borderRadius: '6px', border: '1px solid #fed7d7', fontWeight: '500' }}>
          ⚠️ Connection Alert: {errorMessage}
        </div>
      </div>
    );
  }

  return (
    <>
      {sections.length === 0 ? (
        <div className="container mt-md" style={{ paddingBottom: '60px' }}>
          <div style={{ textAlign: 'center', padding: '40px', color: '#718096', border: '1px dashed #cbd5e0', borderRadius: '8px' }}>
            No current document records reside inside this database partition collection index.
          </div>
        </div>
      ) : (
        <ContentPage
          title="Constitution & Bylaws"
          intro="Reviewing institutional governance charters, administrative code laws, and operational compliance frameworks for the Canon Law Guild structure."
          sections={sections}
        />
      )}
    </>
  );
}
