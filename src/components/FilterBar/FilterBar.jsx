import {
  FilterForm,
  FilterField,
  FilterBtn,
  ClearFilterBtn,
} from './FilterBar.styled';
import { Formik } from 'formik';
import { SvgSearch, SvgClear } from 'images/Svg';
import PropTypes from 'prop-types';

export const FilterBar = ({ value, onSubmit, onClear }) => {
  return (
    <Formik initialValues={value}>
      <FilterForm>
        <FilterBtn>
          <SvgSearch />
        </FilterBtn>
        <FilterField
          type="text"
          name="filter"
          placeholder="Search contacts"
          onChange={onSubmit}
          required
          value={value}
          autoComplete="off"
        />
        <ClearFilterBtn type="clear" onClick={onClear}>
          <SvgClear />
        </ClearFilterBtn>
      </FilterForm>
    </Formik>
  );
};

FilterBar.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};
