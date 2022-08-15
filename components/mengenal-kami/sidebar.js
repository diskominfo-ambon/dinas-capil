import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';



const SidebarCollapse = styled.aside`
  flex: 1;
  border: 1px solid #ddd;
  margin-right: 1.2rem;
  border-radius: 3px;
  position: sticky;
  top: 20px;
  display: inline-block;
  height: max-content;

`;

const SidebarTitle = styled.h2`
  text-align: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: .9rem;

  svg {
    display: inline-block;
    margin-right: .8rem;
  }
`;

const SidebarContent = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const SidebarItem = styled.li`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: .9rem;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: 0;
  }

  > a {
    text-decoration: none;
    padding: 1rem;
    display: block;

    ${
      props => props.active && `
        color: var(--primary);
        font-weight: 700;
      `
    }
  }
`;


export default function Sidebar() {

  const router = useRouter();


  return (
    <SidebarCollapse>
      <SidebarTitle>
        <FontAwesomeIcon icon={faBars} />
        Tinjauan cepat
      </SidebarTitle>

      <SidebarContent>
        <SidebarItem active={/tentang/.test(router.pathname)}>
          <Link href="/mengenal-kami/tentang" passHref>Tentang</Link>
        </SidebarItem>
        {/* <SidebarItem active={/tugas/.test(router.pathname)}>
          <Link href="/mengenal-kami/tugas" passHref>Tugas dan fungsi</Link>
        </SidebarItem> */}
        {/* <SidebarItem active={/command-center/.test(router.pathname)}>
          <Link href="/mengenal-kami/command-center" passHref>Command Center</Link>
        </SidebarItem> */}
      </SidebarContent>
    </SidebarCollapse>
  );
}