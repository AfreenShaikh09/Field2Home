import '../css/About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Field2Home</h1>

      <div className="card-grid">
        <div className="about-card">
          <h2>🌱 Our Mission</h2>
          <p>
            Empower local farmers by connecting them directly with consumers through
            a transparent, fair, and sustainable digital marketplace.
          </p>
        </div>

        <div className="about-card">
          <h2>🌍 Our Vision</h2>
          <p>
            To build a future where everyone has access to fresh, organic produce while
            supporting eco-friendly and community-driven farming practices.
          </p>
        </div>

        <div className="about-card">
          <h2>🧭 Our Values</h2>
          <ul>
            <li>Fairness in Pricing</li>
            <li>Trust & Transparency</li>
            <li>Sustainability</li>
            <li>Empowerment of Farmers</li>
            <li>Customer Satisfaction</li>
          </ul>
        </div>
      </div>

      <div className="about-stats">
        <div className="stat">
          <h2>100+</h2>
          <p>Happy Customers</p>
        </div>
        <div className="stat">
          <h2>50+</h2>
          <p>Verified Farmers</p>
        </div>
        <div className="stat">
          <h2>10+</h2>
          <p>Locations Served</p>
        </div>
      </div>
    </div>
  );
}

export default About;
