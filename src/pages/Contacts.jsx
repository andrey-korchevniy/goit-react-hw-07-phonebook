import React from 'react';
import { ContactsTable } from 'components/ContactsTable/ContactsTable';
import PropTypes from 'prop-types';

export const Contacts = ({ filter }) => {
  console.log(filter);
  return <ContactsTable trash={false} filter={filter} />;
};

Contacts.propTypes = {
  filter: PropTypes.string.isRequired,
};
