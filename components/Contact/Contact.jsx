import { AtSymbolIcon, PhoneIcon } from "@heroicons/react/24/outline";
import styles from "./styles.module.css";
import { Heading } from "..";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className={`${styles["contact-container"]} flow`}>
          <Heading content={`Let's Talk`} />

          <div className={`${styles["form-container"]}`}>
            <form
              className="flow"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value={process.env.FORM_API_KEY}
              />
              <div className="grid">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="grid">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" required />
              </div>
              <div className="grid">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
              <input
                type="hidden"
                name="redirect"
                value="https://web3forms.com/success"
              />
              <button
                className="cta-btn flex items-center rounded-full font-bold"
                type="submit"
              >
                Send Message
              </button>
            </form>

            <div className="flow">
              <div className="flex items-center">
                <div className={styles["icon"]}>
                  <AtSymbolIcon height={24} width={24} />
                </div>
                <Link href="mailto:husnainzahid214@gmail.com">
                  husnainzahid214@gmail.com
                </Link>
              </div>

              <div className="flex items-center">
                <div className={styles["icon"]}>
                  <PhoneIcon height={24} width={24} />
                </div>

                <Link href="tel:+923054775266">+92 305 4775266</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
