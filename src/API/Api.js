import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export class NewApi {
  constructor() {
    this.input = 'cat';
    this.page = 1;
    this.amountOfElements = 12;
    this.totalHits = null;
  }
  async getUser(name) {
    try {
      const response = await axios.get(
        `/?q=${this.input}&page=${this.page}&key=34606979-50f381d93fa3ea4666c32e671&image_type=photo&orientation=horizontal&per_page=${this.amountOfElements}`
      );
      this.setPage();
      this.totalHits = response.data.totalHits;
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  setInput(data) {
    this.input = data;
  }
  setPage() {
    this.page += 1;
  }
  resetPege() {
    this.page = 1;
  }
  getAmountOfElements() {
    return this.amountOfElements;
  }
}
