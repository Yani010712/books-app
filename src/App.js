import React from 'react';
import "./App.css";
import axios from 'axios';
import Form from './components/Form';
import BookList from './components/BookList';
import Title from './components/Title';
import FormImage from './books-image-for-form.jpg';

var formStyle = {
  backgroundImage: `url(${FormImage})`
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    list: []
  };
}

componentDidMount = () => {
  const json = sessionStorage.getItem("list");
  const list = JSON.parse(json);
  if (list) {
    this.setState({ list: list })
  }
}

componentDidUpdate = () => {
  const list = JSON.stringify(this.state.list)
  sessionStorage.setItem("list", list)
}

  getBooks = async (e) => {
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
          author: item.author_name,
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
      <div className="app container" style={formStyle}>
          <Title/>
          <Form getBook={this.getBooks} />
          {this.state.list.length !== 0 ? (
            <div>
              <BookList showAuthor={true} list={this.state.list} />
            </div>
          ) : (
            <div>No results</div>
          )}
      </div>
    );
  }
}

export default App;
