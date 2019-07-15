import React from 'react';
import axios from 'axios';

import Titles from './components/Titles';
import Form from './components/Form';
import BookList from './components/BookList';

import "./App.css";


class App extends React.Component {
  state = {
    list: []
  }

  getBook = async (e) => {
   e.preventDefault();
    const book = e.target.elements.title.value;
    axios.get(`https://openlibrary.org/search.json?title=${book}`)
    .then(response => {
      const data = response.data;
      const docs = data.docs;

      const list = docs.map(item => {
        return {
          key: item.cover_i,
          title: item.title,
          cover: item.cover_i
            ? `http://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
            : undefined,
          readLink: `https://openlibrary.org${item.key}`
        };
      });

      this.setState({
        list: list
      });
    })
    .catch(function(error) {
      // handle error
      console.log(error);
      this.setState({
        list: []
      });
    })
    .finally(function() {
      // always executed
    });
   }

    render() {
      return (
        <div className="app container">
            <Titles/>
            <Form getBook={this.getBook} />
            {this.state.list.length !== 0 ? (
              <div>
                <BookList list={this.state.list} />
              </div>
            ) : (
              <div>No results</div>
            )}
        </div>
      );
    }
  }

  // BookListContainer.defaultProps = {
  //   query: ""
  // };

  export default App;
