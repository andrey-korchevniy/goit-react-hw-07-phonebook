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

export const ContactRow = ({ id, name, number, isDeleted }) => {
  // processing deleting forever
  const [deleteContact, { isLoading: isUpdating }] =
    useDeleteContactMutation(id);

  // delete to trash
  const [toTrashContact] = useToTrashContactMutation();

  const hundleDeleteBtnClick = () => {
    isDeleted = !isDeleted;
    toTrashContact({ id, isDeleted });
  };

  return (
    <Row>
      <Cell>{name}</Cell>
      <CellAmount>{number}</CellAmount>
      <CellAction>
        <DeleteBtn onClick={hundleDeleteBtnClick} isLoading={isUpdating}>
          <SvgClear />
        </DeleteBtn>
        {isDeleted ? (
          <DeleteForeverBtn
            onClick={() => deleteContact(id)}
            isLoading={isUpdating}
          >
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
