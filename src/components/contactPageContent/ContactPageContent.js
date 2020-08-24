import React from "react"

const ContactPageContent = (props) => {
  return (
    <div className="contact-content clear-grid">
      <div className="row">
        <div className="col-md-6">
          <address className="mb-8">
            <h3 className="eyebrow">The Office</h3>
            <h2 className="body-short-02 serif">
              402 West Pender Street
              <br />
              Vancouver, BC
            </h2>
          </address>
          <p className="body-01">
            Unceded territories of the xʷməθkʷəy̓əm (Musqueam), Skwxwú7mesh
            (Squamish) and səl̓ílwətaʔɬ (Tseil-Waututh) Nations.
          </p>
          <h3 className="eyebrow mt-16 block">Email</h3>
          <a href="mailto:info@allpurpose.io" className="body-short-02 serif">
            info@allpurpose.io
          </a>
          {/* <a>Learn more -> </a> */}
        </div>
        <div className="col-md-6">
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <div class="hidden">
              <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
            </div>
            <label className="form-field-label">
              <span className="eyebrow">Name</span>
              <input
                className="form-field apply-color-theme body-short-01"
                name="name"
                type="text"
              />
            </label>
            <label className="form-field-label">
              <span className="eyebrow">Email</span>
              <input
                className="form-field apply-color-theme body-short-01"
                name="email"
                type="email"
              />
            </label>
            <label className="form-field-label">
              <span>
                <span className="eyebrow">Message</span>
                <textarea 
                  className="form-field apply-color-theme body-short-01"
                  name="message"
                ></textarea>
              </span>
            </label>
            <input
              type="submit"
              value="Send"
              className="apply-color-theme--inverse button"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPageContent
