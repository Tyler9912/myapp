import Image from "next/image";
import 'bulma/css/bulma.min.css';

export default function Home() {
  return (
    <section className="hero is-fullheight is-light">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1 has-text-weight-bold has-text-black">
            🍔 Welcome to FoodBot
          </h1>
          <h2 className="subtitle is-4 has-text-grey-dark">
            Your AI-powered food assistant — Order smarter, eat faster.
          </h2>

          <div className="buttons is-centered mt-5">
            <a className="button is-primary is-medium">Try It Now</a>
            <a className="button is-light is-medium">Learn More</a>
          </div>

          <div className="mt-6">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="Delicious Food"
              style={{ borderRadius: '12px', maxWidth: '90%', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            />
          </div>

          <div className="section mt-6">
            <div className="columns is-centered">
              <div className="column is-one-third">
                <div className="box has-text-left">
                  <h3 className="title is-5">🔍 Smart Recommendations</h3>
                  <p>Let the bot learn your taste and suggest meals tailored just for you.</p>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="box has-text-left">
                  <h3 className="title is-5">🤖 Seamless Ordering</h3>
                  <p>Skip the line and order directly via chat or voice.</p>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="box has-text-left">
                  <h3 className="title is-5">📦 Real-time Tracking</h3>
                  <p>Know exactly where your order is and when it arrives.</p>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer mt-6">
            <div className="content has-text-centered">
              <p>
                <strong>FoodBot</strong> by Tyler. © {new Date().getFullYear()}
              </p>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
