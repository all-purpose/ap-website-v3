import React from "react"

const MediaContact = ({ showMediaKit }) => {

  return (
    <React.Fragment>
      <h3 className="eyebrow mt-16 block">Media Contact</h3>
      <p>Karli Leitl, Communications Consultant<br />
      Switchboard Public Relations<br />
      <a href="mailto:karli@switchboardpr.com">karli@switchboardpr.com</a><br />
      778-401-6040</p>
      {showMediaKit ? (
        <p className="pt-12"><a href="https://drive.google.com/drive/u/1/folders/1K5jO9_g1h8QyvHaBOCG_jQMouyA0XMJS" target="_blank" rel="noopener noreferrer" className="pt-12">View our media kit</a>.</p>
      ) : null}
    </React.Fragment>
  )

}

export default MediaContact