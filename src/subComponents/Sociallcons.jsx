import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github, Notion, Blog, Instagram } from "../components/AllSvgs";

const SocialIcons = () => {
  return (
    <div>
      <div>
        <NavLink to="/">
          <Github width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>

      <div>
        <NavLink to="/">
          <Blog width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/">
          <Notion width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/">
          <Instagram width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
    </div>
  );
};

export default SocialIcons;
