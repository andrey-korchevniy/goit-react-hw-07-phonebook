import React from 'react';
import { ContactsTable } from 'components/ContactsTable/ContactsTable';
import PropTypes from 'prop-types';

export const Trash = ({ filter }) => {
  return <ContactsTable trash={true} filter={filter} />;
};

Trash.propTypes = {
  filter: PropTypes.string.isRequired,
};
