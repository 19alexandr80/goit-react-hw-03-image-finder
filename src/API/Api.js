import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export class NewApi {
  constructor() {
    this.amountOfElements = 12;
    this.totalHits = null;
  }
  async getUser(name, page) {
    try {
      const response = await axios.get(
        `/?q=${name}&page=${page}&key=34606979-50f381d93fa3ea4666c32e671&image_type=photo&orientation=horizontal&per_page=${this.amountOfElements}`
      );
      this.totalHits = response.data.totalHits;
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  getAmountOfElements() {
    return this.amountOfElements;
  }
}
