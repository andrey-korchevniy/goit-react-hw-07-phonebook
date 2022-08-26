import React from 'react';
import { ContactsTable } from 'components/ContactsTable/ContactsTable';
import { FilterBar } from 'components/FilterBar/FilterBar';
import { useState } from 'react';

const Trash = () => {
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
      <ContactsTable trash={true} filter={filter} />
    </>
  );
};

export default Trash;
