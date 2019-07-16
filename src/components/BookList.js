import React from 'react';
import Book from './Book';

class BookList extends React.Component {

   render() {
       return (
         <div>
           {this.props.list.map((book, index) => (
             <Book
               key={index}
               title={book.title}
               cover={book.cover}
               author={book.author}
               readLink={book.readLink}
             />
           ))}
         </ div>
      );
   }
}
BookList.defaultProps = {
  list: []
};

export default BookList;
