import React from 'react';
import logo from '../../assets/logo.svg';
import { Header, HeaderContent } from './style';

export default function index() {
  return (
    <Header>
      <HeaderContent>
        <img src={logo} alt="My Finances" />
        <button type="button">Nova transação</button>
      </HeaderContent>
    </Header>
  );
}
