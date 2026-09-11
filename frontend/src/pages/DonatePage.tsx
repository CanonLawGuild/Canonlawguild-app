import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DonatePage() {
  const [amount, setAmount] = useState<string>('50');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isRecurring, setIsRecurring] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string>('card');

  const presetAmounts = ['25', '50', '100', '250', '500'];

  const handlePresetClick = (val: string) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount('');
  };

  const getFinalAmount = () => {
    return customAmount || amount;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = getFinalAmount();
    if (!finalAmount || parseFloat(finalAmount) <= 0) {
      alert('Please select or enter a valid donation amount.');
      return;
    }
    
    alert(`Redirecting to payment gateway...\nAmount: $${finalAmount}\nType: ${isRecurring ? 'Monthly Recurring' : 'One-Time'}\nMethod: ${paymentMethod}`);
  };

  return (
    <div className="container mt-md" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <div className="section__heading">
        <h2>Donate</h2>
      </div>
      <p className="text-muted mt-sm" style={{ maxWidth: '600px' }}>
        Support the Canon Law Guild in its work of scholarship, education, and service.
      </p>

      {/* Centered grid container */}
      <div className="grid mt-md" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        {/* Added inline style here to overwrite the red left border decoration */}
        <section className="card" style={{ borderLeft: 'none', paddingLeft: '2rem', maxWidth: '500px', width: '100%', textAlign: 'left' }}>
          <p>
            Your generosity directly funds academic publications, public education initiatives, annual conferences, and pastoral outreach that deepen the understanding of canon law.
          </p>

          <form onSubmit={handleSubmit} className="mt-md">
            
            {/* Frequency Toggle */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <button 
                type="button" 
                className={`btn ${!isRecurring ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setIsRecurring(false)}
                style={{ flex: 1 }}
              >
                One-Time
              </button>
              <button 
                type="button" 
                className={`btn ${isRecurring ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setIsRecurring(true)}
                style={{ flex: 1 }}
              >
                Monthly Gift
              </button>
            </div>

            {/* Donation Presets Grid */}
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Select Amount</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
              {presetAmounts.map((val) => (
                <button
                  key={val}
                  type="button"
                  className={`btn ${amount === val ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => handlePresetClick(val)}
                  style={{ padding: '0.5rem 0' }}
                >
                  ${val}
                </button>
              ))}
            </div>

            {/* Custom Amount Input */}
            <div style={{ marginBottom: '1.5rem' }}>
              <input
                type="number"
                placeholder="Other Amount ($)"
                value={customAmount}
                onChange={handleCustomChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
                min="1"
              />
            </div>

            {/* Payment Options Selector */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Payment Method</label>
              <select 
                value={paymentMethod} 
                onChange={(e) => setPaymentMethod(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  fontSize: '1rem',
                  backgroundColor: '#fff',
                  boxSizing: 'border-box'
                }}
              >
                <option value="card">Credit / Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank">Direct Bank Transfer (ACH)</option>
              </select>
            </div>

            {/* Final Submission Action */}
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.75rem' }}>
              Donate ${getFinalAmount() || '0'} {isRecurring ? '/ Month' : ''}
            </button>
          </form>

          {/* Offline/Alternative Options */}
          <div className="mt-md" style={{ borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>
              Prefer to contribute offline? Please reach out to the Guild leadership team through our{' '}
              <Link to="/contact" style={{ color: 'inherit', textDecoration: 'underline' }}>contact page</Link> or through official church channels.
            </p>
          </div>

        </section>
      </div>
    </div>
  );
}
