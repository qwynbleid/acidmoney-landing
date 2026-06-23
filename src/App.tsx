import { useEffect, useState } from 'react'
import './App.css'

/* ============================================
   NAVBAR COMPONENT
   ============================================ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="navbar" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <a href="#" className="navbar-logo" aria-label="AcidMoney Home">
            <img src="/logo.png" alt="AcidMoney Logo" />
            <span className="navbar-logo-text">Acid<span>Money</span></span>
          </a>

          <ul className="navbar-links" role="navigation" aria-label="Main navigation">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#testimonials">Reviews</a></li>
          </ul>

          <div className="navbar-cta">
            <button className="btn-primary-nav" id="nav-download-btn">Get App Free</button>
          </div>

          <button className="navbar-mobile-toggle" aria-label="Toggle menu" id="mobile-menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

/* ============================================
   PHONE MOCKUP
   ============================================ */
const EyeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const EyeOffIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
)

const HamburgerIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
)

const MonobankCardIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <path d="M7 15h.01" />
    <path d="M11 15h.01" />
  </svg>
)

const BasketIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
)

const HomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const CupIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>
)

const GasStationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 22V2h10v20" />
    <path d="M4 10h8" />
    <path d="M9 22h8" />
    <path d="M13 14h4v8" />
    <circle cx="17" cy="11" r="1" />
  </svg>
)

const HeartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
)

const DrinkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 22H6" />
    <path d="M12 22V12" />
    <path d="M5 12h14c0-3.87-3.13-7-7-7s-7 3.13-7 7z" />
  </svg>
)

const HouseholdIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <circle cx="12" cy="13" r="2" />
  </svg>
)

const WeightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 12h12" />
    <path d="M6 6h2v12H6z" />
    <path d="M16 6h2v12h-2z" />
    <path d="M3 8h3v8H3z" />
    <path d="M18 8h3v8h-3z" />
  </svg>
)

const HouseOutlineIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const TransactionsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="9" y1="9" x2="15" y2="9" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="17" x2="15" y2="17" />
  </svg>
)

const BudgetIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
  </svg>
)

const AnalyticsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
)

const WalletIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
  </svg>
)

const CoinsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="6" />
    <circle cx="16" cy="16" r="6" />
  </svg>
)

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
)

const GreyPlusIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
)

function PhoneMockup() {
  const [balanceHidden, setBalanceHidden] = useState(false)

  const accounts = [
    { title: 'monobank', icon: <MonobankCardIcon />, color: '#E85B80', primary: '$5 000', secondary: '$2 500' },
    { title: 'Savings', icon: <WalletIcon />, color: '#495BCD', primary: '$2 500', secondary: '$1 000' },
    { title: 'Cash', icon: <CoinsIcon />, color: '#FC7B51', primary: '$300', secondary: '$100' }
  ]

  const categories = [
    { title: 'Groceries', icon: <BasketIcon />, color: '#FCD836', primary: '$0', secondary: '$0' },
    { title: 'Home', icon: <HomeIcon />, color: '#00A9F8', primary: '$0', secondary: '$0' },
    { title: 'Cafe', icon: <CupIcon />, color: '#EF3070', primary: '$0', secondary: '$0' },
    { title: 'Transport', icon: <GasStationIcon />, color: '#FFA931', primary: '$0', secondary: '$0' },
    { title: 'Health', icon: <HeartIcon />, color: '#049688', primary: '$0', secondary: '$0' },
    { title: 'Leisure', icon: <DrinkIcon />, color: '#B43CC7', primary: '$0', secondary: '$0' },
    { title: 'Household', icon: <HouseholdIcon />, color: '#87C25B', primary: '$0', secondary: '$0' },
    { title: 'Sports', icon: <WeightIcon />, color: '#495BCD', primary: '$0', secondary: '$0' },
  ]

  return (
    <div className="phone-wrapper">
      {/* Floating badges */}
      <div className="phone-float-badge badge-1">
        <div className="badge-icon" style={{ background: 'rgba(22,176,112,0.2)' }}>📈</div>
        <div>
          <div className="badge-text-label">This month</div>
          <div className="badge-text-value" style={{ color: 'var(--color-success)' }}>+$4,200</div>
        </div>
      </div>

      <div className="phone-float-badge badge-2">
        <div className="badge-icon" style={{ background: 'rgba(198,255,76,0.15)' }}>🎯</div>
        <div>
          <div className="badge-text-label">Budget goal</div>
          <div className="badge-text-value">78% done</div>
        </div>
      </div>

      <div className="phone-float-badge badge-3">
        <div className="badge-icon" style={{ background: 'rgba(255,28,69,0.15)' }}>⚡</div>
        <div>
          <div className="badge-text-label">Saved today</div>
          <div className="badge-text-value">$620</div>
        </div>
      </div>

      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
          {/* Top Bar / Balance Header */}
          <div className="phone-top-bar">
            <div className="phone-balance-header">
              <span className="phone-balance-label">Balance</span>
              <button
                className="phone-balance-eye-btn"
                onClick={() => setBalanceHidden(!balanceHidden)}
                aria-label={balanceHidden ? "Show balance" : "Hide balance"}
              >
                {balanceHidden ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            <button className="phone-menu-btn" aria-label="Menu">
              <HamburgerIcon />
            </button>
          </div>

          {/* Balance Amount */}
          <div className="phone-balance-value">
            {balanceHidden ? "$ •••••" : "$ 5 000"}
          </div>

          {/* Accounts Section */}
          <div className="phone-section-container">
            <div className="phone-section-header">
              <span className="phone-section-title">Accounts</span>
            </div>
            <div className="phone-card-grid">
              {accounts.map((acc, i) => (
                <div key={i} className="phone-app-card-wrapper">
                  <div className="phone-app-card" style={{ backgroundColor: acc.color }}>
                    <div className="phone-card-title">{acc.title}</div>
                    <div className="phone-card-icon">{acc.icon}</div>
                  </div>
                  <div className="phone-card-amount-primary">{acc.primary}</div>
                  <div className="phone-card-amount-secondary">{acc.secondary}</div>
                </div>
              ))}
              <div className="phone-app-card-wrapper">
                <div className="phone-app-card add-card">
                  <GreyPlusIcon />
                </div>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <div className="phone-section-container">
            <div className="phone-section-header">
              <span className="phone-section-title">Categories</span>
            </div>
            <div className="phone-card-grid">
              {categories.map((cat, i) => (
                <div key={i} className="phone-app-card-wrapper">
                  <div className="phone-app-card" style={{ backgroundColor: cat.color }}>
                    <div className="phone-card-title">{cat.title}</div>
                    <div className="phone-card-icon">{cat.icon}</div>
                  </div>
                  <div className="phone-card-amount-primary">{cat.primary}</div>
                  <div className="phone-card-amount-secondary">{cat.secondary}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Nav */}
          <div className="phone-navbar">
            <div className="phone-nav-item active">
              <div className="phone-nav-dot"><HouseOutlineIcon /></div>
              <span>Home</span>
            </div>
            <div className="phone-nav-item">
              <div className="phone-nav-dot"><TransactionsIcon /></div>
              <span>Transactions</span>
            </div>
            
            <div className="phone-nav-fab-container">
              <div className="phone-nav-fab">
                <PlusIcon />
              </div>
            </div>
            
            <div className="phone-nav-item">
              <div className="phone-nav-dot"><BudgetIcon /></div>
              <span>Budget</span>
            </div>
            <div className="phone-nav-item">
              <div className="phone-nav-dot"><AnalyticsIcon /></div>
              <span>Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ============================================
   HERO SECTION
   ============================================ */
function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-blob" />
        <div className="hero-bg-blob" />
        <div className="hero-bg-blob" />
        <div className="hero-bg-grid" />
      </div>

      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge" aria-label="New app release">
              <div className="hero-badge-dot" />
              Now available on iOS & Android
            </div>

            <h1 className="hero-title">
              Your Money,{' '}
              <span className="gradient-text">Under Control</span>
            </h1>

            <p className="hero-subtitle">
              AcidMoney is a smart personal finance app that helps you track expenses, manage accounts, and build better money habits — all in one beautiful interface.
            </p>



            <div className="hero-stores">
              <div className="store-badge" id="appstore-badge" role="button" tabIndex={0} aria-label="Download on App Store">
                <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: 'currentColor' }}>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="store-badge-label">
                  <div className="store-badge-sublabel">Download on the</div>
                  <div className="store-badge-name">App Store</div>
                </div>
              </div>

              <div className="store-badge" id="googleplay-badge" role="button" tabIndex={0} aria-label="Get it on Google Play">
                <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: 'currentColor' }}>
                  <path d="M3.18 23.76c.3.15.65.17.98.04l11.75-6.76-2.56-2.56L3.18 23.76zM.5 1.4C.19 1.7 0 2.14 0 2.67v18.66c0 .53.19.97.5 1.27l.07.06 10.46-10.46v-.25L.57 1.34.5 1.4zM20.49 10.03l-2.97-1.71-2.85 2.85 2.85 2.85 2.98-1.71c.85-.49.85-1.29-.01-1.78zM4.16.24L15.9 6.97 13.35 9.52 4.16.24z"/>
                </svg>
                <div className="store-badge-label">
                  <div className="store-badge-sublabel">Get it on</div>
                  <div className="store-badge-name">Google Play</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   STATS TICKER
   ============================================ */
function StatsTicker() {
  const items = [
    { value: '50,000+', label: 'Active Users' },
    { value: '₴2B+', label: 'Transactions Tracked' },
    { value: '4.8★', label: 'App Store Rating' },
    { value: '10+', label: 'Currency Support' },
    { value: '99.9%', label: 'Uptime Reliability' },
    { value: '< 2s', label: 'Average Load Time' },
    { value: 'Free', label: 'Core Features' },
    { value: '24/7', label: 'Cloud Sync' },
  ]

  const doubled = [...items, ...items]

  return (
    <div className="stats-ticker" aria-label="App statistics">
      <div className="stats-ticker-track">
        {doubled.map((item, i) => (
          <div key={i} className="stats-ticker-item">
            <span className="stats-ticker-value">{item.value}</span>
            <span className="stats-ticker-label">{item.label}</span>
            <div className="stats-ticker-dot" />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ============================================
   FEATURES SECTION
   ============================================ */
function Features() {
  const features = [
    {
      icon: '💳',
      title: 'Smart Accounts',
      desc: 'Manage multiple accounts — cash, cards, savings — all in one place with real-time balance tracking and beautiful card visuals.',
    },
    {
      icon: '📊',
      title: 'Category Tracking',
      desc: 'Create custom expense categories with icons and colors. Know exactly where your money goes with detailed breakdowns.',
    },
    {
      icon: '🔄',
      title: 'Transaction History',
      desc: 'Browse all transactions with powerful search and period filters: 7 days, 30 days, 6 months, or 1 year.',
    },
    {
      icon: '📈',
      title: 'Analytics Dashboard',
      desc: 'Visualize income vs expenses with clear charts. Spot trends and make smarter decisions with your finances.',
    },
    {
      icon: '🌍',
      title: 'Multi-Currency',
      desc: 'Track spending in 10+ currencies. Automatic conversion keeps your global finances in check effortlessly.',
    },
    {
      icon: '☁️',
      title: 'Cloud Sync',
      desc: 'Your data syncs instantly across all devices. Google and Apple sign-in for seamless, secure access anywhere.',
    },
  ]

  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Features</span>
          <h2 className="section-title">Everything you need to master your finances</h2>
          <p className="section-description">
            Powerful tools designed to make personal finance feel effortless, insightful, and even enjoyable.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feat, i) => (
            <div
              key={i}
              className={`feature-card reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className="feature-icon-wrap" aria-hidden="true">{feat.icon}</div>
              <h3 className="feature-title">{feat.title}</h3>
              <p className="feature-desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   HOW IT WORKS
   ============================================ */
function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Create Account',
      desc: 'Sign up free with Google or Apple in seconds. No credit card required.',
    },
    {
      num: '02',
      title: 'Add Your Accounts',
      desc: 'Connect your cash, cards, and savings. Customize with colors and icons.',
    },
    {
      num: '03',
      title: 'Track Transactions',
      desc: 'Log income and expenses quickly. Categorize and add notes for clarity.',
    },
    {
      num: '04',
      title: 'Get Insights',
      desc: 'See where money goes, spot patterns, and make smarter financial decisions.',
    },
  ]

  return (
    <section id="how-it-works" className="section how-it-works">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">How It Works</span>
          <h2 className="section-title">Up and running in minutes</h2>
          <p className="section-description">
            Getting started with AcidMoney is simple. No complex setup, no learning curve — just open, create, and take control.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <div key={i} className={`step-card reveal reveal-delay-${i + 1}`}>
              <div className="step-number">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   DASHBOARD PREVIEW SECTION
   ============================================ */
function DashboardPreview() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  const incomeData = [65, 75, 55, 80, 70, 90]
  const expenseData = [40, 55, 45, 60, 50, 65]

  const cats = [
    { name: 'Housing', color: '#36B4FF', pct: '78%', amount: '₴3,200' },
    { name: 'Food', color: '#FFA130', pct: '55%', amount: '₴1,240' },
    { name: 'Shopping', color: '#C6FF4C', pct: '40%', amount: '₴890' },
    { name: 'Health', color: '#FF1C45', pct: '25%', amount: '₴560' },
  ]

  return (
    <section id="preview" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Dashboard</span>
          <h2 className="section-title">Your finances at a glance</h2>
          <p className="section-description">
            A clean, intuitive dashboard gives you a full picture of your financial health — income, expenses, and category breakdowns in one view.
          </p>
        </div>

        <div className="dashboard-visual reveal">
          <div className="dashboard-header">
            <div className="dashboard-title">Financial Overview</div>
            <div className="dashboard-period">
              {['7d', '30d', '6m', '1y'].map((p, i) => (
                <div key={i} className={`period-chip ${i === 2 ? 'active' : ''}`}>{p}</div>
              ))}
            </div>
          </div>

          <div className="dashboard-total">
            <div className="dashboard-total-label">Net Balance (6 months)</div>
            <div className="dashboard-total-amount">
              <span className="currency">₴</span>24,890
            </div>
          </div>

          {/* Bar Chart */}
          <div className="chart-bars">
            {months.map((month, i) => (
              <div key={i} className="chart-bar-group">
                <div
                  className="chart-bar income"
                  style={{ height: `${incomeData[i]}%` }}
                />
                <div
                  className="chart-bar expense"
                  style={{ height: `${expenseData[i]}%` }}
                />
                <div className="chart-bar-label">{month}</div>
              </div>
            ))}
          </div>

          {/* Category breakdown */}
          <div className="category-breakdown">
            {cats.map((cat, i) => (
              <div key={i} className="category-row">
                <div className="category-color-dot" style={{ background: cat.color }} />
                <div className="category-name">{cat.name}</div>
                <div className="category-bar-track">
                  <div className="category-bar-fill" style={{ width: cat.pct, background: cat.color }} />
                </div>
                <div className="category-amount">{cat.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   TESTIMONIALS
   ============================================ */
function Testimonials() {
  const testimonials = [
    {
      text: '"AcidMoney completely changed how I think about my finances. The category system is so intuitive — I finally know where my money actually goes every month."',
      name: 'Maria S.',
      role: 'Freelance Designer',
      avatar: '👩‍🎨',
      avatarBg: 'linear-gradient(135deg, #C6FF4C 0%, #7ED957 100%)',
    },
    {
      text: '"The multi-account feature is a game changer. I track my cash, monobank, and savings all in one place. The Google sign-in makes it super easy to get started."',
      name: 'Oleksiy P.',
      role: 'Software Engineer',
      avatar: '👨‍💻',
      avatarBg: 'linear-gradient(135deg, #36B4FF 0%, #7B2FFF 100%)',
    },
    {
      text: '"Finally a finance app that doesn\'t look boring. The dark theme and neon green accent make it a pleasure to open every day. My savings are up 30% this year!"',
      name: 'Anna K.',
      role: 'Marketing Manager',
      avatar: '👩‍💼',
      avatarBg: 'linear-gradient(135deg, #FFA130 0%, #FF1C45 100%)',
    },
  ]

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-title">Loved by thousands of users</h2>
          <p className="section-description">
            Don't just take our word for it — hear from people who transformed their financial habits with AcidMoney.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
              <div className="testimonial-stars" aria-label="5 stars">
                {[...Array(5)].map((_, j) => <span key={j} className="star">★</span>)}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ background: t.avatarBg }}>{t.avatar}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



/* ============================================
   CTA SECTION
   ============================================ */
function CTA() {
  return (
    <section id="cta" className="section cta-section">
      <div className="container">
        <div className="cta-inner">
          <h2 className="cta-title">
            Ready to take control<br />
            of your <span className="gradient-text">money</span>?
          </h2>
          <p className="cta-subtitle">
            Join 50,000+ users who've transformed their finances. Get started in 30 seconds — completely free.
          </p>
          <div className="cta-actions">
            <button className="btn-primary" id="cta-ios-btn" style={{ fontSize: 16, padding: '16px 32px' }}>
              🍎 Download for iOS
            </button>
            <button className="btn-primary" id="cta-android-btn" style={{ fontSize: 16, padding: '16px 32px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}>
              🤖 Download for Android
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   FOOTER
   ============================================ */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="AcidMoney Logo" />
              <div className="footer-logo-text">Acid<span>Money</span></div>
            </div>
            <p className="footer-brand-desc">
              Smart personal finance management for modern people. Track, analyze, and grow your wealth.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Product</div>
            <nav className="footer-links" aria-label="Product navigation">
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#preview">Dashboard</a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} <span>AcidMoney</span>. All rights reserved. Built with 💚 by Acidsoft.
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ============================================
   SCROLL REVEAL HOOK
   ============================================ */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            entry.target.classList.remove('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

/* ============================================
   MAIN APP
   ============================================ */
function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsTicker />
        <Features />
        <HowItWorks />
        <DashboardPreview />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
