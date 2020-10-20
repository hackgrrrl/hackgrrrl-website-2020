import React from 'react';
import {Container, Logo} from './styles';
import logo from '../../assets/images/titulo@2x.png';

function Banner() {
 return (
 <Container>
  <Logo src={logo} alt='hack grrrl'/>
 </Container>
 );
}

export default Banner