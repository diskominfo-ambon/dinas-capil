import Head from 'next/head';
import styled from 'styled-components'

import BlockqouteNotice from '@/components/blockqoute-notice';
import GovermentGoals from '@/components/government-goals';
import Divider from '@/components/divider';
import Post from '@/components/post';
import Container from '@/components/container';

const title = 'Pemerintah Kota Ambon &#8211; Laman resmi Dinas komunikasi, informatika dan persandian kota Ambon';



const WeatherText = styled.p``;
const Section = styled.div``;
const SectionTitle = styled.h2``;
const SectionSubtitle = styled.p``;

const Box = styled.div`
  border: 1px solid #ddd;
  padding: .8rem 1rem;
  border-radius: 3px;
  margin-bottom: .9rem;
  font-size: .9rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ContainerFlexRow = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 1000px;
`;
const Heading = styled.div`
  display: flex:
  font-size: 1.3rem;
  text-align: center;

`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          {title}
        </title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <WeatherText>Informasi cuaca</WeatherText>
      </Section>

      <Section>
        <BlockqouteNotice/>
      </Section>

      <Section>
        <Divider
          title="Tujuan visi dan misi"
          subtitle="Tujuan visi dan misi diskominfo pemerintah kota"
        />
        <GovermentGoals/>
      </Section>

      <Section>
        <Divider
          title="Informasi  berita lainnya"
          subtitle="Kumpulan informasi dan berita terkini"
        />

        <Container>
          <Post />
        </Container>

      </Section>
    </div>
  );
}
