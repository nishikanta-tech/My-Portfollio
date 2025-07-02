import "../Components/About.css";

function About() {
  return (


 <>
<>
  {/* About Page */}
  <div id="about" className="page active">
    <div className="container">
      <div className="content-card">
        <h2>About Me</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "center",
            margin: "2rem 0"
          }}
        >
          <div>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                marginBottom: "1.5rem"
              }}
            >
              Hello! I'm a passionate <strong>Full-Stack Developer</strong> with
              over 1 year of experience crafting digital experiences that blend
              creativity with functionality. I specialize in building scalable
              web applications, intuitive user interfaces, and robust backend
              systems.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#666" }}>
              My approach combines technical expertise with creative
              problem-solving to deliver solutions that not only work flawlessly
              but also provide exceptional user experiences. I believe in
              writing clean, maintainable code and following best practices in
              software development.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "linear-gradient(45deg, #667eea, #764ba2)",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)"
              }}
            >
              <div
                style={{
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "4rem"
                }}
              >
                👨‍💻
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-card">
        <h3>My Professional Journey</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            margin: "1.5rem 0"
          }}
        >
          <div
            style={{
              padding: "1.5rem",
              background:
                "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
              borderRadius: 15,
              borderLeft: "4px solid #667eea"
            }}
          >
            <h4 style={{ color: "#333", marginBottom: "1rem" }}>
              🚀 Early Beginnings
            </h4>
            <p>
              Started my coding journey during university, where I fell in love
              with problem-solving through programming. Built my first web
              application and knew I'd found my calling.
            </p>
          </div>
          <div
            style={{
              padding: "1.5rem",
              background:
                "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
              borderRadius: 15,
              borderLeft: "4px solid #764ba2"
            }}
          >
            <h4 style={{ color: "#333", marginBottom: "1rem" }}>
              💼 Professional Growth
            </h4>
            <p>
              Evolved from junior developer to full-stack engineer, working with
              startups and enterprises to build scalable solutions that serve
              thousands of users.
            </p>
          </div>
          <div
            style={{
              padding: "1.5rem",
              background:
                "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
              borderRadius: 15,
              borderLeft: "4px solid #667eea"
            }}
          >
            <h4 style={{ color: "#333", marginBottom: "1rem" }}>
              🌟 Current Focus
            </h4>
            <p>
              Passionate about modern web technologies, cloud architecture, and
              creating applications that make a positive impact on people's
              lives.
            </p>
          </div>
        </div>
      </div>
      <div className="content-card">
        <h3>What Drives Me</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            margin: "1.5rem 0"
          }}
        >
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💡</div>
            <h4 style={{ color: "#333", marginBottom: "0.5rem" }}>
              Innovation
            </h4>
            <p style={{ color: "#666", fontSize: "0.9rem" }}>
              Always exploring new technologies and finding creative solutions
              to complex challenges.
            </p>
          </div>
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎯</div>
            <h4 style={{ color: "#333", marginBottom: "0.5rem" }}>Quality</h4>
            <p style={{ color: "#666", fontSize: "0.9rem" }}>
              Committed to writing clean, efficient code and delivering
              high-quality user experiences.
            </p>
          </div>
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🤝</div>
            <h4 style={{ color: "#333", marginBottom: "0.5rem" }}>
              Collaboration
            </h4>
            <p style={{ color: "#666", fontSize: "0.9rem" }}>
              Believe in the power of teamwork and open communication to achieve
              great results.
            </p>
          </div>
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📚</div>
            <h4 style={{ color: "#333", marginBottom: "0.5rem" }}>Learning</h4>
            <p style={{ color: "#666", fontSize: "0.9rem" }}>
              Continuous learner who stays updated with industry trends and best
              practices.
            </p>
          </div>
        </div>
      </div>
      <div className="content-card">
        <h3>Core Competencies</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            margin: "1.5rem 0"
          }}
        >
          <div>
            <h4 style={{ color: "#667eea", marginBottom: "1rem" }}>
              🎨 Frontend Expertise
            </h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li
                style={{ padding: "0.5rem 0", borderBottom: "1px solid #eee" }}
              >
                ✓ Modern JavaScript (ES6+) &amp; TypeScript
              </li>
              <li
                style={{ padding: "0.5rem 0", borderBottom: "1px solid #eee" }}
              >
                ✓ React.js, Vue.js, Angular frameworks
              </li>
              <li
                style={{ padding: "0.5rem 0", borderBottom: "1px solid #eee" }}
              >
                ✓ Responsive &amp; Mobile-First Design
              </li>
              <li
                style={{ padding: "0.5rem 0", borderBottom: "1px solid #eee" }}
              >
                ✓ State Management (Redux, Vuex)
              </li>
              <li style={{ padding: "0.5rem 0" }}>
                ✓ CSS Frameworks &amp; Preprocessors
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "#764ba2", marginBottom: "1rem" }}>
              ⚙️ Backend Proficiency
            </h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li
                style={{ padding: "0.5rem 0", borderBottom: "1px solid #eee" }}
              >
                ✓ Node.js, Python, Java development
              </li>
              <li
                style={{ padding: "0.5rem 0", borderBottom: "1px solid #eee" }}
              >
                ✓ RESTful APIs &amp; GraphQL
              </li>
              <li
                style={{ padding: "0.5rem 0", borderBottom: "1px solid #eee" }}
              >
                ✓ Database Design &amp; Management
              </li>
             
            </ul>
          </div>
        </div>
      </div>
      <div className="content-card">
        <h3>Beyond the Code</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            margin: "1.5rem 0"
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "1rem",
              background: "rgba(102, 126, 234, 0.05)",
              borderRadius: 10
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🏃‍♂️</div>
            <h5 style={{ color: "#333", marginBottom: "0.5rem" }}>
              Fitness Enthusiast
            </h5>
            <p style={{ color: "#666", fontSize: "0.85rem" }}>
              Regular runner and gym-goer who believes in maintaining physical
              and mental health.
            </p>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "1rem",
              background: "rgba(118, 75, 162, 0.05)",
              borderRadius: 10
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>📖</div>
            <h5 style={{ color: "#333", marginBottom: "0.5rem" }}>
              Avid Reader
            </h5>
            <p style={{ color: "#666", fontSize: "0.85rem" }}>
              Love reading tech blogs, science fiction, and books on personal
              development.
            </p>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "1rem",
              background: "rgba(102, 126, 234, 0.05)",
              borderRadius: 10
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🍳</div>
            <h5 style={{ color: "#333", marginBottom: "0.5rem" }}>
              Cooking Explorer
            </h5>
            <p style={{ color: "#666", fontSize: "0.85rem" }}>
              Enjoy experimenting with new cuisines and cooking techniques in my
              spare time.
            </p>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "1rem",
              background: "rgba(118, 75, 162, 0.05)",
              borderRadius: 10
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌍</div>
            <h5 style={{ color: "#333", marginBottom: "0.5rem" }}>
              Travel Lover
            </h5>
            <p style={{ color: "#666", fontSize: "0.85rem" }}>
              Passionate about exploring new cultures and gaining inspiration
              from diverse experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="content-card">
        <h3>Let's Connect!</h3>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.1rem",
            marginBottom: "2rem"
          }}
        >
          I'm always excited to discuss new opportunities, collaborate on
          interesting projects, or simply chat about technology and innovation.
          Feel free to reach out!
        </p>
        <div style={{ textAlign: "center" }}>
          <a
            href="/contact"
            onclick="showPage('contact')"
            className="cta-button"
            style={{ margin: "0 1rem" }}
          >
            Get In Touch
          </a>
          <a
            href="/projects"
            onclick="showPage('projects')"
            className="cta-button"
            style={{
              background: "linear-gradient(45deg, #28a745, #20c997)",
              margin: "0 1rem"
            }}
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  </div>
</>

</>




  )
}

export default About
