import PropTypes from 'prop-types';

import { ButtonStyled } from 'components/button/ButtonStyled.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      Load more
    </ButtonStyled>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
