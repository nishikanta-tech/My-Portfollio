import "../Components/Footer.css";
function Footer(){
    return(
        <>
  <div className="footer-content">
    <div className="footer-section">
      <h3>HomeHub</h3>
      <p>
        Your trusted partner in creating the perfect living space. Expert
        advice, practical solutions, and inspiring ideas for every home.
      </p>
      <div className="social-links">
        <a href="#">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#">
          <i className="fab fa-instagram" />
        </a>
        <a href="#">
          <i className="fab fa-twitter" />
        </a>
        <a href="#">
          <i className="fab fa-pinterest" />
        </a>
        <a href="#">
          <i className="fab fa-youtube" />
        </a>
      </div>
    </div>
    <div className="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms of Service</a>
        </li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Services</h3>
      <ul>
        <li>
          <a href="#">Interior Design</a>
        </li>
        <li>
          <a href="#">Home Renovation</a>
        </li>
        <li>
          <a href="#">Smart Home Setup</a>
        </li>
        <li>
          <a href="#">Maintenance Tips</a>
        </li>
        <li>
          <a href="#">DIY Guides</a>
        </li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Newsletter</h3>
      <p>
        Subscribe to get weekly tips and inspiration delivered to your inbox.
      </p>
      <form onsubmit="handleNewsletter(event)" style={{ marginTop: "1rem" }}>
        <input
          type="email"
          placeholder="Your email"
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "0.5rem",
            border: "none",
            borderRadius: 5
          }}
        />
        <button
          type="submit"
          style={{
            background: "#667eea",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: 5,
            cursor: "pointer",
            width: "100%"
          }}
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2025 HomeHub. All rights reserved.</p>
  </div>
</>

    )
}
export default Footer;