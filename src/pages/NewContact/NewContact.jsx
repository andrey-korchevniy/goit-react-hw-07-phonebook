import React from 'react';
import { SvgClear } from 'images/Svg';
import { Link } from 'react-router-dom';
import { NewContactForm } from 'components/NewContactForm/NewContactForm';
import {
  useCreateContactMutation,
  useGetMockApiQuery,
} from 'redux/mockApiSlice';

export const NewContact = () => {
  const { data } = useGetMockApiQuery();
  const [createContact] = useCreateContactMutation();

  const hundleSubmit = (e, { resetForm }) => {
    const { name, number } = e;
    resetForm();
    // check if there are any such contacts
    if (
      data.map(el => (el = el.name)).includes(name) ||
      data.map(el => (el = el.phone)).includes(number)
    ) {
      alert(`Цей контакт вже є у книзі`);
    } else {
      createContact({
        name: name,
        phone: number,
        isDeleted: false,
      });
    }
  };

  return (
    <>
      <Link to={'/'}>
        {' '}
        <SvgClear />
      </Link>
      <NewContactForm hundleSubmit={hundleSubmit} />
    </>
  );
};
