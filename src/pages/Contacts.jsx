import React from 'react';
import { ContactsTable } from 'components/ContactsTable/ContactsTable';
import { FilterBar } from 'components/FilterBar/FilterBar';
import { useState } from 'react';

const Contacts = () => {
  const [filter, setFilter] = useState('');

  const hundleFilterCahge = value => {
    setFilter(value.currentTarget.value);
  };

  const handleClearClick = () => {
    setFilter('');
  };

  return (
    <>
      <FilterBar
        value={filter}
        onSubmit={hundleFilterCahge}
        onClear={handleClearClick}
      />
      <ContactsTable trash={false} filter={filter} />
    </>
  );
};

export default Contacts;
