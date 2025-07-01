import Image from "next/image";
import Link from "next/link";
import 'bulma/css/bulma.min.css';

export default function Home() {
  return (
    <section className="hero is-fullheight has-background-white">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1 has-text-weight-bold has-text-black mb-3">
            🎉 Welcome to Birthday Tracker
          </h1>
          <h2 className="subtitle is-4 has-text-grey-dark mb-5">
            Birthday service automation
          </h2>

          <div className="buttons is-centered mb-6">
            <a
              href="https://believe.app"
              target="_blank"
              rel="noopener noreferrer"
              className="button is-primary is-medium is-rounded has-text-weight-semibold shadow-sm"
            >
              Believe in Something
            </a>

            {/* Added Learn More button linking to /about */}
            <Link 
              href="/about" 
              className="button is-link is-medium is-rounded has-text-weight-semibold shadow-sm"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="Delicious Food"
              style={{
                borderRadius: '16px',
                maxWidth: '90%',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              }}
            />
          </div>

          <div className="section">
            <div className="columns is-centered">
              <div className="column is-one-third">
                <div className="box has-background-light has-text-left">
                  <h3 className="title is-5">🔍 Find rewards near you</h3>
                  <p>Something for everyone!</p>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="box has-background-light has-text-left">
                  <h3 className="title is-5">🤖 Automation</h3>
                  <p>Don't worry about missing rewards with alerts</p>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="box has-background-light has-text-left">
                  <h3 className="title is-5">📦 Reap the rewards</h3>
                  <p>Find many ways to save</p>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer has-background-white mt-6">
            <div className="content has-text-centered has-text-grey">
              <p>
                <strong>Birthday Tracker</strong> by Buddha Blessed. © {new Date().getFullYear()}
              </p>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
