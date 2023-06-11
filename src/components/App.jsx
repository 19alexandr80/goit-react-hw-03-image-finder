import React from 'react';
import { NewApi } from 'API/Api';

import { Searchbar } from 'components/searchbar/Searchbar';
import { ImageGallery } from 'components/imageGallery/ImageGallery';
import { Modal } from 'components/modal/Modal';
import { Loader } from 'components/loader/Loader';
import { Button } from 'components/button/Button';

import { AppStyled } from 'components/AppStyled.styled';

const api = new NewApi();

export class App extends React.Component {
  state = {
    list: [],
    status: false,
    showModal: false,
    urlModal: '',
    name: '',
    pege: 1,
  };

  // componentDidMount() {}
  async componentDidUpdate(a, b) {
    if (this.state.name !== b.name || this.state.pege !== b.pege) {
      this.setState({ status: true });
      try {
        const data = await api.getUser(this.state.name, this.state.pege);
        if (!data.hits.length) {
          alert('invalid name ');
          return;
        }
        this.setState(() => {
          return { list: [...this.state.list, ...data.hits] };
        });
      } catch (error) {
        console.error(error);
      } finally {
        this.setState({ status: false });
        return;
      }
    }
  }
  // componentWillUnmount() {}
  listClearing = () => {
    this.setState({
      list: [],
      pege: 1,
    });
  };
  onSubmit = add => {
    if (add === this.state.name) {
      alert('Result on screen');
      return;
    }
    this.listClearing();
    this.setState({
      name: add,
    });
  };
  onClickButton = () => {
    this.setState(state => ({
      pege: state.pege + 1,
    }));
  };
  toogleModal = e => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
    if (e) {
      const url = e.currentTarget.dataset.url;
      this.setState(() => ({
        urlModal: url,
      }));
    }
  };

  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.list.length !== 0 && (
          <ImageGallery list={this.state.list} toogleModal={this.toogleModal} />
        )}
        {this.state.status && <Loader />}
        {this.state.list.length !== 0 && !this.state.status && (
          <Button onClick={this.onClickButton} />
        )}
        {this.state.showModal && (
          <Modal
            urlModal={this.state.urlModal}
            toogleModal={this.toogleModal}
          />
        )}
      </AppStyled>
    );
  }
}
