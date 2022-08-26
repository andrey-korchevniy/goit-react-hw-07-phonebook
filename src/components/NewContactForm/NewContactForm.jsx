import { Formik, Form } from 'formik';
import { ContactInputLine } from './ContactInputLine/ContactInputLine';
import { Button } from 'pages/NewContact/NewContact.styled';
import * as yup from 'yup';
import 'react-phone-input-2/lib/style.css';
import PropTypes from 'prop-types';

const validationSchema = yup.object().shape({
  name: yup.string().min(3).required(),
});

export const NewContactForm = ({ hundleSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      onSubmit={hundleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Button type="submit">Save</Button>
        <hr></hr>
        <ContactInputLine
          type="text"
          name="name"
          title="Name cam contain only letters, numbers and defis"
          placeholder="Name"
        />
        <ContactInputLine
          type="tel"
          name="phone"
          title="Phone number must contain only numbers, spases, defis and +"
          placeholder="Phone number"
        />
      </Form>
    </Formik>
  );
};

NewContactForm.propTypes = {
  hundleSubmit: PropTypes.func.isRequired,
};
