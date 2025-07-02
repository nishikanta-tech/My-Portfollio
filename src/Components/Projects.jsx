import "../Components/Projects.css";

function Projects() {
  return (
    <>
      {/* Projects Page */}
      <div id="projects" className="page active">
        <div className="container">
          <div className="content-card">
            <h2>My Projects</h2>
            <p>
              Here are some of the projects I've worked on recently. Each
              project represents a unique challenge and learning opportunity.
            </p>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <h3>E-Commerce Platform</h3>
              <p>
                A full-stack e-commerce solution with user authentication,
                payment integration, and admin dashboard.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Stripe</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Task Management App</h3>
              <p>
                A collaborative task management application with real-time
                updates and team features.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Vue.js</span>
                <span className="tech-tag">Firebase</span>
                <span className="tech-tag">Socket.io</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Weather Dashboard</h3>
              <p>
                A responsive weather application with location-based forecasts
                and interactive maps.
              </p>
              <div className="project-tech">
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Weather API</span>
                <span className="tech-tag">Chart.js</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Portfolio Website</h3>
              <p>
                A modern, responsive portfolio website showcasing projects and
                skills.
              </p>
              <div className="project-tech">
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Blog Platform</h3>
              <p>
                A content management system with markdown support and SEO
                optimization.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Prisma</span>
                <span className="tech-tag">PostgreSQL</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Mobile Fitness App</h3>
              <p>
                A cross-platform mobile app for tracking workouts and nutrition.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React </span>
                <span className="tech-tag">Redux</span>
                <span className="tech-tag">SQLite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
