import "../Components/Degree.css";

function Degree() {
  return (
    <>
      {/* Degree Page */}
      <div id="degree" className="page active">
        <div className="container">
          <div className="content-card">
            <h2>Education &amp; Qualifications</h2>
            <p>
              My educational journey has provided me with a strong foundation in
              computer science and software engineering principles. Here's my
              academic background and certifications.
            </p>
          </div>
          <div className="timeline">
           
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Bachelor of Computer Application</h4>
                <div className="degree-type">BCA</div>
                <div className="institution">
                  Utkal University
                </div>
                <div className="duration">2023 - 2026</div>
                <p>
                  Comprehensive study of software development, database systems,
                  computer networks, and web technologies. Active participant in
                  coding competitions and hackathons.
                </p>
                <div className="gpa">1st sem- GPA: 7.5/10.0</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Higher Secondary Education</h4>
                <div className="degree-type">12th Grade - Science</div>
                <div className="institution">Council of Higher Secondary, Odisha</div>
                <div className="duration">2021 - 2023</div>
                <p>
                  Focused on Mathematics, Physics, and Chemistry. Scored
                  56% in board examinations
                </p>
                <div className="gpa">Score: 56%</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Matriculation</h4>
                <div className="degree-type">12th Grade - Science</div>
                <div className="institution">Gurukul Public School</div>
                <div className="duration">2020 - 2021</div>
             
                <div className="gpa">Score: 51%</div>
              </div>
            </div>
          </div>
          <div className="content-card">
            <h2>Professional Certifications</h2>
            <p>
              Continuous learning is key to staying current in technology. Here
              are my recent certifications and courses.
            </p>
          </div>
          <div className="certifications">
           
            <div className="cert-card">
              <h4>Google Ads Certifications</h4>
              <div className="issuer">Coursera</div>
              <div className="date">Issued: Aug 2024</div>
              <p>
                Demonstrates proficiency in Google Ads, including search,
                display, and video advertising.
              </p>
            </div>
           
            <div className="cert-card">
              <h4>Advanced Search Engine Optimization</h4>
              <div className="issuer">Coursera</div>
              <div className="date">Issued: Feb 2025</div>
              <p>
                Covers advanced SEO techniques, including technical SEO,
                content optimization, and link building strategies.
              </p>
            </div>
            <div className="cert-card">
              <h4>Generative AI for all</h4>
              <div className="issuer">Infosys.</div>
              <div className="date">Issued: March 2025</div>
              <p>
                Provides a foundational understanding of generative AI concepts
                and applications.
              </p>
            </div>
            <div className="cert-card">
              <h4>Business Analysis & Process Management</h4>
              <div className="issuer">Coursera</div>
              <div className="date">Issued: April 2025</div>
              <p>
                Covers essential skills in business analysis, process mapping,
                and requirements gathering.
              </p>
            </div>
          </div>
          {/* <div className="content-card">
            <h3>Academic Achievements</h3>
          
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Degree;
