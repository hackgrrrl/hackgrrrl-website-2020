import React from 'react';
import {Container, Item, Division} from './styles';

function Header(){
  return(
    <Container>
      <Division></Division>
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
      <Division>
        fale conosco
      </Division>
    </Container>
  );
}

export default Header