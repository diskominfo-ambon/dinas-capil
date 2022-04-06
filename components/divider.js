import styled from 'styled-components';
import Container from './container';

const WrapperDivider = styled.div`
  background-color: var(--primary);
  padding: 1rem 0;
`;

const ContainerRow = styled(Container)`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({theme}) => theme.size.small}) {
    display: block;
  }

`;
const Title = styled.h2`
  color: white;
  font-size: 1.2rem;
  font-family: 'Raleway', sans-serif;
  margin-bottom: .9rem;
`;
const Subtitle = styled.p`
color: white;
font-size: .9rem;
font-family: 'Raleway', sans-serif;
margin: 0;

@media screen and (min-width: ${({theme}) => theme.size.small}) {
    margin-left: .7rem;

    &::before {
      content: '';
      border-radius: 4px;
      margin-right: .7rem;
      background-color: white;
      display: inline-block;
      height: 1.2rem;
      width: 4px;
      position: relative;
      top: .2rem;
    }
  }

`;

export default function Divider({title, subtitle}) {

  return (
    <WrapperDivider>
      <ContainerRow>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContainerRow>
    </WrapperDivider>
  );
}