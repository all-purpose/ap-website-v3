import React from 'react';
import {RichText} from 'prismic-reactjs';

const CallToAction = ({callToAction}) => {

  const {
    call_to_action_css_class,
    call_to_action_statement,
    call_to_action_buttons
  } = callToAction;

  const addCTACSSClasses = (cssClass) => {
    
    let className = 'cta apply-color-theme';

    if (cssClass) {
      className += ` ${cssClass}`;
    }
    return className;
  }

  const outputCallToActionButtons = call_to_action_buttons => {
    return call_to_action_buttons.map((call_to_action_button, i) => {

      let ctaBtnLinkTarget = '';

      const {
        button_action_text,
        button_sub_text,
        button_link_target
      } = call_to_action_button;

      const ctaBtnActionText = button_action_text ? button_action_text : '';

      try {
        ctaBtnLinkTarget = button_link_target._meta.uid;
      } catch(err) {
        console.error(err);
        return false;
      }

      if (button_sub_text) {
        return (
          <div key={i} className="cta-link">
            <a href={`/${ctaBtnLinkTarget}`}>
              <h3 className="cta-link-action-text">
                {ctaBtnActionText}
              </h3>
              <div className="cta-link-sub-text">
                <RichText render={button_sub_text} />
              </div>
            </a>
          </div>
        )
      } else {
        return (
          <div key={i} className="cta-link">
            <a href={`/${ctaBtnLinkTarget}`}>{ctaBtnActionText}</a>
          </div>
        )
      }
    });
  }

  return (
    <div className={addCTACSSClasses(call_to_action_css_class)}>
      <div className="container">
        <div className="cta-statement display-01">
          <RichText render={call_to_action_statement} />
        </div>
        <div className="cta-buttons">
          {outputCallToActionButtons(call_to_action_buttons)}
        </div> 
      </div>
    </div>
  )
}

export default CallToAction;