import React from 'react';
import { NewApi } from 'API/Api';

import { Searchbar } from 'components/searchbar/Searchbar';
import { ImageGallery } from 'components/imageGallery/ImageGallery';
import { Modal } from 'components/modal/Modal';
import { Loader } from 'components/loader/Loader';
import { Button } from 'components/button/Button';

const api = new NewApi();

export class App extends React.Component {
  state = {
    list: [],
    status: false,
    showModal: false,
    urlModal: '',
  };

  // componentDidMount() {}
  // componentDidUpdate() {}
  // componentWillUnmount() {}

  onSubmit = async add => {
    this.setState({ status: true });
    api.resetPege();
    api.setInput(add);
    try {
      const data = await api.getUser();

      this.setState(() => {
        return { list: [...data.hits] };
      });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ status: false });
    }
  };
  onClickButton = async () => {
    this.setState({ status: true });
    try {
      const data = await api.getUser();
      this.setState(() => {
        return { list: [...this.state.list, ...data.hits] };
      });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ status: false });
    }
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
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery list={this.state.list} toogleModal={this.toogleModal} />
        {this.state.status && <Loader />}
        {this.state.list.length !== 0 && (
          <Button onClick={this.onClickButton} />
        )}
        {this.state.showModal && (
          <Modal
            urlModal={this.state.urlModal}
            toogleModal={this.toogleModal}
          />
        )}
      </div>
    );
  }
}
