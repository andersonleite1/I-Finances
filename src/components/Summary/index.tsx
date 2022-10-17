import React from 'react';
import Container from './style';
import incomeSvg from '../../assets/entradas.svg';
import outcomeSvg from '../../assets/saidas.svg';
import totalSvg from '../../assets/total.svg';

export default function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeSvg} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeSvg} alt="Saídas" />
        </header>
        <strong>- R$ 500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalSvg} alt="Total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}
