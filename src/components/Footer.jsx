import React from "react";
import PropTypes from "prop-types";
import githubimg from "../images/github.png";
import mailimg from "../images/mail.png";
import youtubeimg from "../images/youtube.png";
import instagramimg from "../images/instagram.png";
import linkedinimg from "../images/linkedin.png";
import twitterimg from "../images/twitter.png";

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
      className="flex flex-col items-center gap-6 py-10 bg-white w-full rounded-lg"
    >
      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {email && (
          <a href={`mailto:${email}`}>
            <img
              src={mailimg}
              alt="email"
              className="h-8 w-8 md:h-10 md:w-10 transition-transform transform hover:scale-110 hover:-translate-y-1"
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
              className="h-8 w-8 md:h-10 md:w-10 transition-transform transform hover:scale-110 hover:-translate-y-1"
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
              className="h-8 w-8 md:h-10 md:w-10 transition-transform transform hover:scale-110 hover:-translate-y-1"
            />
          </a>
        )}

        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/soham-bhalerao-4a754225a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinimg}
              alt="LinkedIn"
              className="h-8 w-8 md:h-10 md:w-10 transition-transform transform hover:scale-110 hover:-translate-y-1"
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
              className="h-8 w-8 md:h-10 md:w-10 transition-transform transform hover:scale-110 hover:-translate-y-1"
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
              className="h-8 w-8 md:h-10 md:w-10 transition-transform transform hover:scale-110 hover:-translate-y-1"
            />
          </a>
        )}
      </div>

      {/* Footer Text */}
      <p className="text-black text-xs md:text-sm">Created by {name}</p>
      <p className="text-black text-xs md:text-sm">Copyright © 2023-2024</p>
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
