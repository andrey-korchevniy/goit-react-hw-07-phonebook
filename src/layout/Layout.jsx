import { Outlet } from 'react-router-dom';
import { Container, Main } from './Layout.styled';
import { NavMenu } from './NavMenu/NavMenu';
import { FilterBar } from './FilterBar/FilterBar';
import PropTypes from 'prop-types';

export const Layout = ({ filter, onChange, onClear }) => {
  return (
    <Container>
      <NavMenu />
      <FilterBar value={filter} onSubmit={onChange} onClear={onClear} />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

Layout.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};
