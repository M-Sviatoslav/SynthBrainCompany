import React from "react";
import "./footer.css";

export default function Footer({
  email = "synthbrain.contact@gmail.com",
  phone = "+48-883-610-912",
  line1 = "You can contact us with email, phone or Facebook",
  line2 = "We speak English, Polish, Russian and Ukrainian",
  facebookUrl = "https://www.facebook.com/profile.php?id=61580633010403&locale=pl_PL",
}) {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="footer-inner">
        <div className="footer-contact">
          <a
            className="footer-link"
            href={`mailto:${email}`}
            title={`Email ${email}`}
          >
            {email}
          </a>
          <a
            className="footer-link"
            href={`tel:${phone.replace(/[^+\\d]/g, "")}`}
            title={`Call ${phone}`}
          >
            {phone}
          </a>
        </div>

        <div className="footer-texts" aria-hidden="false">
          <p className="footer-line">{line1}</p>
          <p className="footer-line">{line2}</p>
        </div>

        <div className="footer-social">
          <a
            className="social-link"
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <svg
              className="facebook-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
            >
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3V22c4.78-.81 8.44-4.94 8.44-9.93z" />
            </svg>
            <span className="social-label">Facebook</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
