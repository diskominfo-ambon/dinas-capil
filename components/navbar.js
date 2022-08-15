import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from './container';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import LinkDropdown from './link-dropdown';
import { useRouter } from 'next/router';
import Image from 'next/image';

const ContainerFlexRow = styled(Container)`
  display: flex;
  justify-content: space-between;
`;
const Header = styled.header`
  // border-bottom: 1px solid #ddd;
  padding: 1rem 0;
  background-color: var(--primary);
`;
const FormGroup = styled.div`
  border: 1px solid #ddd;
  align-self: center;
  flex: 1;
  overflow: hidden;
  display: flex;
  border-radius: 5px;
`;
const Content = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 100%;
  padding: .6rem .8rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  border: none;
  outline: none;
  font-size: .9rem;

  &::placeholder {
    color: #B7B7B7;
  }
`;
const Submit = styled.button`
  border: none;
  border-left: 1px solid #ddd;
  width: 40px;
  cursor: pointer;

  &:hover {
    opacity: .8;
  }
  > svg path {
    color: var(--light);
  }
`;


const NavbarBrand = styled(Image)`
  margin: 0;
  display: block;
  filter: saturate(0) brightness(100);
`;
const NavbarCollapse = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 2rem;
`;
const NavbarItem = styled.li`
  display: inline-block;
  font-family: 'Plus Jakarta Sans', sans-serif;
  // padding: .7rem ;
  font-size: .9rem;


  &:first-child {
    // padding: .7rem .9rem .7rem 0;
  }

  > a {
    text-decoration: none;
    position: relative;
    color: white;
    padding: .6rem 1rem;
    border-radius: 4px;

    svg  path {
      fill: white;
    }

    ${
      props => props.active && `
        color: white;
        background-color: gray;
        // &::before {
        //   content: '';
        //   display: block;
        //   position: absolute;
        //   width: 100%;
        //   height: 3px;
        //   background-color: white;
        //   top: 1.75rem;
        // }
      `
    }

  }

  &::after {
    // content: '';
    // display: inline-block;
    // height: 20px;
    // width: 1px;
    // background-color: #ddd;
    // position: relative;
    // left: 12px;
    // top: 4px;
  }

  &:last-child::after {
    display: none;
  }
`;

export default function Navbar() {

  const router = useRouter();

  return (
    <Header>
      <ContainerFlexRow>
        <Content>
          <NavbarBrand src="/static/img/logo-dinas.png" height={40} width={40} alt="logo kominfo"/>
          <NavbarCollapse>
            <NavbarItem active={router.pathname === '/'}>
              <Link href="/" passHref>
                Beranda
              </Link>
            </NavbarItem>
            <NavbarItem
              active={/mengenal-kami/.test(router.pathname)}
            >
              <LinkDropdown
                text="Mengenal kami"
                menus={[
                  { to: '/mengenal-kami/tentang', text: 'Tentang'},
                  // { to: '/mengenal-kami/tugas', text: 'Tugas dan fungsi'},
                 
                ]}
              />
            </NavbarItem>

            {/* <NavbarItem  active={router.pathname === '/pengumuman'}>
              <Link href="/pengumuman" passHref>Pengumuman</Link>
            </NavbarItem>
            <NavbarItem active={/informasi/.test(router.pathname)}>
              <LinkDropdown
                text="Kegiatan & Informasi"
                menus={[
                  { to: '/informasi/kegiatan', text: 'Kegiatan' },
                  { to: '/informasi/agenda', text: 'Informasi agenda' }
                ]}
              />
            </NavbarItem> */}
            <NavbarItem>
              <LinkDropdown
                text="Layanan"
                menus={[
                  { blank: true, to: 'https://ambon.go.id/wp-content/uploads/2021/02/Standar-Palayana-DisdukCapil.pdf', text: 'Standar Pelayanan DisdukCapil'},
                  { blank: true, to: 'https://ambon.go.id/wp-content/uploads/2021/06/banner-pengaduan.pdf', text: 'Standar pengaduan'},
  
                  { blank: true, to: 'https://ambon.go.id/wp-content/uploads/2022/08/Lampiran-STANDAR-PELAYANAN-2022.pdf', text: 'Lampiran STANDAR PELAYANAN 2022'},

                ]}
              />
            </NavbarItem>
          </NavbarCollapse>
        </Content>
      </ContainerFlexRow>
    </Header>
  );
}