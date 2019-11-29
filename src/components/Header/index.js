import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';
import Logo from '../../assets/images/logo.png';

 function Header({ cartSize }) {
   
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

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);