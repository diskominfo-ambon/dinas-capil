import Layout from '@/components/mengenal-kami/layout';
import styled from 'styled-components';

const Heading = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.2rem;
`;
const Paragraph = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 30px;
  margin: 0;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: .8rem;
  display: block;
`;

const List = styled.ul`
  list-style: numeric;
`;
const ListItem = styled.li`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-bottom: .9rem;
`;

export default function About() {

  return (
    <Layout breadcrumb="Tentang">
      <Heading>Visi dan Misi</Heading>
      <Image src="https://ambon.go.id/wp-content/uploads/2022/07/VISI-MISI.jpg"/>
     
      <Heading>Motto</Heading>
      <Image src="https://ambon.go.id/wp-content/uploads/2021/06/moto-1.png"/>

      <Heading>Makmulat Pelayanan</Heading>
      <Image src="https://ambon.go.id/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-01-at-01.06.46.jpeg"/>

      <Heading>11 Kebijakan Prioritas</Heading>
      <Image src="https://ambon.go.id/wp-content/uploads/2022/07/11-Kebijakan-Prioritas.jpeg"/>

      <Heading>Struktur Organisasi</Heading>
      <Image src="https://ambon.go.id/wp-content/uploads/2022/04/3.-Capil.png"/>

     
    </Layout>
  );
}


