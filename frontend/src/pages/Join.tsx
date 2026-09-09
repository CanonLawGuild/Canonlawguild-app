import React from 'react'
import { Link } from 'react-router-dom'

export default function Join(){
  return (
    <div className="container mt-md join-page">
      <div className="breadcrumbs"></div>
      <div className="join-banner">
        <div className="join-banner-copy">
          <p>Membership</p>
          <h2>Join the Sodality</h2>
        </div>
      </div>
      
      <form className="join-form card">
        <div className="form-row">
          <div>
            <h4>Your details</h4>
            <p>Please complete the following fields.</p>
          </div>
        </div>

        <div className="row-two">
          <div className="form-group">
            <label className="form-label">First name <span className="text-muted">*</span></label>
            <input className="input-field" name="first_name" required placeholder="First name" />
          </div>
          <div className="form-group">
            <label className="form-label">Last name <span className="text-muted">*</span></label>
            <input className="input-field" name="last_name" required placeholder="Last name" />
          </div>
        </div>

        <div className="row-two">
          <div className="form-group">
            <label className="form-label">Date of birth <span className="text-muted">*</span></label>
            <input type="date" className="input-field" name="dob" required />
          </div>
          <div className="form-group full-width">
            <label className="form-label">Email address <span className="text-muted">*</span></label>
            <input type="email" className="input-field" name="email" required placeholder="Email address" />
          </div>
        </div>

        <div className="row-two">
          <div className="form-group">
            <label className="form-label">Address line one <span className="text-muted">*</span></label>
            <input className="input-field" name="address1" required placeholder="Address line one" />
          </div>
          <div className="form-group">
            <label className="form-label">Address line two</label>
            <input className="input-field" name="address2" placeholder="Address line two" />
          </div>
        </div>

        <div className="row-two">
          <div className="form-group">
            <label className="form-label">Address line three</label>
            <input className="input-field" name="address3" placeholder="Address line three" />
          </div>
          <div className="form-group">
            <label className="form-label">City <span className="text-muted">*</span></label>
            <input className="input-field" name="city" required placeholder="City" />
          </div>
        </div>

        <div className="row-two">
          <div className="form-group">
            <label className="form-label">Postcode</label>
            <input className="input-field" name="postcode" placeholder="Postcode" />
          </div>
          <div className="form-group">
            <label className="form-label">Country <span className="text-muted">*</span></label>
            <select className="input-field" name="country" required>
              <option value="">Select a country</option>
              <option>Uganda</option>
              <option>Kenya</option>
              <option>Tanzania</option>
              <option>Rwanda</option>
              <option>United Kingdom</option>
              <option>United States of America</option>
              <option>Australia</option>
              <option>Canada</option>
              <option>Germany</option>
              <option>France</option>
              <option>India</option>
              <option>Italy</option>
              <option>Spain</option>
              <option>Netherlands</option>
              <option>Sweden</option>
              <option>Norway</option>
              <option>Denmark</option>
              <option>Finland</option>
              <option>Japan</option>
              <option>China</option>
              <option>New Zealand</option>
            </select>
          </div>
        </div>

        <div className="row-two">
          <div className="form-group full-width">
            <label className="form-label">Job title</label>
            <input className="input-field" name="job_title" placeholder="Job title" />
            <label className="password-set">Set Password</label>
            <input className="password-input" name="password" placeholder="password" />
            <label className="password-set">Confirm Password</label>
            <input className="password-input" name="confirm password" placeholder="confirm password" />
          </div>
        </div>

        <div className="row-two">
          <div className="form-group full-width">
            <label className="form-label">If you are a new member of the Society, what attracted you to join the Society?</label>
            <textarea className="input-field textarea-field" name="join_reason" rows={5} placeholder="Tell us what attracted you..." />
          </div>
        </div>

        <section className="card consent-box">
          <h4>Contact consent</h4>
          <p>We would like to use your contact details to communicate with you with news and information about Canon Law Sodality and ways to support us.</p>
          <p>Please choose how you'd like us to contact you:</p>
          <div className="consent-options">
            <label className="consent-item"><input type="checkbox" name="consent_email" /> Email</label>
            <label className="consent-item"><input type="checkbox" name="consent_post" /> Post</label>
          </div>
        </section>

        <div className="join-actions">
          <button className="submit-pink" type="submit">
            <span className="lock"></span>
            <span>SUBMIT</span>
          </button>
        </div>
        <p className="muted login-cta">
          Already a member? <Link to="/login" className="login-redirect">Login here.</Link>
        </p>
      </form>
    </div>
  )
}
