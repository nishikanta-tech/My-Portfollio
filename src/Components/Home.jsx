import "../Components/Home.css";
function Home() {
  return (
   

    <div id="home" className="page active">
      <div className="container">
        <div className="hero">
          {/* Profile Section */}
          <div className="profile">
            <img
              src="https://i.pinimg.com/736x/34/c8/0d/34c80dae8e01f1b75e1ce370e8ddaa18.jpg" // Replace with your profile image path
              alt="Nishi Profile"
              className="profile-photo"
            />
            <h1>Nishikanta Jena</h1>
            <p>
              I'm a passionate developer creating amazing digital experiences
            </p>
            <a
              href="/projects"
              onClick={() => showPage("projects")}
              className="cta-button"
            >
              View My Work
            </a>
          </div>
        </div>

        <div className="content-card">
          <h2>What I Do</h2>
          <p>
            I specialize in creating modern, responsive web applications and
            user interfaces. With a focus on clean code, innovative design, and
            seamless user experiences, I bring ideas to life through technology.
          </p>
          <div className="skills-grid">
            <div className="skill-item">Frontend Development</div>
            <div className="skill-item">Backend Development</div>
            <div className="skill-item">UI/UX Design</div>
            {/* <div className="skill-item">Mobile Development</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
