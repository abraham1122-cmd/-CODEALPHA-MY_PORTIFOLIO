import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [state, handleSubmit] = useForm("xyeyjrnj");
  const [showSuccess, setShowSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    await handleSubmit(e);
  }

  useEffect(() => {
    if (state.succeeded) {

      setFormData({
        name: "",
        email: "",
        message: ""
      });

     
      setShowSuccess(true);

     
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section className="section section-alt" id="contact">

      <div className="container">

        <div className="section-heading">
          <p>Get In Touch</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-container">

          <div className="contact-info">
            <h3>Let's build real projects together.</h3>

            <p>
              Have a project, opportunity or question?
              Feel free to get in touch.
            </p>

            <div className="contact-item">
              <span>📧</span>
              <div>
                <strong>Email</strong>
                <p>abrahamdasta48@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span>📍</span>
              <div>
                <strong>Location</strong>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleFormSubmit}
          >

            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="6"
                required
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>

            {showSuccess && (
              <p className="success-message">
                Thank you! Your message has been sent successfully.
              </p>
            )}

          </form>

        </div>
      </div>

    </section>
  );
}

export default Contact;