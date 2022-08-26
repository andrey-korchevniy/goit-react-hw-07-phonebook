import React from 'react';
import { SvgClear } from 'images/Svg';
import { Link } from 'react-router-dom';
import { NewContactForm } from 'components/NewContactForm/NewContactForm';
import {
  useCreateContactMutation,
  useGetMockApiQuery,
} from 'redux/mockApiSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({ position: 'center-top' });

const NewContact = () => {
  const { data } = useGetMockApiQuery({ refetshOnFocus: true });
  const [createContact] = useCreateContactMutation();

  const hundleSubmit = e => {
    const { name, phone } = e;

    // check if there are any such contacts
    if (data.map(el => (el = el.name)).includes(name)) {
      Notify.failure(`A contact with name ${name} already is in your book`);
    } else if (data.map(el => (el = el.phone)).includes(phone)) {
      Notify.failure(`A contact with phone ${phone} already is in your book`);
    } else {
      createContact({
        name: name,
        phone: phone,
        isDeleted: false,
      });
      Notify.success(`The contact ${name} has been created`);
      document.location.reload();
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

export default NewContact;
