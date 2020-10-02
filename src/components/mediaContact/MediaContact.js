import React from "react"

const MediaContact = ({ showMediaKit }) => {

  return (
    <React.Fragment>
      <h3 className="eyebrow mt-16 block">Media Contact</h3>
      <p>Karli Leitl, Communications Consultant<br />
      Switchboard Public Relations<br />
      <a className="underline" href="mailto:karli@switchboardpr.com">karli@switchboardpr.com</a><br />
      778-401-6040</p>
      {showMediaKit ? (
        <p className="pt-12"><a className="underline" href="https://drive.google.com/drive/u/1/folders/1uoCzyowr8UCb159RrRLnbyz23JgpNumu" target="_blank" rel="noopener noreferrer">View our media kit</a>.</p>
      ) : null}
    </React.Fragment>
  )

}

export default MediaContact