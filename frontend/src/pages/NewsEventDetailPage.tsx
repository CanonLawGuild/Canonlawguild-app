import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/api';

type NewsEvent = {
  id: number;
  title: string;
  published_at: string | null;
  category?: string;
  content?: string;
  event_date?: string | null;
  location?: string;
};

export default function NewsEventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<NewsEvent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDetailFromDB() {
      try {
        setLoading(true);
        setError(null);
        const res = await api.get(`/api/events/${id}/`);
        setItem(res.data);
      } catch (e: any) {
        console.error("Detail transmission failure:", e);
        setError(e.response?.data?.message || "Unable to retrieve this record from the database.");
      } finally {
        setLoading(false);
      }
    }
    loadDetailFromDB();
  }, [id]);

  if (loading) return <div style={{ padding: '40px', textAlign: 'center', color: '#718096' }}>Loading dynamic record content...</div>;
  if (error || !item) return <div style={{ padding: '40px', color: '#c53030', fontWeight: '500' }}>⚠️ Error: {error || "Record not found."}</div>;

  return (
    <div className="container mt-md" style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '800px', paddingBottom: '60px' }}>
      <Link to="/news-events" style={{ color: '#2b6cb0', textDecoration: 'none', fontWeight: '500', display: 'inline-block', marginBottom: '20px' }}>
        ← Back to News & Events
      </Link>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <span style={{ backgroundColor: '#edf2f7', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>
          {item.category || 'Notification'}
        </span>
        <span style={{ color: '#718096', fontSize: '0.85rem' }}>
          Published: {item.published_at ? new Date(item.published_at).toLocaleDateString() : 'Draft'}
        </span>
      </div>

      <h1 style={{ fontSize: '2.2rem', marginBottom: '20px', color: '#1a202c' }}>{item.title}</h1>

      {item.category === 'Event' && item.event_date && (
        <div style={{ backgroundColor: '#f7fafc', padding: '12px', borderRadius: '6px', marginBottom: '20px', fontSize: '0.95rem' }}>
          📅 **Date:** {new Date(item.event_date).toLocaleString()}<br />
          {item.location && <>📍 **Location:** {item.location}</>}
        </div>
      )}

      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#2d3748', whiteSpace: 'pre-wrap' }}>
        {item.content || 'No text summary body supplied.'}
      </p>
    </div>
  );
}
