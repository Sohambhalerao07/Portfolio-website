import React from "react";
import PropTypes from "prop-types";
import githubimg from "../images/github.png"
import mailimg from "../images/mail.png"
import youtubeimg from "../images/youtube.png"
import instagramimg from "../images/instagram.png"
import linkedinimg from "../images/linkedin.png"
import twitterimg from "../images/twitter.png"


const Footer = (props) => {
  const {
    name,
    email,
    gitHub,
    instagram,
    linkedIn,
    twitter,
    youTube,
  } = props;

  return (
    <div
      id="footer"
      className={`flex flex-col items-center gap-10 py-20 bg-white w-screen`}
    >
      <div className="flex justify-center gap-10">
        {email && (
          <a href={`mailto:${email}`}>
            <img
              src={mailimg}
              alt="email"
              className="socialIcon h-10 w-10 transition-transform transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-white"
            />
          </a>
        )}

        {gitHub && (
          <a
            href={`https://github.com/${gitHub}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubimg}
              alt="GitHub"
              className="h-10 w-10 socialIcon transition-transform transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-white"
            />
          </a>
        )}
        
        {instagram && (
          <a
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramimg}
              alt="Instagram"
              className="socialIcon h-10 w-10 transition-transform transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-white"
            />
          </a>
        )}
        
        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinimg}
              alt="LinkedIn"
              className="socialIcon h-10 w-10 transition-transform transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-white"
            />
          </a>
        )}

        {twitter && (
          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitterimg}
              alt="Twitter"
              className="socialIcon h-10 w-10 transition-transform transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-white"
            />
          </a>
        )}
        
        {youTube && (
          <a
            href={`https://www.youtube.com/c/${youTube}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={youtubeimg}
              alt="YouTube"
              className="socialIcon h-10 w-10 transition-transform transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-white"
            />
          </a>
        )}
      </div>
      <p className="mt-0 text-black text-sm">Created by {name}</p>
      <p className="mt-0 text-black text-sm">Copyright © 2010-2024 </p>
    </div>
  );
};

Footer.propTypes = {
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Footer;
