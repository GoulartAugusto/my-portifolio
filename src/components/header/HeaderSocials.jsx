import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://github.com/GoulartAugusto' target="_black"><BsGithub /></a>
        <a href='https://facebook.com/augusto.goulart.95' target="_black"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials