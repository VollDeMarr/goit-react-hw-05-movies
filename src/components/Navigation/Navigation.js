import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import s from './Navigation.module.css';

const StyledLink = styled(NavLink)`
  color: black;
  padding-left: 20px;
  &.active {
    color: orange;
  }
`;
export default function Navigation() {
  return (
    <nav className={s.nav}>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </nav>
  );
}
