import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";


export default function MenuButton(props) {
    const {item} = props;
    return (
        <Link to={item.link}>
            <MenuItem title={item.title}>
                <img src={item.icon} alt={item.title}/>
                {item.title}
            </MenuItem>
        </Link>
    )
}


const MenuItem = styled.div`
  color: rgba(255, 255, 255, .7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: ${props => props.title ? "10px" : "0"};
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  transition: .5s ease-out;

  :hover {
    background: rgba(255, 255, 255, .1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, .1), inset 0 0 0 .5px rgba(255, 255, 255, .2);

  }
`

