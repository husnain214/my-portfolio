import styles from "./styles.module.css";

export default function Contact() {
  return (
    <section>
      <div className="container flow">
        <h2 className={`${styles["primary-heading"]}`}>Let&apos;s Talk</h2>

        <div className={`${styles["form-container"]} grid`}>
          <form className="flow" action="">
            <div className="grid">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" />
            </div>

            <div className="grid">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" />
            </div>

            <div className="grid">
              <label htmlFor="message">Message:</label>{" "}
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </form>

          <div>
            <div>
              <div></div>
              <a href="tel:+923054775266">+92 305 4775266</a>
            </div>

            <div>
              <div></div>
              <a href="mailto:husnainzahid214@gmail.com">
                husnainzahid214@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
