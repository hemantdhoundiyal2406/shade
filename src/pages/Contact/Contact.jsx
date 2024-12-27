
import styles from "./Contact.module.css"

function Contact() {
  return (
    <div className={` ${styles.contact_section} py-5 bg-light`}>
      <div className="container">
        <div className="row g-5 align-items-center">
        
          <div className="col-lg-6">
            <h1 className={styles.contact_title}>We’re Here to Support</h1>
            <p className={styles.contact_subtitle}>
              Have questions or need assistance? We’re here to help—reach out to us anytime!
            </p>
            <div className={styles.contact_info}>
              <p>
                <span className={styles.info_label}>Opening Timing:</span> 10:00 AM – 6:00 PM
              </p>
              <p>
                <span className={styles.info_label}>Office Address:</span> D-16 169-170 Sector 7 Rohini, New Delhi – 110085, India
              </p>
              <p>
                <span className={styles.info_label}>Email:</span> social@shade.agency
              </p>
              <br />
              <p>
                <span className={styles.info_label}>Office Address:</span> Gautemala (Central America)
              </p>
              <p>
                <span className={styles.info_label}>Email:</span> gautemala@shade.agency
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="col-lg-6">
            <form className={` ${styles.contact_form} p-4 shadow rounded bg-white`}>
              <div className="form-group mb-4">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control rounded-0"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control rounded-0"
                  id="email"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="lookingFor" className="form-label">What Are You Looking For?</label>
                <input
                  type="text"
                  name="lookingFor"
                  className="form-control rounded-0"
                  id="lookingFor"
                  placeholder="Specify your need"
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="message" className="form-label">Your Message (Optional)</label>
                <textarea
                  className="form-control rounded-0"
                  id="message"
                  placeholder="Leave a message here"
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
