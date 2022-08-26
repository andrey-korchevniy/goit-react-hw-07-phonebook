import { Table, HeadRow, HeadCell } from './ContactsTable.styled';
import { ContactRow } from './ContactRow/ContactRow';
import { useGetMockApiQuery } from 'redux/mockApiSlice';
import PropTypes from 'prop-types';

export const ContactsTable = ({ trash, filter }) => {
  const { data, isSuccess } = useGetMockApiQuery('', { refetshOnFocus: true });

  // makes a list for render if request is success
  if (isSuccess) {
    const contactForRender = data.filter(
      ({ name, phone, isDeleted }) =>
        isDeleted === trash && (name.includes(filter) || phone.includes(filter))
    );

    return (
      <Table>
        <HeadRow>
          <tr>
            <HeadCell>Name</HeadCell>
            <HeadCell>Phone number</HeadCell>
            <HeadCell>Action</HeadCell>
          </tr>
        </HeadRow>
        <tbody>
          {contactForRender.map(contact => (
            <ContactRow
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.phone}
              isDeleted={contact.isDeleted}
            />
          ))}
        </tbody>
      </Table>
    );
  }
};

ContactsTable.propTypes = {
  trash: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
};
