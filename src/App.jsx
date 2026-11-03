import { useEffect, useState } from 'react'
import logo from './assets/chamberlogo-128.webp'
import heroImage from './assets/lee-county-hero.webp'
import './App.css'

const Icon = ({ name, size = 20 }) => {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    close: <path d="M18 6 6 18M6 6l12 12"/>,
    compass: <><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z"/></>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></>,
    handshake: <><path d="m11 17 2 2a2 2 0 0 0 3-3l-3.5-3.5"/><path d="m8.5 11.5 2-2a2.1 2.1 0 0 1 3 0l1 1a2 2 0 0 0 2.8 0L19 8.8"/><path d="m3 9 3-3 4 4-3 3Zm18 0-3-3-3 3 3 3Z"/></>,
    lightbulb: <><path d="M9 18h6M10 22h4"/><path d="M8.5 14.5A6 6 0 1 1 15.5 14.5c-.9.7-1.5 1.7-1.5 2.5h-4c0-.8-.6-1.8-1.5-2.5Z"/></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
    network: <><circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="m10.5 7.6-4 8M13.5 7.6l4 8M8 19h8"/></>,
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

const focusAreas = [
  { icon: 'network', title: 'Connecting local businesses', copy: 'Creating room for business owners, entrepreneurs, and professionals to meet, share ideas, and support one another.' },
  { icon: 'eye', title: 'Increasing business visibility', copy: 'Helping residents and visitors discover the businesses, services, and experiences available throughout Lee County.' },
  { icon: 'handshake', title: 'Building community partnerships', copy: 'Encouraging collaboration among businesses, community organizations, tourism efforts, and local partners.' },
  { icon: 'lightbulb', title: 'Supporting future growth', copy: 'Building a foundation for networking, business development, community events, and new economic opportunity.' },
]

const nextSteps = [
  ['01', 'Reconnect', 'Bring businesses back into conversation with one another across Lee County.'],
  ['02', 'Listen', 'Gather ideas and community input so the Chamber reflects real local needs.'],
  ['03', 'Build', 'Develop membership opportunities, business visibility, and future gatherings.'],
]

const waysToTakePart = [
  ['Business owners', 'Share what would make Chamber participation valuable for your business.'],
  ['Entrepreneurs', 'Meet people building in Lee County and help shape a stronger local network.'],
  ['Community supporters', 'Bring ideas, connections, and energy to the work of helping Lee County grow.'],
]

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? ' footer-brand' : ''}`} href="#home">
      <span className="brand-mark"><img src={logo} alt="" width="128" height="128" decoding="async" loading={footer ? 'lazy' : 'eager'} /></span>
      <span className="brand-copy"><b>Wilderness Road</b><small>Chamber of Commerce</small></span>
      <span className="sr-only"> home</span>
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <aside className="status-bar" aria-label="Chamber status">
        <span className="status-dot" aria-hidden="true" />
        <strong>Next meeting</strong>
        <a href="#updates"><time dateTime="2026-11-17T18:00:00-05:00">Tuesday, Nov. 17 at 6 PM</time> · Cumberland Market</a>
      </aside>

      <header className="site-header">
        <Brand />

        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}>
          <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
        </button>

        <nav id="primary-navigation" className={menuOpen ? 'primary-nav open' : 'primary-nav'} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#current" onClick={closeMenu}>Current state</a>
          <a href="#focus" onClick={closeMenu}>Our focus</a>
          <a href="#organizing" onClick={closeMenu}>Community effort</a>
          <a href="#updates" onClick={closeMenu}>Updates</a>
          <a className="button button-small" href="#involved" onClick={closeMenu}>Get involved <Icon name="arrow" size={16} /></a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero-section" id="home">
          <img
            className="hero-image"
            src={heroImage}
            width="1166"
            height="871"
            fetchPriority="high"
            decoding="async"
            alt="A pink sunset over the Appalachian mountains in Lee County"
          />
          <div className="hero-overlay" />
          <div className="hero-content content-wrap">
            <p className="eyebrow light">Serving Lee County, Virginia</p>
            <h1>A new chapter for<br /><em>Lee County business.</em></h1>
            <p className="hero-intro">The Wilderness Road Chamber of Commerce is being revitalized to reconnect local businesses, strengthen community partnerships, and create new opportunities across Lee County.</p>
            <div className="hero-actions">
              <a className="button button-cream" href="#current">See where things stand <Icon name="arrow" size={18} /></a>
              <a className="text-link light-link" href="#involved">Help shape what’s next <Icon name="arrow" size={17} /></a>
            </div>
          </div>
          <a className="hero-next" href="#about" aria-label="Continue to welcome section"><span>Welcome to the Chamber</span><span className="scroll-line" /></a>
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="content-wrap intro-grid">
            <div>
              <p className="eyebrow">Welcome to the Chamber</p>
              <h2>Stronger connections.<br /><em>More local opportunity.</em></h2>
            </div>
            <div className="intro-copy">
              <p>The Chamber is working to bring local businesses together, strengthen connections throughout our community, and create new opportunities for Lee County.</p>
              <p>Whether you’re an established business owner, a new entrepreneur, or someone who wants to see Lee County grow, there’s a place for you in this effort.</p>
              <a className="text-link" href="#focus">Explore our focus <Icon name="arrow" size={17} /></a>
            </div>
          </div>
          <div className="content-wrap sectors-row" aria-label="People and groups invited to participate">
            <span>Local businesses</span><span>Entrepreneurs</span><span>Professionals</span><span>Community groups</span><span>Tourism partners</span><span>Supporters</span>
          </div>
        </section>

        <section className="current-section section-pad" id="current">
          <div className="content-wrap">
            <div className="section-heading split-heading">
              <div><p className="eyebrow">Where things stand</p><h2>The Chamber is growing<br /><em>from the ground up.</em></h2></div>
              <p>This is an active relaunch, not a finished organization. The work now is to rebuild relationships, listen to the community, and create a Chamber that is useful and accessible.</p>
            </div>

            <div className="interest-band">
              <div className="interest-number"><strong>50+</strong><span>local businesses have already expressed interest</span></div>
              <p>That early interest is a promising foundation. Membership options, future gatherings, business features, and other programs are still being developed with community participation.</p>
            </div>

            <div className="steps-list">
              {nextSteps.map(([number, title, copy]) => (
                <article className="step-card" key={title}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="focus-section section-pad" id="focus">
          <div className="content-wrap focus-grid">
            <div className="focus-intro">
              <p className="eyebrow light">Our focus</p>
              <h2>Built around what helps<br /><em>Lee County move forward.</em></h2>
              <p>These priorities are guiding the Chamber’s next chapter as the organization continues to take shape.</p>
            </div>
            <div className="focus-list">
              {focusAreas.map((item, index) => (
                <article className="focus-item" key={item.title}>
                  <div className="focus-icon"><Icon name={item.icon} size={23} /></div>
                  <div><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="organizing-section section-pad" id="organizing">
          <div className="content-wrap organizing-grid">
            <div className="community-card">
              <p className="micro-label">A shared local effort</p>
              <div className="community-icon" aria-hidden="true"><Icon name="network" size={38} /></div>
              <h3>Built by Lee County businesses</h3>
              <p>The Chamber’s relaunch is a collaborative effort shaped by local businesses, entrepreneurs, community partners, and supporters from across Lee County.</p>
            </div>
            <div className="organizing-copy">
              <p className="eyebrow">A community-shaped next chapter</p>
              <h2>Starting the conversation.<br /><em>Building it together.</em></h2>
              <p>No single person or business can define what the Chamber should become. Its strongest future will come from local people sharing what they need, what they can offer, and what they want to build together.</p>
              <ul className="check-list">
                <li><Icon name="check" size={18} /> Reconnecting businesses across Lee County</li>
                <li><Icon name="check" size={18} /> Gathering ideas and community input</li>
                <li><Icon name="check" size={18} /> Shaping membership and visibility opportunities</li>
              </ul>
              <a className="text-link" href="https://cardinalnews.org/2026/08/14/swva-field-notes-4/" target="_blank" rel="noopener noreferrer">Read about the relaunch <span className="sr-only"> (opens in a new tab)</span><Icon name="arrow" size={17} /></a>
            </div>
          </div>
        </section>

        <section className="involved-section section-pad" id="involved">
          <div className="content-wrap">
            <div className="section-heading involved-heading">
              <p className="eyebrow light">Get involved</p>
              <h2>There’s room for you<br /><em>in this effort.</em></h2>
              <p>The Chamber’s next chapter is being built through community participation. Interest, ideas, and local knowledge can all help shape what comes next.</p>
            </div>
            <div className="involvement-grid">
              {waysToTakePart.map(([title, copy], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="updates-section section-pad" id="updates">
          <div className="content-wrap">
            <header className="updates-heading">
              <div>
                <p className="eyebrow">Latest chamber update</p>
                <h2>Connections are growing.<br /><em>Here’s what’s next.</em></h2>
              </div>
              <p>Thank you to everyone participating, sharing ideas, and helping build a stronger network for Lee County businesses.</p>
            </header>

            <article className="meeting-card">
              <div className="meeting-date" aria-hidden="true">
                <span>Nov</span>
                <strong>17</strong>
                <small>Tuesday</small>
              </div>
              <div className="meeting-details">
                <p className="micro-label">Next Chamber meeting</p>
                <h3><time dateTime="2026-11-17T18:00:00-05:00">Tuesday, November 17 at 6:00 PM</time></h3>
                <p>All Lee County businesses are welcome.</p>
              </div>
              <div className="meeting-place">
                <p className="micro-label">Location</p>
                <h4>Cumberland Market</h4>
                <address>25447 Wilderness Road<br />Jonesville, Virginia</address>
              </div>
            </article>

            <div className="update-grid">
              <article>
                <span className="update-number">01</span>
                <p className="micro-label">Chamber Connection recap</p>
                <h3>Thank you for painting outside the lines with us.</h3>
                <p>Thank you to everyone who joined the Chamber Connection at Painting Outside The Lines Studio in Pennington Gap. Special thanks to Stacy Lynn for hosting and to MJ Holden of People Inc. Financial Services for sharing loan, grant, and training resources for local businesses.</p>
              </article>
              <article>
                <span className="update-number">02</span>
                <p className="micro-label">Local business spotlight</p>
                <h3>Add your logo to the “We Grow Our Own” tree.</h3>
                <p>Local businesses are invited to be represented on the UNIfication Tree at the Southwest Virginia Museum Festival of Trees in Big Stone Gap, running November 15 through December 31.</p>
              </article>
              <article>
                <span className="update-number">03</span>
                <p className="micro-label">Help shape the Chamber</p>
                <h3>Draft bylaws are ready for community input.</h3>
                <p>Lee County businesses and community supporters are encouraged to review the Chamber’s draft bylaws and share ideas as the organization takes shape.</p>
              </article>
              <article>
                <span className="update-number">04</span>
                <p className="micro-label">December preview</p>
                <h3>Connecting with Lee County’s future business leaders.</h3>
                <p>The December meeting will be held at the Lee County Career and Technical Center and will include an opportunity to connect with FBLA. Additional details are coming soon.</p>
              </article>
            </div>

            <div className="update-actions">
              <div>
                <p className="micro-label">Forms, resources &amp; updates</p>
                <p>Open the original announcement for the shared documents and forms, or connect with the Chamber’s Facebook community for ongoing updates.</p>
              </div>
              <div className="update-links">
                <a className="button" href="https://www.facebook.com/share/p/1F3DqjgMnS/" target="_blank" rel="noopener noreferrer">View post and forms <span className="sr-only"> (opens in a new tab)</span><Icon name="arrow" size={18} /></a>
                <a className="text-link" href="https://www.facebook.com/share/g/1ceo7rcEs6/" target="_blank" rel="noopener noreferrer">Visit Chamber Facebook <span className="sr-only"> (opens in a new tab)</span><Icon name="arrow" size={17} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-wrap footer-main">
          <Brand footer />
          <p>Connecting businesses. Strengthening community. Building what comes next.</p>
          <nav aria-label="Footer navigation"><a href="#about">About</a><a href="#current">Current state</a><a href="#focus">Our focus</a><a href="#involved">Get involved</a><a href="#updates">Updates</a><a href="https://www.facebook.com/share/g/1ceo7rcEs6/" target="_blank" rel="noopener noreferrer">Facebook<span className="sr-only"> (opens in a new tab)</span></a></nav>
        </div>
        <div className="content-wrap footer-bottom">
          <span>© 2026 Wilderness Road Chamber of Commerce</span>
          <span>Serving Lee County, Virginia</span>
        </div>
      </footer>
    </div>
  )
}

export default App
