import React from "react"
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({type, uid, children }) => {

  const addContentClasses = (type, uid) => {
    let className = '';
    if (type) {
      className += type;
    }
    if (uid) {
      className += ` ${uid}`;
    }
    return className;
  }
  
  return (
    <>
      <Header />
      <main id="content" className={addContentClasses(type, uid)}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout