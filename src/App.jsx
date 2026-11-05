import { useState } from 'react';
import Icon from './Icon.jsx';
import { cafe, whatsappLink, menu, specials, gallery, reviews, heroVideo } from './data.js';

const wa = whatsappLink();
const rupees = (n) => `₹${n}`;

const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.3 14.8l-.4-.2-2.5.6.7-2.4-.3-.4A8 8 0 0 1 12 4z" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
  </svg>
);

const InstaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const Arrow = () => <span aria-hidden="true">→</span>;

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ['Home', '#home'],
    ['Our Menu', '#menu'],
    ['Specials', '#specials'],
    ['Our Story', '#about'],
    ['Gallery', '#gallery'],
    ['Reviews', '#reviews'],
  ];

  return (
    <header className="header">
      <a className="brand" href="#home" aria-label={cafe.name}>
        <img src="./images/logo.png" alt="Lambuz – Adding Smoothie to your Dream" />
      </a>

      <div className="header-actions">
        <a className="btn btn-teal header-btn" href={wa} target="_blank" rel="noreferrer">
          <WaIcon /> <span className="btn-text">Order on WhatsApp</span>
        </a>
      </div>

      <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
        <span /><span /><span />
      </button>

      <nav className={`nav ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
        {links.map(([l, h], i) => (
          <a key={l} href={h} className={i === 0 ? 'active' : ''}>{l}</a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero hero-video-wrap" id="home">
      <div className="hero-video-bg">
        <video
          src={heroVideo}
          poster="./images/hero_poster.jpg"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg-video"
        />
        <div className="hero-video-overlay" />
      </div>

      <div className="hero-content-container">
        <div className="hero-copy">
          <span className="chip">Sampath Nagar, Erode</span>
          <h1>
            Shakes.<br />
            <span>Sundaes.</span><br />
            Snacks.
          </h1>
          <p className="hero-sub">{cafe.tagline}</p>
          <div className="hero-btns">
            <a className="btn btn-orange" href="#menu">Explore Our Menu <Arrow /></a>
            <a className="btn btn-ghost" href={cafe.mapsUrl} target="_blank" rel="noreferrer">Find Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Title({ children }) {
  return (
    <h2 className="title">
      <span className="dash" />
      {children}
      <span className="dash" />
    </h2>
  );
}

function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const cat = menu.find((m) => m.id === active);
  return (
    <section className="section" id="menu">
      <Title>Explore Our Menu</Title>
      <div className="cat-grid" role="tablist" aria-label="Menu categories">
        {menu.map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={m.id === active}
            className={`cat ${m.id === active ? 'on' : ''}`}
            onClick={() => setActive(m.id)}
          >
            <Icon name={m.icon} size={50} />
            <span>{m.label}</span>
          </button>
        ))}
      </div>

      <div className="menu-card" role="tabpanel">
        <div className="menu-tag"><span>{cat.label}</span></div>
        <ul className="menu-list">
          {cat.items.map(([name, price]) => (
            <li key={name}>
              <span className="n">{name}</span>
              <span className="dots" aria-hidden="true" />
              <span className="p">{rupees(price)}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="menu-note">Prices in Indian Rupees (₹), as per the cafe's menu card.</p>
    </section>
  );
}

function Specials() {
  return (
    <section className="specials" id="specials">
      <div className="spec-intro">
        <h3>Shake<br />Specials</h3>
        <p>Rich, thick and loaded — straight from our shake menu.</p>
      </div>
      <div className="spec-grid">
        {specials.map((s) => (
          <div className="spec" key={s.name}>
            <Icon name={s.icon} size={46} />
            <b>{s.name}</b>
            <small>{s.from}</small>
            <span className="price">{rupees(s.price)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Offers() {
  if (!cafe.offer.enabled) return null;
  return (
    <section className="offers">
      <b>{cafe.offer.title}</b> <span>{cafe.offer.sub}</span>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <Title>Our Story</Title>

      <div className="about-intro-wrap">
        <span className="about-kicker">Since 2020 • Sampath Nagar</span>
        <h3 className="about-headline">Where Every Sip Becomes a Moment</h3>
        <p className="about-p">
          Since 2020, Lambuz Juice Cafe has been bringing fresh flavours and delicious moments to Sampath Nagar.
        </p>
        <p className="about-p">
          From refreshing fruit juices and creamy shakes to indulgent sundaes and freshly prepared snacks, every favourite is made to make your day a little better.
        </p>
        <p className="about-tagline-quote">
          Fresh flavours. Happy moments. That’s Lambuz.
        </p>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="section" id="gallery">
      <Title>Moments & Creations Gallery</Title>
      <div className="gal-grid">
        {gallery.map((g, idx) => (
          <figure className="gal" key={g.src}>
            <img src={g.src} alt={g.alt || `Lambuz Cafe creation ${idx + 1}`} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}

function StarRating({ count = 5 }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="star">★</span>
      ))}
    </div>
  );
}

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

function Reviews() {
  return (
    <section className="section reviews-section" id="reviews">
      <Title>What Our Customers Say</Title>
      
      <div className="reviews-summary-bar">
        <div className="summary-score">
          <GoogleIcon />
          <div>
            <div className="score-top">
              <span className="big-score">4.8</span>
              <StarRating count={5} />
            </div>
            <span className="score-label">Overall Google Rating (1,000+ happy customers)</span>
          </div>
        </div>
        <div className="reviews-actions">
          <a
            className="btn btn-ghost review-cta"
            href={cafe.googleReviewUrl}
            target="_blank"
            rel="noreferrer"
          >
            <GoogleIcon /> View More Reviews on Google
          </a>
          <a
            className="btn btn-orange review-cta"
            href={cafe.googleReviewUrl}
            target="_blank"
            rel="noreferrer"
          >
            ✍️ Post Yours
          </a>
        </div>
      </div>

      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <article className="review-card" key={i}>
            <div className="review-header">
              <div className="avatar">
                {r.name.charAt(0)}
              </div>
              <div className="reviewer-info">
                <h4>{r.name}</h4>
                <div className="reviewer-meta">
                  <span className="badge">{r.tag}</span>
                  <span className="dot">•</span>
                  <span className="time">{r.date}</span>
                </div>
              </div>
            </div>
            <div className="card-stars">
              <StarRating count={r.rating} />
              <span className="verified-badge">Google Review</span>
            </div>
            <p className="comment">"{r.comment}"</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Location() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section className="section loc" id="location">
      <div className="map-wrap">
        {!mapLoaded && (
          <div className="map-placeholder">
            <img
              src="./images/map_thumb.jpg"
              alt="Map Preview of Lambuz Juice Cafe"
              className="map-fallback-img"
            />
            <div className="map-loading-overlay">
              <span>📍 Loading Live Map...</span>
            </div>
          </div>
        )}
        <iframe
          title="Lambuz Juice Cafe on Google Maps"
          src={cafe.embedUrl}
          loading="lazy"
          onLoad={() => setMapLoaded(true)}
          className={`map-iframe ${mapLoaded ? 'loaded' : ''}`}
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="loc-info">
        <h3><Icon name="pin" size={30} /> Find Us Here</h3>
        <p className="loc-name">{cafe.name}</p>
        <p className="loc-addr">{cafe.addressLines.map((l) => <span key={l}>{l}</span>)}</p>
        {cafe.hours && (
          <p className="loc-hours"><b>Opening Hours</b><span>{cafe.hours}</span></p>
        )}
        <div className="loc-btns">
          <a className="btn btn-orange" href={cafe.mapsUrl} target="_blank" rel="noreferrer">
            Get Directions <Arrow />
          </a>
          <a className="btn btn-ghost" href={cafe.mapsUrl} target="_blank" rel="noreferrer">
            Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}

const Social = ({ href, label, bg, children }) =>
  href ? (
    <a className="social" href={href} target="_blank" rel="noreferrer" aria-label={label} style={{ background: bg }}>
      {children}
    </a>
  ) : null;

function Footer() {
  const hasSocial = cafe.instagram || cafe.facebook || cafe.youtube;
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="foot-brand-col">
          <img className="foot-logo" src="./images/logo.png" alt="Lambuz" />
          <p className="foot-brand-tag">{cafe.tagline}</p>
          <div className="foot-quick-badge">
            <span className="badge-pill">⭐ 4.8 Rating on Google</span>
            <span className="badge-pill">📍 Sampath Nagar, Erode</span>
          </div>
        </div>

        <div className="foot-nav-col">
          <h4 className="foot-heading">Quick Links</h4>
          <ul className="foot-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu & Drinks</a></li>
            <li><a href="#specials">Shake Specials</a></li>
            <li><a href="#gallery">Kitchen Gallery</a></li>
            <li><a href="#reviews">Customer Reviews</a></li>
            <li><a href="#location">Find Location</a></li>
          </ul>
        </div>

        <div className="foot-contact-col">
          <h4 className="foot-heading">Reach Us</h4>
          <p className="foot-addr-text">
            {cafe.addressLines.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </p>

          <p className="foot-phone-row">
            <span className="contact-label">Contact No:</span>{' '}
            <a href={cafe.phoneCall} className="contact-phone-val">{cafe.phone}</a>
          </p>

          <div className="foot-social-icons-row">
            <a
              className="social-icon-btn whatsapp-btn"
              href={wa}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <WaIcon />
            </a>
            <a
              className="social-icon-btn insta-btn"
              href={cafe.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow us on Instagram"
              title="Follow us on Instagram (@lambuz_cafe)"
            >
              <InstaIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {cafe.name}. All rights reserved.</p>
        <p className="footer-sub-links">
          <a href={cafe.googleReviewUrl} target="_blank" rel="noreferrer">Google Reviews</a>
          <span>•</span>
          <a href={cafe.mapsUrl} target="_blank" rel="noreferrer">Maps Location</a>
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Specials />
        <Offers />
        <About />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </>
  );
}
