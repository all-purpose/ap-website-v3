import React from "react"
import Seo from '../seo/SEOModule';
import Header from "../header/Header"
import Footer from "../footer/Footer"
import VisibleGrid from "../visibleGrid/VisibleGrid"

const Layout = ({ seoTitle, palette, type, uid, children }) => {

  const addContentClasses = (type, uid) => {
    let className = "site-content"
    if (type) {
      className += ` ${type}`
    }
    if (uid) {
      className += ` ${uid}`
    }
    return className
  }

  return (
    <div className={`site ${palette ? palette : ""}`}>
      <Seo title={seoTitle} />
      <Header />
      <main id="content" className={addContentClasses(type, uid)}>
        {children}
      </main>
      <Footer />
      {process.env.NODE_ENV === 'development' && (
        <VisibleGrid />
      )}
    </div>
  )
}

export default Layout
