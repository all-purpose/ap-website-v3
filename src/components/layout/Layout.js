import React from "react"
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({palette, type, uid, children }) => {

  const addContentClasses = (type, uid) => {
    let className = 'site-content';
    if (type) {
      className += ` ${type}`;
    }
    if (uid) {
      className += ` ${uid}`;
    }
    return className;
  }
  
  return (
    <div className={`site ${palette ? palette : ''}`}>
      <Header />
      <main id="content" className={addContentClasses(type, uid)}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout