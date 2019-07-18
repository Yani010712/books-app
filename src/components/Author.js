import React from 'react';
import axios from 'axios';
import BookList from './BookList';


class Author extends React.Component {

  state = {
    author: '',
    list  : []
  }

  componentDidMount = () => {
    const author = this.props.location.state.author;

    axios.get(`https://openlibrary.org/search.json?author=${author}`)
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
        author: this.props.location.state.author,
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

  render(){
    return(
      <div className="app container">
          {this.state.list.length !== 0 ? (
            <div>
              <h1>{this.state.author}</h1>
              <BookList list={this.state.list} />
            </div>
          ) : (
            <div></div>
          )}
      </div>
    );
  }
}

export default Author;
