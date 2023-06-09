import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyled } from 'components/button/ButtonStyled.styled';
import {
  ModalStyled,
  OverlayStyled,
} from 'components/modal/ModalStyled.styled';

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }
  closeModal = e => {
    if (e.code === 'Escape') {
      this.props.toogleModal();
    }
  };
  toogleModal = e => {
    if (e.currentTarget === e.target) {
      this.props.toogleModal();
    }
  };
  render() {
    return (
      <OverlayStyled onClick={this.toogleModal}>
        <ModalStyled>
          <img src={this.props.urlModal} alt="foto" />
          <ButtonStyled type="button" onClick={this.props.toogleModal}>
            close
          </ButtonStyled>
        </ModalStyled>
      </OverlayStyled>
    );
  }
}
Modal.propTypes = {
  toogleModal: PropTypes.func.isRequired,
  urlModal: PropTypes.string.isRequired,
};
