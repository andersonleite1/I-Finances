import React from 'react';
import logo from '../../assets/logo.svg';
import { Header, HeaderContent } from './style';

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
}

export default function index({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Header>
      <HeaderContent>
        <img src={logo} alt="My Finances" />
        <button
          type="button"
          onClick={onOpenNewTransactionModal}
        >
          Nova transação
        </button>
      </HeaderContent>
    </Header>
  );
}
