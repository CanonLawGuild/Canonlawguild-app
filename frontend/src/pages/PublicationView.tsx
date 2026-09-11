import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/api';

type FullPublication = {
  id: number;
  title: string;
  slug: string;
  published_at: string | null;
  author?: string;
  category?: string;
  content?: string; // Full text body column variable from the database schema rows
};

export default function PublicationView() {
  const { id } = useParams<{ id: string }>(); // Capture database primary key ID variable
  const [doc, setDoc] = useState<FullPublication | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFullText() {
      try {
        setLoading(true);
        setError(null);
        // Connects directly using ID parameter mapping hooks
        const res = await api.get(`http://127.0.0.1:8000/api/publications/${id}/`);
        setDoc(res.data);
      } catch (err) {
        console.error("Failed to load publication text rows:", err);
        setError("The requested publication manuscript could not be found inside the active database registry index partition.");
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchFullText();
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-md" style={styles.loadingContainer}>
        Loading dynamic script files from database...
      </div>
    );
  }
  
  if (error || !doc) {
    return (
      <div className="container mt-md" style={styles.errorContainer}>
        <div style={styles.errorText}>⚠️ Error: {error}</div>
        <Link to="/what-we-do/publications" className="btn btn-secondary">← Return to Archive</Link>
      </div>
    );
  }

  return (
    <div className="container mt-md" style={styles.pageContainer}>
      <div style={styles.backLinkWrapper}>
        <Link to="/what-we-do/publications" style={styles.backLink}>
          ← Back to Publications Archive
        </Link>
      </div>

      <header style={styles.header}>
        <span style={styles.categoryBadge}>
          {doc.category || 'General Document'}
        </span>
        <h1 style={styles.title}>
          {doc.title}
        </h1>
        <div style={styles.metaLine}>
          Scholar: {doc.author || 'Anonymous'} | Registered: {doc.published_at ? new Date(doc.published_at).toLocaleDateString() : 'Draft'}
        </div>
      </header>

      {/* Main Text Area Panel */}
      <article style={styles.contentBody}>
        {doc.content || "No text content body body payload column exists inside the database index data framework for this record row."}
      </article>
    </div>
  );
}

// Visual design theme layout objects
const styles: { [key: string]: React.CSSProperties } = {
  loadingContainer: {
    textAlign: 'center',
    padding: '50px'
  },
  errorContainer: {
    textAlign: 'center',
    padding: '40px'
  },
  errorText: {
    color: '#c53030',
    marginBottom: '20px',
    fontWeight: 'bold'
  },
  pageContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    paddingBottom: '80px'
  },
  backLinkWrapper: {
    marginBottom: '24px'
  },
  backLink: {
    color: '#3182ce',
    textDecoration: 'none',
    fontWeight: '600'
  },
  header: {
    borderBottom: '2px solid #e2e8f0',
    paddingBottom: '20px',
    marginBottom: '30px'
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
  title: {
    fontSize: '2.5rem',
    color: '#1a202c',
    marginTop: '12px',
    marginBottom: '8px'
  },
  metaLine: {
    color: '#4a5568',
    fontStyle: 'italic'
  },
  contentBody: {
    fontSize: '1.15rem',
    lineHeight: '1.8',
    color: '#2d3748',
    whiteSpace: 'pre-line',
    textAlign: 'justify'
  }
};
