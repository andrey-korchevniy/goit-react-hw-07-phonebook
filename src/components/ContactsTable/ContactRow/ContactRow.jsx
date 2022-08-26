import {
  Row,
  Cell,
  CellAmount,
  DeleteBtn,
  DeleteForeverBtn,
  CellAction,
} from './ContactRow.styled';
import PropTypes from 'prop-types';
import { SvgClear } from 'images/Svg';
import {
  useDeleteContactMutation,
  useToTrashContactMutation,
} from 'redux/mockApiSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({ position: 'center-top' });

export const ContactRow = ({ id, name, number, isDeleted }) => {
  // processing deleting forever
  const [deleteContact] = useDeleteContactMutation(id);

  const hundleDeleteContact = () => {
    deleteContact(id);
    Notify.success('Yor contact has been deleted forever');
  };

  // delete to trash
  const [toTrashContact] = useToTrashContactMutation();

  const hundleDeleteBtnClick = () => {
    const message = isDeleted
      ? 'Your contact has been restored'
      : 'Your contact has been moved to Trash';
    isDeleted = !isDeleted;
    toTrashContact({ id, isDeleted });
    Notify.success(message);
  };

  return (
    <Row>
      <Cell>{name}</Cell>
      <CellAmount>{number}</CellAmount>
      <CellAction>
        <DeleteBtn onClick={hundleDeleteBtnClick}>
          <SvgClear />
        </DeleteBtn>
        {isDeleted ? (
          <DeleteForeverBtn onClick={hundleDeleteContact}>
            Delete forever
          </DeleteForeverBtn>
        ) : (
          <></>
        )}
      </CellAction>
    </Row>
  );
};

ContactRow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  isDeleted: PropTypes.bool.isRequired,
};
