import React from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import "./CtaCard.scss"

const CtaCard = (props) => {
  //   debugger
  // If no Call to Action just return

  const { title, subtitle } = props

  //   const addCTACSSClasses = (cssClass) => {
  //     let className = "cta"

  //     if (cssClass) {
  //       className += ` ${cssClass}`
  //     }
  //     return className
  //   }

  return (
    <div className={``}>
      <a className="cta-card" href="#">
        <h3 className="cta-card__title">{title}</h3>
        <div className="cta-card__arrow">arrow</div>
        <p className="cta-card__subtitle">{subtitle}</p>
      </a>
    </div>
  )
}

export default CtaCard
