import React from 'react';
import {RichText} from 'prismic-reactjs';

const Quotation = ({containerId, containerCssClass, quoteAuthorCitation, quoteText}) => {

  const outputQuote = (containerId, containerCssClass, children
    ) => {
      if (containerId) {
        return (
          <div id={containerId} className={addCSSClasses(containerCssClass)}>
            {children}
          </div>
        )
      } else {
        return (
          <div className={addCSSClasses(containerCssClass)}>
            {children}
          </div>
        )
      }
    }
  
    const addCSSClasses = (containerCssClass) => {
  
      let className = "quotation apply-color-theme"
  
      if (containerCssClass) {
        className += ` ${containerCssClass}`
      }
      return className
    }
  
    return outputQuote(
      containerId,
      containerCssClass,
      <div className="container">
        <blockquote className="quote">
          <div className="quote-text heading-01">
            <RichText render={quoteText} />
          </div>
          <footer className="quote-author body-01">
            <RichText render={quoteAuthorCitation} />
          </footer>
        </blockquote>
      </div>
      
    )

}

export default Quotation;