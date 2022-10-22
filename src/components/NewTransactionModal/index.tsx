import React from 'react';
import Modal from 'react-modal';
import closeSvg from '../../assets/fechar.svg';
import incomeSvg from '../../assets/entradas.svg';
import outcomeSvg from '../../assets/saidas.svg';
import { Container, TransactionTypeContainer } from './style';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeSvg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeSvg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={outcomeSvg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
