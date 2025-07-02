import "../Components/Technology.css";

function Technology() {
  return (
    <>
      {/* About Page */}
 <>
  {/* Technology Page */}
  <div id="technology" className="page active">
    <div className="container">
      <div className="content-card">
        <h2>Technologies &amp; Skills</h2>
        <p>
          Here's a comprehensive overview of the technologies I work with and my
          proficiency levels. I'm constantly learning and staying updated with
          the latest trends in technology.
        </p>
      </div>
      <div className="tech-category">
        <h3>Frontend Development</h3>
        <div className="tech-items">
          <div className="tech-item">HTML5</div>
          <div className="tech-item">CSS3</div>
          <div className="tech-item">JavaScript (ES6+)</div>
          <div className="tech-item">React.js</div>
          <div className="tech-item">Vue.js</div>
       
          <div className="tech-item">Tailwind CSS</div>
          <div className="tech-item">Bootstrap</div>
        </div>
      </div>
      <div className="tech-category">
        <h3>Backend Development</h3>
        <div className="tech-items">
          <div className="tech-item">Node.js</div>
          <div className="tech-item">Express.js</div>
        
         
        </div>
      </div>
      <div className="tech-category">
        <h3>Database Technologies</h3>
        <div className="tech-items">
          <div className="tech-item">MySQL</div>
        
          <div className="tech-item">MongoDB</div>
         
        </div>
      </div>
     
    
      <div className="tech-category">
        <h3>Tools &amp; Others</h3>
        <div className="tech-items">
          <div className="tech-item">Git</div>
          <div className="tech-item">GitHub</div>
         
          <div className="tech-item">VS Code</div>
          <div className="tech-item">IntelliJ IDEA</div>
          <div className="tech-item">Figma</div>
       
          <div className="tech-item">Postman</div>
          
        </div>
      </div>
      <div className="content-card">
        <h3>Proficiency Levels</h3>
        <div style={{ margin: "1rem 0" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.5rem"
            }}
          >
            <span>
              <strong>JavaScript &amp; React</strong>
            </span>
            <span>95%</span>
          </div>
          <div className="proficiency-bar">
            <div className="proficiency-fill" style={{ width: "95%" }} />
          </div>
        </div>
        <div style={{ margin: "1rem 0" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.5rem"
            }}
          >
            <span>
              <strong>Node.js &amp; Express</strong>
            </span>
            <span>90%</span>
          </div>
          <div className="proficiency-bar">
            <div className="proficiency-fill" style={{ width: "90%" }} />
          </div>
        </div>
        <div style={{ margin: "1rem 0" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.5rem"
            }}
          >
            
          </div>
       
        </div>
        <div style={{ margin: "1rem 0" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.5rem"
            }}
          >
            <span>
              <strong>Database Management</strong>
            </span>
            <span>88%</span>
          </div>
          <div className="proficiency-bar">
            <div className="proficiency-fill" style={{ width: "88%" }} />
          </div>
        </div>
        <div style={{ margin: "1rem 0" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.5rem"
            }}
          >
         
           
          </div>
        
        </div>
      </div>
    </div>
  </div>
</>

    </>
  );
}

export default Technology;
