import React from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import "./CallToAction.scss"

const CallToAction = ({ callToAction }) => {
  const {
    call_to_action_css_class,
    call_to_action_statement,
    call_to_action_buttons,
  } = callToAction

  const addCTACSSClasses = (cssClass) => {
    let className = "cta"

    if (cssClass) {
      className += ` ${cssClass}`
    }
    return className
  }

  const outputCallToActionButtons = (call_to_action_buttons) => {
    return call_to_action_buttons.map((call_to_action_button, i) => {
      let ctaBtnLinkTarget = ""

      const {
        button_action_text,
        button_sub_text,
        button_link_target,
      } = call_to_action_button

      const ctaBtnActionText = button_action_text ? button_action_text : ""

      try {
        ctaBtnLinkTarget = button_link_target._meta.uid
      } catch (err) {
        console.error(err)
        return false
      }

      if (button_sub_text) {
        return (
          <div className="col-12 col-sm-6 col-lg-3">
            <Link to={`/${ctaBtnLinkTarget}`} key={i} className="cta-link ">
              <h3 className="cta-link-action-text serif">{ctaBtnActionText}</h3>
              <div className="cta-link-sub-text ">
                <RichText render={button_sub_text} />
              </div>
            </Link>
          </div>
        )
      } else {
        return (
          <div className="col-12">
            <Link
              key={i}
              className="cta-link inline"
              to={`/${ctaBtnLinkTarget}`}
            >
              {ctaBtnActionText}
            </Link>
          </div>
        )
      }
    })
  }

  return (
    <div
      className={`cta-section apply-color-theme ${addCTACSSClasses(
        call_to_action_css_class
      )}`}
    >
      <div className="container">
        <div className="row">
          <div className="cta-statement display-01 col-md-12 col-lg-6 ">
            <div className="col-md-6 col-lg-12">
              <RichText render={call_to_action_statement} />
            </div>
          </div>
          {outputCallToActionButtons(call_to_action_buttons)}
        </div>
      </div>
    </div>
  )
}

export default CallToAction
