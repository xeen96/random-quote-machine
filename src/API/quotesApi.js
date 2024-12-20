import axios from 'axios'

  export const fetchQuotes = async () => {
    try {
      const url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
      const response = await axios.get(url); 
      return response.data;

    } catch (error) {
      console.error('Error on receiving a quote:', error);

      throw error; 
    }
  };