import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api, { setAuthToken } from '../api/api';

// 1. Matches your explicit Django Admin fields precisely
type EventItem = {
  id: number;
  title: string;
  description: string;
  published_at: string | null;      // Date Posted
  start_date: string | null;        // Start Date
  end_date: string | null;          // End Date
  category?: 'News' | 'Event' | 'Announcement' | string;
};

export default function NewsEventsPage() {
  const [items, setItems] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<string>('All');

  useEffect(() => {
    const token = localStorage.getItem('cl_token');
    if (token) setAuthToken(token);

    async function loadEventsFromDB() {
      try {
        setLoading(true);
        setErrorMessage(null);
        
        // 2. FIXED: Correctly targets your exact singular backend database path matching your admin view
        // const res = await api.get('http://127.0.0.1:8000/api/events/');
        const res = await api.get('api/events/'); 
        
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
    loadEventsFromDB();
  }, []);

  // Filter matrix parsing title, description, and dropdown category state settings
  const filteredItems = items.filter(item => {
    const titleMatch = item.title?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
    const descMatch = item.description?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
    
    const matchesSearch = titleMatch || descMatch;
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    
    return matchesSearch && matchesTab;
  });

  // Layout helper to parse out readable Django datetime selectors cleanly
  const formatDateTime = (dateStr: string | null | undefined) => {
    if (!dateStr) return 'Not Specified';
    return new Date(dateStr).toLocaleString([], {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="container mt-md" style={{ fontFamily: 'system-ui, sans-serif', paddingBottom: '60px' }}>
      <div className="section__heading" style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', marginBottom: '24px' }}>
        <h2>News & Events</h2>
      </div>
      <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '30px', maxWidth: '800px' }}>
        Streaming institutional legal commentary and announcements direct from the Canon Law repository database.
      </p>

      {errorMessage && (
        <div style={{ backgroundColor: '#fff5f5', color: '#c53030', padding: '16px', borderRadius: '6px', border: '1px solid #fed7d7', marginBottom: '20px', fontWeight: '500' }}>
          ⚠️ Connection Alert: {errorMessage}
        </div>
      )}

      {/* Filter and Query Engine Panel */}
      <div className="filters-panel" style={styles.filterBar}>
        <div className="search-box-wrapper" style={{ flexGrow: 1 }}>
          <input 
            type="text" 
            placeholder="Search entries by title or description details..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
            disabled={!!errorMessage}
          />
        </div>
        
        {/* 3. Interactive Filtering Tabs matching your dropdown options */}
        <div className="tabs-group" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['All', 'News', 'Event', 'Announcement'].map((tab) => (
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
          <div style={styles.skeletonCard}>
            <p style={{ padding: '20px', color: '#718096', margin: 0 }}>Querying database index collections...</p>
          </div>
        </div>
      ) : (
        <>
          {filteredItems.length === 0 && !errorMessage ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#718096', border: '1px dashed #cbd5e0', borderRadius: '8px' }}>
              No current news or event records.
            </div>
          ) : (
            <div className="grid mt-md" style={styles.stackGrid}>
              {filteredItems.map(item => (
                <div key={item.id} className="card" style={styles.eventCard}>
                  <div style={styles.cardHeader}>
                    <span style={{ 
                      ...styles.categoryBadge, 
                      backgroundColor: item.category === 'News' ? '#ebf8ff' : item.category === 'Announcement' ? '#e2e8f0' : '#feebc8', 
                      color: item.category === 'News' ? '#2b6cb0' : item.category === 'Announcement' ? '#4a5568' : '#c05621' 
                    }}>
                      {item.category || 'General'}
                    </span>
                    
                    {/* 4. Displays authentic Published At date record column */}
                    {item.published_at && (
                      <span className="meta" style={{ color: '#718096', fontSize: '0.85rem' }}>
                        📅 Posted: {new Date(item.published_at).toLocaleDateString()}
                      </span>
                    )}
                  </div>

                  {/* 5. Displays authentic Title column cell */}
                  <h3 className="title" style={styles.itemTitle}>{item.title}</h3>
                  
                  {/* 6. Displays dynamic Start and End Date panels */}
                  <div style={styles.dateBlock}>
                    <div>⏱️ <strong>Starts:</strong> {formatDateTime(item.start_date)}</div>
                    <div>🏁 <strong>Ends:</strong> {formatDateTime(item.end_date)}</div>
                  </div>

                  {/* 7. Displays authentic Description details row */}
                  <p style={styles.contentText}>
                    {item.description || 'No summary overview context index row field supplied inside this row cell.'}
                  </p>

                  {/* <div style={styles.actionBlock}>
                    <Link 
                      to={`/news-events/${item.id}`} 
                      style={{ ...styles.primaryLinkBtn, textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
                    >
                      Read Full Details
                    </Link>
                  </div> */}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

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
    fontSize: '1rem', 
    outline: 'none', 
    boxSizing: 'border-box' 
  },
  tabButton: { 
    padding: '8px 16px', 
    borderRadius: '6px', 
    border: 'none', 
    fontWeight: '500', 
    cursor: 'pointer', 
    transition: 'all 0.2s' 
  },
  loadingWrapper: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '16px' 
  },
  skeletonCard: { 
    backgroundColor: '#f7fafc', 
    border: '1px solid #e2e8f0', 
    borderRadius: '8px', 
    height: '80px', 
    display: 'flex', 
    alignItems: 'center' 
  },
  stackGrid: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '20px' 
  },
  eventCard: { 
    backgroundColor: '#ffffff', 
    border: '1px solid #e2e8f0', 
    borderRadius: '8px', 
    padding: '24px', 
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)', 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '12px' 
  },
  cardHeader: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  categoryBadge: { 
    padding: '4px 10px', 
    borderRadius: '4px', 
    fontSize: '0.75rem', 
    fontWeight: '700', 
    textTransform: 'uppercase' 
  },
  itemTitle: { 
    fontSize: '1.4rem', 
    color: '#1a202c', 
    margin: 0, 
    fontWeight: '600' 
  },
  dateBlock: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '4px', 
    padding: '12px 16px', 
    backgroundColor: '#f7fafc', 
    borderRadius: '6px', 
    border: '1px solid #edf2f7', 
    fontSize: '0.9rem', color: '#2d3748' },
  contentText: { 
    fontSize: '1rem', 
    color: '#4a5568', 
    lineHeight: '1.6', 
    margin: '4px 0 12px 0' 
  },
  actionBlock: { 
    display: 'flex', 
    justifyContent: 'flex-start' 
  },
  primaryLinkBtn: { 
    backgroundColor: '#1a202c', 
    color: '#ffffff', 
    padding: '10px 20px', 
    borderRadius: '6px', 
    fontWeight: '500', 
    fontSize: '0.95rem' 
  }
};
