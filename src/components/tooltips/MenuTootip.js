import React from "react";
import styled from "styled-components";
import MenuButton from "../buttons/MenuButton";
import {tooltipData} from "../../data/menudata";


export default function MenuTootip(props) {
    const {isOpen} = props;

    return (
        <Wrapper isOpen={isOpen}>
            {tooltipData.map((item, index) => (
                <MenuButton item={item} key={index}/>
            ))}
        </Wrapper>
    )
}


const Wrapper = styled.div`
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.25), inset 0 0 0 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;

  padding: 20px;
  position: absolute;
  top: 60px;
  right: 30px;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  z-index: 1;
  display: grid;
  gap: 10px;
  grid-template-columns: 150px;

  transition: .3s ease-in-out;

  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};

  transform: ${props => (props.isOpen ?
                  'skewY(0deg) rotate(0deg) translateY(0px)' :
                  'skewY(-5deg) rotate(5deg) translateY(-30px)'
  )};
`
