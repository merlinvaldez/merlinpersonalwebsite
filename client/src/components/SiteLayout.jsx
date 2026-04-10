import { NavLink, Outlet } from 'react-router'

const navigationLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Me', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="site-nav" aria-label="Primary">
          {navigationLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              end={to === '/'}
              to={to}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        Copyright 2025 Merlin Valdez and Fahami Valdez Learning Services LLC.
        All rights reserved.
      </footer>
    </div>
  )
}

export default SiteLayout
