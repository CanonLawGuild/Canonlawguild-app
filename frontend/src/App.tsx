import React from 'react'
import TopUtilityBar from './components/TopUtilityBar'
import MainNav from './components/MainNav'
import Hero from './components/Hero'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import PublicationsList from './pages/PublicationsList'
import Join from './pages/Join'
import NewsEventsPage from './pages/NewsEventsPage'
import {
  BackgroundPage,
  FounderPage,
  LeadershipStructurePage,
  DoctrinalStatementPage,
  CanonLawTheologyPage,
  HistoryOfCanonLawPage,
  DecidedCasesPage,

} from './pages/SubmenuPages'

import { InspirationalScripturesPage, ContactFounderPage } from './pages/AboutAdditionalPages'
import { PrinciplesOfCanonLawPage } from './pages/HistoryAdditionalPages'
import { AreasOfFocusPage, AdvisoryOpinionsPage } from './pages/WhatWeDoAdditionalPages'
import { ConferencesPage, AnnualAGMPage, WorkshopsPage } from './pages/TrainingsAdditionalPages'
import DonatePage from './pages/DonatePage'
import ContactPage from './pages/ContactPage'
import MembershipPage from './pages/MembershipPage'
import PublicationView from './pages/PublicationView'
// import NewsEventDetailPage from './pages/NewsEventDetailPage'

export default function App(){
  return (
    <BrowserRouter>
      <TopUtilityBar />
      <MainNav />
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/publications" element={<PublicationsList />} />
          <Route path="/membership/join" element={<Join />} />
          <Route path="/news-events" element={<NewsEventsPage />} />
          <Route path="/about/background" element={<BackgroundPage />} />
          <Route path="/about/founder" element={<FounderPage />} />
          <Route path="/about/leadership-structure" element={<LeadershipStructurePage />} />
          <Route path="/about/doctrinal-statement" element={<DoctrinalStatementPage />} />
          <Route path="/about/inspirational-scriptures" element={<InspirationalScripturesPage />} />
          <Route path="/about/contact-founder" element={<ContactFounderPage />} />
          <Route path="/history/canon-law-theology" element={<CanonLawTheologyPage />} />
          <Route path="/history/history-of-canon-law" element={<HistoryOfCanonLawPage />} />
          <Route path="/history/principles-of-canon-law" element={<PrinciplesOfCanonLawPage />} />
          <Route path="/what-we-do/areas-of-focus" element={<AreasOfFocusPage />} />
          <Route path="/what-we-do/publications" element={<PublicationsList />} />
          <Route path="/what-we-do/decided-cases" element={<DecidedCasesPage />} />
          <Route path="/what-we-do/advisory-opinions" element={<AdvisoryOpinionsPage />} />
          <Route path="/trainings/annual-agm" element={<AnnualAGMPage />} />
          <Route path="/trainings/workshops" element={<WorkshopsPage />} />
          <Route path="/trainings/conferences" element={<ConferencesPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/what-we-do/publications/:id" element={<PublicationView />} />
          
          {/* <Route path="/news-events/:id" element={<NewsEventDetailPage />} /> */}
          
        </Routes>
      </div>

      <footer className="footer">
        <div className="container footer-content">
          <span>© Canon Law Sodality</span>
          <Link to="/news-events" className="footer-link">News & Events</Link>
        </div>
      </footer>
    </BrowserRouter>
  )
}
