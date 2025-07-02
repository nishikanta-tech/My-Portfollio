import "../Components/Contact.css";
function Contact(){
    return(
<>
<>
  {/* Contact Page */}
  <div id="contact" className="page active">
    <div className="container">
      <div className="content-card">
        <h2>Get In Touch</h2>
        <p>
          I'm always interested in hearing about new opportunities and
          interesting projects. Whether you have a question or just want to say
          hi, feel free to reach out!
        </p>
      </div>
      <div className="contact-form">
        <h3>Send Me a Message</h3>
        <form onsubmit="handleSubmit(event)">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required="" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required="" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required="" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required=""
              defaultValue={""}
            />
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
      <div className="content-card">
        <h3>Other Ways to Connect</h3>
        <p>
          <strong>Email:</strong> nishikanta394@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +91 9668477412
        </p>
        <p>
          <strong>Location:</strong> Bhubaneswar, Odisha, India
        </p>
        <p>
          <strong>LinkedIn:</strong> https://www.linkedin.com/in/nishikanta-jena-68a0052a3/
        </p>
        <p>
          <strong>GitHub:</strong> github.com/yourusername
        </p>
      </div>
    </div>
  </div>
</>

</>

    )
}
export default Contact;