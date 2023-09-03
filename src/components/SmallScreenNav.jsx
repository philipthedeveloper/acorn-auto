import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../data/nav-data";

const SmallScreenNav = () => {
  const toggleNav = () => {
    document.querySelector("#nav-bar")?.classList.toggle("show");
  };

  return (
    <NavContainer>
      <NavContentContainer>
        <ToggleNavButton onClick={toggleNav}>
          <i className="fi fi-br-menu-burger"></i>
        </ToggleNavButton>
        <Aside>
          <ToggleLocationButton>
            <i className="fi fi-ss-marker"></i>
          </ToggleLocationButton>
          <TelLink href="tel:+234493054">
            <i className="fi fi-sr-phone-flip"></i>
          </TelLink>
        </Aside>
      </NavContentContainer>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: none;
  @media (max-width: 928px) {
    display: block;
  }
`;

const NavContentContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

const ToggleNavButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 2rem;
  background: transparent;
  color: var(--black);

  i {
    display: flex;
    align-items: center;
  }
`;

const ToggleLocationButton = styled(ToggleNavButton)``;

const TelLink = styled.a`
  color: var(--black);
  font-size: 2rem;

  i {
    display: flex;
    align-items: center;
  }
`;

const Aside = styled.aside`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
export default SmallScreenNav;
