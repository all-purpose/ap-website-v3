import React from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import "./CtaCard.scss"

const CtaCard = (props) => {
  const { title, subtitle, href } = props

  //   const addCTACSSClasses = (cssClass) => {
  //     let className = "cta"

  //     if (cssClass) {
  //       className += ` ${cssClass}`
  //     }
  //     return className
  //   }

  return (
    <div>
      <a className="cta-card" href={href}>
        <h3 className="cta-card__title">{title}</h3>
        <div className="cta-card__arrow">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
            style={{ enableBackground: "new 0 0 32 32" }}
          >
            <rect
              className="st0"
              width="32"
              height="32"
              style={{ fill: "none" }}
            />
            <polygon points="18,6 16.6,7.4 24.1,15 3,15 3,17 24.1,17 16.6,24.6 18,26 28,16 " />
          </svg>
        </div>
        <p className="cta-card__subtitle">{subtitle}</p>
      </a>
    </div>
  )
}

export default CtaCard
