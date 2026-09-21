function Contact() {
  return (
    <main>

      <section className="section contact">

        <p className="label">
          GET IN TOUCH
        </p>

        <h2>
          Contact
        </h2>

        <p className="contact-text">
          Feel free to contact me through
          email or GitHub.
        </p>

        <div className="contact-list">

          <a href="mailto:muhammadazzamm7@gmail.com">

            <span>
              Email
            </span>

            <strong>
              muhammadazzamm7@gmail.com
            </strong>

          </a>

          <a
            href="https://github.com/Azzammm182"
            target="_blank"
            rel="noopener noreferrer"
          >

            <span>
              GitHub
            </span>

            <strong>
              github.com/Azzammm182
            </strong>

          </a>

        </div>

      </section>

    </main>
  );
}

export default Contact;