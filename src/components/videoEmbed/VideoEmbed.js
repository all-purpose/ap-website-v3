import React, {useState} from 'react';
import {RichText} from 'prismic-reactjs';
import './VideoEmbed.scss';

const VideoEmbed = ({sectionId, sectionCssClass, embedCode, transcriptBtnText, transcript}) => {

  let embedCodeText = embedCode.richText[0].text || '';

  const [transcriptExpanded, setTranscriptExpanded] = useState(false);

  const outputVideoEmbed = (containerId, containerCssClass, children
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

    let className = "video-embed"

    if (containerCssClass) {
      className += ` ${containerCssClass}`
    }
    return className
  }

  const outputTranscript = (transcriptBtnText, transcript) => {

    if (!transcript.richText[0]?.text) {
      return false;
    }

    let btnText = transcriptBtnText ? transcriptBtnText : 'Text transcript of video';

    return (
      <div className="transcript">
        <div className="flex justify-end mt-4">
          <button className="transcript-btn" aria-expanded={transcriptExpanded} type="button" onClick={handleChangeExpanded}>
            <svg className="transcript-btn-indicator" viewBox="0 0 10 10" aria-hidden="true" focusable="false">
              <rect className="vert" height="8" width="2" y="1" x="4" />
              <rect height="2" width="8" y="4" x="1" />
            </svg>
            <span className="transcript-btn-text">
              {btnText}
            </span>
          </button>
        </div>
        <div className="transcript-content body-long-02" aria-hidden={!transcriptExpanded}>
          <RichText render={transcript.richText} />
        </div>
      </div>

    )

  }

  const handleChangeExpanded = () => {
    if (transcriptExpanded) {
      setTranscriptExpanded(false);
    } else {
      setTranscriptExpanded(true)
    }
  }

  return outputVideoEmbed(
    sectionId,
    sectionCssClass,
    <div className="container">
      <div className="embed" dangerouslySetInnerHTML={{__html: embedCodeText}}></div>
      {transcript && (
        outputTranscript(transcriptBtnText, transcript)
      )}
    </div>
  )

}

export default VideoEmbed;