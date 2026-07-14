import { useState } from 'react'
import logo from './assets/logo-web.png'
import heroLandscape from './assets/lee-county-hero.jpg'
import './App.css'

const Icon = ({ name, size = 20 }) => {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    calendar: <><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    close: <path d="M18 6 6 18M6 6l12 12"/>,
    mail: <><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 7L2 7"/></>,
    map: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
    network: <><circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="m10.5 7.6-4 8M13.5 7.6l4 8M8 19h8"/></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z"/>,
    quote: <path d="M3 21c3 0 7-1 7-8V5c0-1.3-.8-2-2-2H4c-1.3 0-2 .7-2 2v6c0 1.3.7 2 2 2h3c0 4-1 5-4 6v2Zm12 0c3 0 7-1 7-8V5c0-1.3-.8-2-2-2h-4c-1.3 0-2 .7-2 2v6c0 1.3.7 2 2 2h3c0 4-1 5-4 6v2Z"/>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></>,
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

const events = [
  { month: 'AUG', day: '18', title: 'Business After Hours', time: '5:30 PM', place: 'Appalachian Heritage Center', copy: 'An easygoing evening of new connections, local conversation, and community.' },
  { month: 'SEP', day: '09', title: 'Leadership Breakfast', time: '8:00 AM', place: 'Lee County Conference Hall', copy: 'Regional business leaders discuss practical approaches to workforce development.' },
  { month: 'OCT', day: '24', title: 'Annual Harvest Gala', time: '6:00 PM', place: 'Cumberland Event Barn', copy: 'An evening celebrating business excellence and the partnerships that move us forward.' },
]

const benefits = [
  ['Monthly networking events', 'Build relationships with the people doing business across Lee County.'],
  ['Business directory listing', 'Help customers and partners discover your organization.'],
  ['Ribbon-cutting ceremonies', 'Celebrate openings, milestones, and investments with the community.'],
  ['Marketing opportunities', 'Share your story through Chamber channels and member spotlights.'],
  ['Educational workshops', 'Learn from practical sessions created around local business needs.'],
  ['Community advocacy', 'Stay informed with legislative updates and regional priorities.'],
]

const leaders = [
  ['Emily Carter', 'Chair'], ['Michael Reynolds', 'Vice Chair'], ['Sarah Whitaker', 'Treasurer'], ['David Collins', 'Secretary'], ['Jessica Monroe', 'Director'], ['Robert Ellis', 'Director'], ['Amanda Brooks', 'Director'],
]

const staff = [
  ['Olivia Bennett', 'Executive Director'], ['Tyler Greene', 'Membership Coordinator'], ['Lauren Hayes', 'Community Engagement Manager'],
]

const stats = [
  ['184', 'Member businesses'], ['27', 'Annual networking events'], ['1,250', 'Volunteer hours'], ['980', 'Business referrals'], ['36', 'Community partnerships'], ['18%', 'New member growth'],
]

const testimonials = [
  ['Joining the Chamber connected us with local businesses that became lifelong partners.', 'Jennifer Lawson', 'Mountain Ridge Financial'],
  ["The Chamber's networking events gave our business the visibility we needed to grow.", 'Caleb Turner', 'Valley Outdoor Supply'],
  ['An incredible resource for entrepreneurs.', 'Rachel King', "King's Coffee Co."],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [notice, setNotice] = useState('')

  const closeMenu = () => setMenuOpen(false)
  const mockAction = (label) => {
    setNotice(`${label} is a design-only action in this mockup.`)
    window.setTimeout(() => setNotice(''), 3200)
  }

  return (
    <div className="site-shell">
      <div className="mockup-bar">
        <span>Design preview</span>
        All people, places, events, and statistics shown here are fictional.
      </div>

      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Lee County Chamber of Commerce home">
          <span className="brand-mark"><img src={logo} alt="" /></span>
          <span className="brand-copy"><b>Lee County</b><small>Chamber of Commerce</small></span>
        </a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">
          <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
        </button>

        <nav className={menuOpen ? 'primary-nav open' : 'primary-nav'} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#events" onClick={closeMenu}>Events</a>
          <a href="#membership" onClick={closeMenu}>Membership</a>
          <a href="#leadership" onClick={closeMenu}>Leadership</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button className="button button-small" onClick={() => { closeMenu(); document.querySelector('#membership')?.scrollIntoView({ behavior: 'smooth' }) }}>Join the Chamber <Icon name="arrow" size={16} /></button>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <img className="hero-image" src={heroLandscape} alt="Green Appalachian ridges overlooking a sunlit rural valley" />
          <div className="hero-overlay" />
          <div className="hero-content content-wrap">
            <p className="eyebrow light">Welcome to Lee County, Virginia</p>
            <h1>Building business.<br /><em>Strengthening community.</em><br />Inspiring growth.</h1>
            <p className="hero-intro">Connecting the people, ideas, and opportunities that help our corner of Southwest Virginia thrive.</p>
            <div className="hero-actions">
              <a className="button button-cream" href="#membership">Explore membership <Icon name="arrow" size={18} /></a>
              <a className="text-link light-link" href="#events">See upcoming events <Icon name="arrow" size={17} /></a>
            </div>
          </div>
          <a className="hero-next" href="#about" aria-label="Continue to about section"><span>Discover our work</span><span className="scroll-line" /></a>
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="content-wrap intro-grid">
            <div>
              <p className="eyebrow">Working together since 2014 <span>Fictional</span></p>
              <h2>A stronger local economy starts with <em>real connection.</em></h2>
            </div>
            <div className="intro-copy">
              <p>The Lee County Chamber of Commerce supports local businesses through networking opportunities, educational programs, community partnerships, and economic development initiatives.</p>
              <p>We bring entrepreneurs, business leaders, and community organizations together to encourage innovation, celebrate our unique heritage, and create sustainable growth.</p>
              <a className="text-link" href="#leadership">Meet our leadership <Icon name="arrow" size={17} /></a>
            </div>
          </div>
          <div className="content-wrap sectors-row" aria-label="Industries we serve">
            <span>Healthcare</span><span>Manufacturing</span><span>Tourism</span><span>Retail</span><span>Agriculture</span><span>Professional services</span>
          </div>
        </section>

        <section className="events-section section-pad" id="events">
          <div className="content-wrap">
            <div className="section-heading split-heading">
              <div><p className="eyebrow">What's ahead</p><h2>Meet. Learn. <em>Grow.</em></h2></div>
              <p>Come share ideas, meet neighbors, and make the connections that keep local business moving.</p>
            </div>
            <div className="event-list">
              {events.map((event, index) => (
                <article className="event-card" key={event.title}>
                  <div className="event-number">0{index + 1}</div>
                  <div className="date-block"><span>{event.month}</span><b>{event.day}</b></div>
                  <div className="event-main"><h3>{event.title}</h3><p>{event.copy}</p></div>
                  <div className="event-details"><span><Icon name="clock" size={16} />{event.time}</span><span><Icon name="map" size={16} />{event.place}</span></div>
                  <button className="circle-button" onClick={() => mockAction(event.title)} aria-label={`View ${event.title}`}><Icon name="arrow" size={20} /></button>
                </article>
              ))}
            </div>
            <button className="button button-outline centered-button" onClick={() => mockAction('View all events')}>View all events <Icon name="calendar" size={18} /></button>
          </div>
        </section>

        <section className="membership-section section-pad" id="membership">
          <div className="content-wrap membership-grid">
            <div className="membership-sticky">
              <p className="eyebrow light">Membership benefits</p>
              <h2>Rooted here.<br /><em>Growing together.</em></h2>
              <p>Membership puts your business in the room, in the conversation, and in front of the community.</p>
              <button className="button button-cream" onClick={() => mockAction('Membership application')}>Become a member <Icon name="arrow" size={18} /></button>
            </div>
            <div className="benefit-list">
              {benefits.map(([title, copy], index) => (
                <div className="benefit-item" key={title}>
                  <div className="benefit-icon"><Icon name={index % 2 ? 'users' : 'network'} size={23} /></div>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                  <Icon name="check" size={20} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="snapshot-section section-pad">
          <div className="content-wrap">
            <div className="section-heading snapshot-heading">
              <div><p className="eyebrow">Our local impact <span>Fictional data</span></p><h2>Momentum you can <em>measure.</em></h2></div>
              <p>A thriving network of businesses and partners working toward a stronger Lee County.</p>
            </div>
            <div className="stats-grid">
              {stats.map(([number, label]) => <div className="stat" key={label}><strong>{number}</strong><span>{label}</span></div>)}
            </div>
          </div>
        </section>

        <section className="leadership-section section-pad" id="leadership">
          <div className="content-wrap">
            <div className="section-heading split-heading leadership-heading">
              <div><p className="eyebrow">The people behind the work <span>Fictional</span></p><h2>Local leadership.<br /><em>Shared vision.</em></h2></div>
              <p>Business leaders and community advocates volunteering their experience in service of Lee County.</p>
            </div>
            <div className="leadership-layout">
              <div className="staff-panel">
                <p className="micro-label">Chamber staff</p>
                {staff.map(([name, role], index) => (
                  <div className="person featured" key={name}>
                    <div className={`avatar avatar-${index + 1}`}><span>{name.split(' ').map(n => n[0]).join('')}</span></div>
                    <div><h3>{name}</h3><p>{role}</p></div>
                  </div>
                ))}
              </div>
              <div className="board-panel">
                <p className="micro-label">Board of directors</p>
                <div className="board-grid">
                  {leaders.map(([name, role]) => (
                    <div className="person" key={name}>
                      <div className="initials">{name.split(' ').map(n => n[0]).join('')}</div>
                      <div><h3>{name}</h3><p>{role}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials-section section-pad">
          <div className="content-wrap">
            <p className="eyebrow light">Member stories <span>Fictional</span></p>
            <div className="testimonial-grid">
              {testimonials.map(([quote, name, company], index) => (
                <figure className={index === 0 ? 'testimonial featured-testimonial' : 'testimonial'} key={name}>
                  <Icon name="quote" size={30} />
                  <blockquote>“{quote}”</blockquote>
                  <figcaption><b>{name}</b><span>{company}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="content-wrap contact-card">
            <div className="contact-copy">
              <p className="eyebrow light">Let's build what comes next</p>
              <h2>Your next connection<br />starts <em>right here.</em></h2>
              <p>Have a question about membership, an event, or the local business community? We’d love to hear from you.</p>
              <button className="button button-cream" onClick={() => mockAction('Contact form')}>Start a conversation <Icon name="arrow" size={18} /></button>
            </div>
            <div className="contact-details">
              <div><Icon name="map" size={22} /><p><span>Visit us</span>123 Main Street<br />Jonesville, VA 24263</p></div>
              <div><Icon name="phone" size={22} /><p><span>Call us</span><a href="tel:+12765550148">(276) 555-0148</a></p></div>
              <div><Icon name="mail" size={22} /><p><span>Email us</span><a href="mailto:info@leecountychamber.org">info@leecountychamber.org</a></p></div>
              <small>Placeholder contact information for design purposes only.</small>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-wrap footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark"><img src={logo} alt="" /></span>
            <span className="brand-copy"><b>Lee County</b><small>Chamber of Commerce</small></span>
          </a>
          <p>Building business. Strengthening community. Inspiring growth.</p>
          <nav aria-label="Footer navigation"><a href="#about">About</a><a href="#events">Events</a><a href="#membership">Membership</a><a href="#leadership">Leadership</a><a href="#contact">Contact</a></nav>
        </div>
        <div className="content-wrap footer-bottom">
          <span>© 2026 Lee County Chamber of Commerce — Concept mockup</span>
          <span>All content on this page is fictional and must be verified before publication.</span>
        </div>
      </footer>

      <div className={notice ? 'toast visible' : 'toast'} role="status">{notice}</div>
    </div>
  )
}

export default App
