// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function ContactPage(){
//   return (
//     <div className="container mt-md">
//       <div className="section__heading">
//         <h2>Contact</h2>
//       </div>
//       <p className="text-muted mt-sm">Reach out for enquiries, support, or to connect with the Canon Law Sodality leadership.</p>

//       <div className="grid mt-md grid--single-column">
//         <section className="card card--accent">
//           <p>If you have questions about membership, publications, conferences, or general support, please get in touch.</p>
//           <ul>
//             <li>General enquiries</li>
//             <li>Membership and participation</li>
//             <li>Donations and sponsorship</li>
//             <li>Publications and events</li>
//           </ul>
//           <Link to="/" className="btn btn-outline mt-sm">Back to Home</Link>
//         </section>
//       </div>
//     </div>
//   )
// }





import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactPage(){
  return (
    <div className="container mt-md">
      <div className="section__heading">
        <h2>Contact</h2>
      </div>
      <p className="text-muted mt-sm">Reach out for enquiries, support, or to connect with the Canon Law Sodality leadership.</p>
      
      <div className="grid mt-md grid--single-column">
        {/* Original Welcome Card */}
        <section className="card card--accent">
          <p>If you have questions about membership, publications, conferences, or general support, please get in touch.</p>
          <ul>
            <li>General enquiries</li>
            <li>Membership and participation</li>
            <li>Donations and sponsorship</li>
            <li>Publications and events</li>
          </ul>
          <Link to="/" className="btn btn-outline mt-sm">Back to Home</Link>
        </section>

        {/* Contact Details Card */}
        <section className="card contact-details-card">
          <h3>Get In Touch</h3>
          <p className="text-muted">Our leadership team is available to assist you with your questions.</p>
          
          <ul className="contact-list">
            <li>
              <span className="contact-icon">📧</span>
              <div>
                <strong>Email</strong>
                <p> jeremiahkeeya@gmail.com</p>
              </div>
            </li>
            <li>
              <span className="contact-icon">📞</span>
              <div>
                <strong>Phone</strong>
                <p>+256 772 748739</p>
              </div>
            </li>
            <li>
              <span className="contact-icon">🕒</span>
              <div>
                <strong>Office Hours</strong>
                <p>Monday – Friday, 9:00 AM – 5:00 PM EST</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Mailing & Location Card */}
        <section className="card address-card">
          <h3>Our Address</h3>
          
          <div className="address-grid">
            <div className="address-block">
              <h4>📬 Mailing Address</h4>
              <p className="text-muted">
                Canon Law Guild<br />
                P.O. Box 42XX<br />
                Kampala, UG. 
              </p>
            </div>

            <div className="address-block">
              <h4>📍 Physical Location</h4>
              <p className="text-muted">
                Catholic University Campus<br />
                Namirembe Road<br />
                Kampala, UG.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Component Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .contact-details-card, .address-card {
          margin-top: 24px;
        }
        .contact-list {
          list-style: none;
          padding: 0;
          margin: 16px 0 0 0;
        }
        .contact-list li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        .contact-list li:last-child {
          margin-bottom: 0;
        }
        .contact-icon {
          font-size: 1.2rem;
          margin-right: 12px;
          margin-top: 2px;
        }
        .contact-list strong {
          display: block;
          color: #333;
        }
        .contact-list p {
          margin: 2px 0 0 0;
          color: #666;
        }
        .address-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 16px;
        }
        .address-block h4 {
          margin: 0 0 4px 0;
          font-size: 1rem;
          color: #333;
        }
        .address-block p {
          margin: 0;
          line-height: 1.5;
        }
        @media (min-width: 600px) {
          .address-grid {
            flex-direction: row;
            justify-content: space-between;
          }
          .address-block {
            flex: 1;
          }
        }
      `}} />
    </div>
  )
}
