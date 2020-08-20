import React from "react"

const ContactPageContent = (props) => {
  return (
    <div className="contact-content">
      <div className="row">
        <div className="col-md-6">
          <address className="mb-16">
            <h3 className="eyebrow">The Office</h3>
            <h2 className="heading-01">
              402 West Pender Street
              <br />
              Vancouver, BC
            </h2>
          </address>
          <p className="body-01">
            Unceded territories of the xʷməθkʷəy̓əm (Musqueam), Skwxwú7mesh
            (Squamish) and səl̓ílwətaʔɬ (Tseil-Waututh) Nations.
          </p>
          {/* <a>Learn more -> </a> */}
        </div>
        <div className="col-md-6">
          <form>
            <label>
              <span className="eyebrow">Your name</span>
              <input
                className="form-field apply-color-theme body-short-01"
                name="name"
                type="text"
              />
            </label>
            <label>
              <span className="eyebrow">Your Email</span>
              <input
                className="form-field apply-color-theme body-short-01"
                name="email"
                type="email"
              />
            </label>
            <label>
              <span>
                <span className="eyebrow">Your Message</span>
                <textarea className="form-field apply-color-theme body-short-01"></textarea>
              </span>
            </label>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPageContent
