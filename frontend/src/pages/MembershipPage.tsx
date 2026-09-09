import React, { useState } from 'react';

interface MemberTier {
  id: string;
  title: string;
  price: string;
  period: string;
  description: string;
  benefits: string[];
  isPremium?: boolean;
}

export default function MembershipPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const tiers: MemberTier[] = [
    {
      id: 'goodwill',
      title: 'Goodwill Membership',
      price: '$25',
      period: 'per year',
      description: 'A supportive tier for non-practitioners who value the mission of the society.',
      benefits: [
        'Digital-only access to our newsletters and law review updates',
        'General admission to public lectures and online webinars',
        'Regular updates on contemporary canonical issues and societal projects'
      ]
    },
    {
      id: 'annual',
      title: 'Annual Membership',
      price: '$120',
      period: 'per year',
      description: 'Our standard tier for active practitioners and professionals within church law.',
      benefits: [
        'Full access to quarterly canon law journals and opinion archives',
        'Direct invitations to our annual general assembly meetings',
        'Full voting rights in the society assembly and legislative elections',
        'Discounts on regional workshops and continuing education'
      ]
    },
    {
      id: 'life',
      title: 'Life Membership',
      price: '$1,500',
      period: 'one-time payment',
      description: 'The ultimate professional commitment to the study and preservation of Church law.',
      isPremium: true,
      benefits: [
        'Permanent waiver of all future baseline annual society dues',
        'Hardbound print editions of all society publication archives',
        'VIP seating and exclusive invitations to formal dinners at annual conferences',
        'Permanent custom inclusion inside the society registry database'
      ]
    }
  ];

  return (
    <div className="membership-container" style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.mainTitle}>Canon Law Society Membership</h1>
        <p style={styles.subtitle}>
          Welcome to the professional community of canonists, tribunal practitioners, and supporters of ecclesiastical jurisprudence.
        </p>
      </header>

      <div className="tiers-grid" style={styles.grid}>
        {tiers.map((tier) => (
          <div 
            key={tier.id} 
            style={{
              ...styles.card,
              ...(tier.isPremium ? styles.premiumCard : {}),
              ...(selectedTier === tier.id ? styles.selectedCard : {})
            }}
            onClick={() => setSelectedTier(tier.id)}
          >
            {tier.isPremium && <div style={styles.badge}>Highly Esteemed</div>}
            <h2 style={styles.tierTitle}>{tier.title}</h2>
            <p style={styles.tierDesc}>{tier.description}</p>
            
            <div style={styles.priceContainer}>
              <span style={styles.priceText}>{tier.price}</span>
              <span style={styles.periodText}> / {tier.period}</span>
            </div>

            <ul style={styles.benefitsList}>
              {tier.benefits.map((benefit, index) => (
                <li key={index} style={styles.benefitItem}>
                  <span style={styles.checkmark}>✓</span> {benefit}
                </li>
              ))}
            </ul>

            <button 
              style={{
                ...styles.button,
                ...(tier.isPremium ? styles.premiumButton : {})
              }}
              onClick={(e) => {
                e.stopPropagation();
                alert(`Proceeding to checkout for: ${tier.title}`);
              }}
            >
              Select {tier.title.split(' ')[0]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Inline styles designed to match a clean web app palette
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    color: '#333'
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px'
  },
  mainTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1a202c',
    marginBottom: '16px'
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#4a5568',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    alignItems: 'start'
  },
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '30px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
  },
  premiumCard: {
    borderColor: '#d69e2e',
    boxShadow: '0 10px 15px -3px rgba(214, 158, 46, 0.1), 0 4px 6px -2px rgba(214, 158, 46, 0.05)'
  },
  selectedCard: {
    borderColor: '#3182ce',
    borderWidth: '2px'
  },
  badge: {
    position: 'absolute',
    top: '-12px',
    right: '20px',
    backgroundColor: '#d69e2e',
    color: '#fff',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    padding: '4px 12px',
    borderRadius: '9999px',
    textTransform: 'uppercase'
  },
  tierTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#2d3748',
    marginTop: '0',
    marginBottom: '10px'
  },
  tierDesc: {
    fontSize: '0.95rem',
    color: '#718096',
    lineHeight: '1.5',
    marginBottom: '20px',
    minHeight: '45px'
  },
  priceContainer: {
    marginBottom: '25px',
    borderBottom: '1px solid #edf2f7',
    paddingBottom: '20px'
  },
  priceText: {
    fontSize: '2.25rem',
    fontWeight: '700',
    color: '#1a202c'
  },
  periodText: {
    color: '#718096',
    fontSize: '1rem'
  },
  benefitsList: {
    listStyle: 'none',
    padding: '0',
    margin: '0 0 30px 0',
    flexGrow: 1
  },
  benefitItem: {
    fontSize: '0.95rem',
    color: '#4a5568',
    marginBottom: '12px',
    lineHeight: '1.4',
    display: 'flex',
    alignItems: 'flex-start'
  },
  checkmark: {
    color: '#38a169',
    fontWeight: 'bold',
    marginRight: '8px'
  },
  button: {
    backgroundColor: '#3182ce',
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    width: '100%',
    transition: 'background-color 0.15s ease'
  },
  premiumButton: {
    backgroundColor: '#d69e2e'
  }
};
