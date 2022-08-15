import styled from 'styled-components';
import Container from './container';
import Image from 'next/image';

const LinearGradient = styled.div`
  padding: 4rem 2rem;
  background: linear-gradient(180deg, orange 250px, white);
`;

const Content = styled.div`
  margin: 1.5rem 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: white;
`;

const AuthorName = styled.span`
  color: white;
  font-size: .9rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 300;
`;

const Heading = styled.h2`
  color: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
`;


export default function Blockqoute(props) {

  return (
    <LinearGradient>
      <Container>
        {props.children}
      </Container>
    </LinearGradient>
  );
}


const BlockqouteCaption = (props) => {
  return (
    <AuthorName>
      {props.children}
    </AuthorName>
  )
};


Blockqoute.Content = Content;
Blockqoute.Caption = BlockqouteCaption;
Blockqoute.Heading = Heading;