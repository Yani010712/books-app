import React from 'react';
import Book from './Book';

class BookList extends React.Component {

   render() {
       return (
         <div className="grid-container">
           <div>
             <div className="row">
               {this.props.list.map((book, index) => (
                 <div key={index} className="card col-lg-3 col-6 col-md-5 offset-lg-0 offset-md-1 offset-3 book-list-info">
                 <Book
                   title={book.title}
                   cover={book.cover}
                   author={book.author}
                   readLink={book.readLink}
                   showAuthor={this.props.showAuthor}
                 />
                </div>
               ))}
             </div>
           </div>
         </div>
      );
   }
}
BookList.defaultProps = {
  list: [],
  showAuthor: false
};

export default BookList;
