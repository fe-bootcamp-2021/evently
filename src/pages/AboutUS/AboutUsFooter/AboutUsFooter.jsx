import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function AboutUsFooter() {
  return (
    <>
      <div className="text-sm px-8 text-center flex-none py-4 space-x-3">
        <Link
          to="https://www.linkedin.com/"
        >
          <i>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </i>
        </Link>
        <a
          href="https://www.facebook.com"
          target="_blank"
          aria-label="facebook-link"
        >
          <i>
            <FontAwesomeIcon icon={faFacebookF} />
          </i>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          aria-label="twitter-link"
        >
          <i>
            <FontAwesomeIcon icon={faTwitter} />
          </i>
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          aria-label="github-link"
        >
          <i>
            <FontAwesomeIcon icon={faGithub} />
          </i>
        </a>
      </div>
      <FontAwesomeIcon icon={faCopyright} />
      Copyright 2021
    </>
  );
}
