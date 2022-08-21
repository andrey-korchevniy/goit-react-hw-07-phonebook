import { Routes, Route } from 'react-router-dom';
import { Layout } from 'layout/Layout';
import { Contacts } from 'pages/Contacts';
import { NewContact } from 'pages/NewContact/NewContact';
import { Trash } from 'pages/Trash/Trash';
import { useState } from 'react';

export const App = () => {
  const [filter, setFilter] = useState('');

  const hundleFilterCahge = value => {
    setFilter(value.currentTarget.value);
  };

  const handleClearClick = () => {
    setFilter('');
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            filter={filter}
            onChange={hundleFilterCahge}
            onClear={handleClearClick}
          />
        }
      >
        <Route index element={<Contacts filter={filter} />} />
        <Route path="trash" element={<Trash filter={filter} />} />
        <Route path="newcontact" element={<NewContact />} />
      </Route>
    </Routes>
  );
};
