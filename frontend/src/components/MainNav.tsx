import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

// 1. Cleaner, stateless NavItem child component
interface NavItemProps {
  label: string;
  menuId: string;
  activeMenu: string | null;
  setActiveMenu: (id: string | null) => void;
  children?: React.ReactNode;
}

function NavItem({ label, menuId, activeMenu, setActiveMenu, children }: NavItemProps) {
  const isOpen = activeMenu === menuId;

  return (
    <div
      className="nav-item"
      onMouseEnter={() => setActiveMenu(menuId)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <span className="nav-item-label">{label}</span>
      {children && isOpen && (
        <div className="dropdown">
          {React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) return child;
            return React.cloneElement(child as React.ReactElement, {
              onClick: () => setActiveMenu(null), // Close menu cleanly on click
            });
          })}
        </div>
      )}
    </div>
  )
}

// 2. Main Navigation Shell with Global Open Control
export default function MainNav() {
  // Track exactly which menu is active (e.g., 'about', 'history', or null)
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="main-nav">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
        <div className="brand brand-shell">
          <Link to="/" className="brand-link">
            <img
              src="/images/logo.png"
              alt="Canon Law Guild logo"
              className="brand-logo"
            />
            <div className="brand-title-stack">
              <div className="brand-title">Canon Law</div>
              <div className="brand-title"> Guild</div>
            </div>
          </Link>
        </div>

        <div className="nav-items">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>HOME</NavLink>

          <NavItem 
            label="ABOUT ▾" 
            menuId="about" 
            activeMenu={activeMenu} 
            setActiveMenu={setActiveMenu}
          >
            <NavLink to="/about/background">Background</NavLink>
            <NavLink to="/about/Constitution">Constitution</NavLink>
            <NavLink to="/about/founder">Founder</NavLink>
            <NavLink to="/about/leadership-structure">Leadership Structure</NavLink>
            <NavLink to="/about/doctrinal-statement">Doctrinal Statement</NavLink>
            <NavLink to="/about/inspirational-scriptures">Inspirational Scriptures</NavLink>
            <NavLink to="/about/contact-founder">Contact Founder</NavLink>
          </NavItem>
          
          <NavItem 
            label="HISTORY & ORIGIN ▾" 
            menuId="history" 
            activeMenu={activeMenu} 
            setActiveMenu={setActiveMenu}
          >
            <NavLink to="/history/canon-law-theology">Canon Law Theology</NavLink>
            <NavLink to="/history/history-of-canon-law">History of Canon Law</NavLink>
            <NavLink to="/history/principles-of-canon-law">Principles of Canon Law</NavLink>
          </NavItem>
          
          <NavItem 
            label="WHAT WE DO ▾" 
            menuId="what-we-do" 
            activeMenu={activeMenu} 
            setActiveMenu={setActiveMenu}
          >
            <NavLink to="/what-we-do/areas-of-focus">Areas of Focus</NavLink>
            <NavLink to="/what-we-do/publications">Publications</NavLink>
            <NavLink to="/what-we-do/decided-cases">Decided Cases</NavLink>
            <NavLink to="/what-we-do/advisory-opinions">Advisory Opinions</NavLink>
          </NavItem>
          
          <NavItem 
            label="TRAININGS & CONFERENCES ▾" 
            menuId="trainings" 
            activeMenu={activeMenu} 
            setActiveMenu={setActiveMenu}
          >
            <NavLink to="/trainings/annual-agm">Annual AGM</NavLink>
            <NavLink to="/trainings/workshops">Workshops</NavLink>
            <NavLink to="/trainings/conferences">Conferences</NavLink>
          </NavItem>
          
          <NavLink to="/news-events" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>NEWS & EVENTS</NavLink>
        </div>
      </div>

      {/* Component Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .main-nav {
          background-color: #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.08);
          padding: 12px 0;
          position: relative;
          z-index: 1000;
        }
        .brand-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #333;
        }
        .brand-logo {
          height: 40px;
          margin-right: 10px;
        }
        .brand-title {
          font-weight: bold;
          font-size: 0.9rem;
          line-height: 1.2;
        }
        
        .nav-items {
          display: flex;
          align-items: center;
          flex-direction: row;
          white-space: nowrap; 
          gap: 5px;
        }
        
        .nav-item {
          position: relative; /* CRITICAL: Ensures sub-menus reference their exact parent button position */
          display: inline-block;
        }
        
        .nav-link, .nav-item-label {
          color: #555555;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 8px 2px;
          display: inline-block;
          user-select: none;
          transition: color 0.2s ease;
        }
        .nav-link:hover, .nav-item-label:hover {
          color: #a3704c;
        }

        .nav-link.active, .nav-item:has(a.active) .nav-item-label {
          color: #a3704c !important;
          border-bottom: 2px solid #a3704c;
        }

        /* Fixed Popover Dropdown Styling */
        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #ffffff;
          box-shadow: 0 6px 16px rgba(0,0,0,0.12);
          border: 1px solid #eeeeee;
          border-radius: 4px;
          padding: 8px 0;
          min-width: 240px;
          display: flex;
          flex-direction: column;
        }

        .dropdown::before {
          content: '';
          position: absolute;
          top: -15px; /* Reaches upward to overlap the parent label */
          left: 0;
          right: 0;
          height: 15px; /* Gives the cursor a safe path to slide down */
          background: transparent; /* Remains completely invisible to the user */
        }
        
        .dropdown a {
          color: #444444;
          text-decoration: none;
          padding: 10px 16px;
          font-size: 0.85rem;
          font-weight: 500;
          text-align: left;
          transition: background-color 0.2s ease, color 0.2s ease;

        }

        
        .dropdown a:hover {
          background-color: #f8f5f0;
          color: #a3704c;
        }

        .dropdown a.active {
          background-color: #f0e6df !important;
          color: #a3704c !important;
          font-weight: 700;
        }
      `}} />
    </nav>
  )
}
