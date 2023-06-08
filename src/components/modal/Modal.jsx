import React from 'react';

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
      <div className="Overlay" onClick={this.toogleModal}>
        <div className="Modal">
          <img
            src={this.props.urlModal}
            alt="foto"
            className="ModalGalleryItem"
          />
          <button
            type="button"
            onClick={this.props.toogleModal}
            className="Button"
          >
            close
          </button>
        </div>
      </div>
    );
  }
}
