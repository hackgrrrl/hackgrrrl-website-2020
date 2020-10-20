import React from 'react';
import {Container, Item, LeftDivision, RightDivision, Logo} from './styles';
import logo from '../../assets/images/icon_pc@2x.png';

function Header(){
  return(
    <Container>
      <LeftDivision>
      <Logo src={logo} alt='hack grrrl'/>
      </LeftDivision>
      <Item>
        o que é
      </Item>
      <Item>
        edições anteriores
      </Item>
      <Item>
        quem faz
      </Item>
      <Item>
        edição 2020
      </Item>
      <RightDivision>
        fale conosco
      </RightDivision>
    </Container>
  );
}

export default Header