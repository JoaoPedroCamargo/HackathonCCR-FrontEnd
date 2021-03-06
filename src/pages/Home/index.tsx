import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  ContainerTopics,
  Content,
  TopicOne,
  Counter,
  ContainerText,
} from './styles';

import NavBar from '../../components/NavBar/Navbar';
import BottomNav from '../../components/BottomNav/BottomNav';

import Icon1 from '../../assets/comoefeito.png';
import Icon2 from '../../assets/industrializacao.png';
import Icon3 from '../../assets/vendasedoacao.png';
import paperMaking from '../../assets/papermaking.png';
import backgroundImg from '../../assets/counterbackground.png';
import backgroundImage from '../../assets/BackgroundHome.png';

const Home: React.FC = () => {
  const history = useHistory();

  function goToProducts() {
    history.push('/products');
  }

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        width: '100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <NavBar page="home" />
        <ContainerTopics>
          <Content>
            <h2>Qual o nosso Objetivo?</h2>
            <p>
              Nosso objetivo é levar não só doações como uma forma de trabalho
              para comunidades necessitadas. Para isso, sempre que arrecadamos a
              quantidade de dinheiro necessária fazemos uma doação do nosso kit
              de ferramentas para fazer papel reciclável.
            </p>
          </Content>
          <img id="objective" src={paperMaking} alt="paperMaking" />
        </ContainerTopics>
        <ContainerTopics>
          <TopicOne>
            <p>
              <img src={Icon1} alt="topicOne" />
            </p>
            <h3>Como é feito o papel</h3>
            <p>
              Através das doeações serão compradas as ferramentas para fazer
              papel. Elas serão entregues para comunidades carentes e nossa
              equipe irá ensina-las a fazer o papel reciclável.
            </p>
          </TopicOne>
          <TopicOne>
            <p>
              <img src={Icon2} alt="topicOne" />
            </p>
            <h3>Industrialização</h3>
            <p>
              Com o papel feito, nós compraremos ele das comunidades para
              fabricar cadernos, blocos de notas e blocos de folhas.
            </p>
          </TopicOne>
          <TopicOne>
            <p>
              <img src={Icon3} alt="topicOne" />
            </p>
            <h3>Vendas e Doações</h3>
            <p>
              Todo produto que verdermos terá parte do seu lucro voltado para
              capacitação de mais pessoas. A porcentagem dos lucros que irá para
              a caridade é escolhida pelo próprio comprador.
            </p>
          </TopicOne>
        </ContainerTopics>
        <ContainerTopics>
          <img id="counter" src={backgroundImg} alt="backgroundImg" />
          <Counter>
            <h1>Todas venda é convertida em doações</h1>
            <h2>173.192</h2>
            <p>Produtos vendidos</p>
            <button type="button" onClick={goToProducts}>
              <h1>Faça a diferença</h1>
            </button>
          </Counter>
        </ContainerTopics>
        <ContainerTopics>
          <ContainerText>
            <h1>Fique por dentro das notícias!</h1>
            <p>
              Se inscreva no nosso newsletter para ficar a par de tudo que
              estamos fazendo!
            </p>
            <div>
              <input
                type="text"
                name="email"
                placeholder="seu.email@email.com"
              />
              <button type="button">
                <h1>Se inscrever</h1>
              </button>
            </div>
          </ContainerText>
        </ContainerTopics>
        <BottomNav />
      </Container>
    </div>
  );
};

export default Home;
