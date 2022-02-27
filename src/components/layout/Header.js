import React, {useState} from "react";
import {Link} from "gatsby";
import styled from "styled-components";
import {menuData} from '../../data/menudata';
import MenuButton from "../buttons/MenuButton";
import MenuTootip from "../tooltips/MenuTootip";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick(event) {
        setIsOpen(!isOpen);
        event.preventDefault()
    }

    return (
        <Wrapper>
            <Link to="/">
                <img src="/images/logos/logo.svg" alt="logo"/>
            </Link>
            <MenuWrapper count={menuData.length}>
                {menuData.map((item, index) => item.link === "/account" ?
                    (
                        <MenuButton item={item} key={index} onClick={event => handleClick(event)}/>
                    )
                    : (
                        <MenuButton item={item} key={index}/>
                    ))}
                <HamburgerWrapper>
                    <MenuButton item={{title: "", icon: "/images/icons/hamburger.svg", link: ""}}/>
                </HamburgerWrapper>
            </MenuWrapper>
            <MenuTootip isOpen={isOpen}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;

  @media (max-width: 768px) {
    top: 30px;
  }

  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`
const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);

  @media (max-width: 768px) {
    > a {
      display: none;
    }

    grid-template-columns: auto;
  }


`

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`


