import React from "react";
import PropTypes from "prop-types";
import "./youtube.css"
const YoutubeEmbed = ({ embedId, button }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="800"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="autoplay"
      allowFullScreen
      title="Embedded youtube"
      onClick={button}
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
};

export default YoutubeEmbed;