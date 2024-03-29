import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';
import Logo from '../../assets/images/logo.png';

export default function Header() {
   const cartSize = useSelector(state => state.cart.length);
   
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Rocketshoes"/>
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu Carriho</strong>
          <span>{cartSize} Items</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF"/>
      </Cart>
    </Container>
    );
}

