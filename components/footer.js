import styled from 'styled-components';
import Container from './container';
import Image from 'next/image';

const contacts = [
  {
    'key': 'email',
    'source': 'mailto:diskominfosandi@ambon.go.id',
    'title': 'diskominfosandi@ambon.go.id'
  },
  {
    'key': 'youtube',
    'source': 'https://www.youtube.com/c/PEMERINTAHKOTAAMBON',
    'title': 'Youtube'
  },
  {
    'key': 'ig',
    'source': 'https://www.instagram.com/tabea_amq',
    'title': 'Instagram'
  },
];

const Layout = styled.footer`
  padding-bottom: 2rem;
`;

const FlexRow = styled(Container)`
  display: flex;
  align-items: center;
  padding: .7rem 0;

  @media screen and (max-width: ${({theme}) => theme.size.medium}) {
    display: block;
    padding: 1rem;
  }
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 500;
  font-size: .8rem;
  color: gray;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
`;

const ListItem = styled.li`
  font-size: .9rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 400;
  margin-right: .7rem;

  &:last-child {
    margin-right: 0;
  }
`;

const BrandImage = styled(Image)`
  filter: saturate(0);
  display: block;
`;

const FooterBrand = styled.div`
  flex: 1;
`;
const FooterSupported = styled.div``;

export default function Footer() {
  return (
    <Layout>
      <style global jsx>{`
          hr {
            height: 1px;
            background-color: #ddd;
            border: none;
            display: block;
            margin-bottom: 1rem;
          }
        `
      }
      </style>
      <Container>
        <FlexRow>
          <FooterBrand>
            <List>
              <ListItem><BrandImage width="35" height="35" src="/static/img/logo-dinas.png" alt="kominfo" layout="fixed"/></ListItem>
              <ListItem><Paragraph>Jl. Sultan Hairun No. 1 Gd. C Lt. 4 kantor Balai kota Ambon</Paragraph></ListItem>
            </List>
          </FooterBrand>
          <FooterSupported>
            <List>
              <ListItem><BrandImage width="35" height="35" src="/static/img/ambon.png" alt="kominfo" layout="fixed"/></ListItem>
              <ListItem><BrandImage width="35" height="35" src="/static/img/prov.png" alt="kominfo" layout="fixed"/></ListItem>
            </List>
          </FooterSupported>
        </FlexRow>
        <hr/>
        <List>
          <ListItem><Image src="/static/img/facebook.webp" width="20" height="20" layout="fixed" alt="fb"/></ListItem>
          <ListItem><Image src="/static/img/instagram.webp" width="20" height="20" layout="fixed" alt="instagram"/></ListItem>
          <ListItem><Paragraph>Copyright 2020 Dinas Komunikasi, Informatika dan Persandian kota Ambon. All rights reserved.</Paragraph></ListItem>
        </List>
      </Container>
    </Layout>
  );
}