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
          <div key={i} className="cta-link">
            <Link to={`/${ctaBtnLinkTarget}`}>
              <h3 className="cta-link-action-text">{ctaBtnActionText}</h3>
              <div className="cta-link-sub-text">
                <RichText render={button_sub_text} />
              </div>
            </Link>
          </div>
        )
      } else {
        return (
          <div key={i} className="cta-link">
            <Link to={`/${ctaBtnLinkTarget}`}>{ctaBtnActionText}</Link>
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
          <div className="cta-statement display-01 col-md-6">
            <RichText render={call_to_action_statement} />
          </div>
          <div className="cta-buttons col-md-6">
            <div className="row">
              {outputCallToActionButtons(call_to_action_buttons)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
