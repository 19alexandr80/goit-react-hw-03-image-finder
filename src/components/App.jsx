import React from 'react';
import { ColorRing } from 'react-loader-spinner';

import { NewApi } from 'API/Api';

import { Searchbar } from 'components/searchbar/Searchbar';
import { ImageGallery } from 'components/imageGallery/ImageGallery';

const api = new NewApi();

export class App extends React.Component {
  state = {
    list: [],
  };

  // async componentDidMount() {
  // try {
  //   const data = await api.getUser();
  //   this.setState(() => {
  //     return { list: [...data.hits] };
  //   });
  // } catch (error) {
  //   console.error(error);
  // }
  // }

  componentDidUpdate() {}

  onSubmit = async add => {
    api.resetPege();
    api.setInput(add);
    try {
      const data = await api.getUser();

      this.setState(() => {
        return { list: [...data.hits] };
      });
    } catch (error) {
      console.error(error);
    }
  };
  onClickButton = async () => {
    try {
      const data = await api.getUser();
      this.setState(() => {
        return { list: [...this.state.list, ...data.hits] };
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
        <ImageGallery list={this.state.list} />
        {this.state.list.length !== 0 && (
          <button type="button" onClick={this.onClickButton}>
            lode
          </button>
        )}
      </div>
    );
  }
}
