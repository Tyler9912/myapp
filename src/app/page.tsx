import Image from "next/image";

export default function Home() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Welcome!</h1>
        <p className="subtitle">
          BIS Food Service
        </p>

        <div className="columns">
          <div className="column is-one-third">
            <div className="box">Left column content</div>
          </div>
          <div className="column">
            <div className="box">Main content area</div>
          </div>
        </div>

        <button className="button is-primary">Click me</button>
      </div>
    </section>
  );
}
