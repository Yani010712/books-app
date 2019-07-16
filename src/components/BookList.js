import React from 'react';
import Book from './Book';

// class BookList extends React.Component {
//
//   render() {
//       return (
//         <div>
//           {this.props.list.map((book, index) => (
//             <Book
//               key={index}
//               title={book.title}
//               cover={book.cover}
//               author={book.author}
//               readLink={book.readLink}
//             />
//           ))}
//         </ div>
//      );
//   }
// }
// BookList.defaultProps = {
//   list: []
// };
//
// export default BookList;


// TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST

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
    list: []
  };

  export default BookList;





// // TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
// import React from 'react';
// import Book from './Book';
//
// class BookList extends React.Component {
//
   // render() {
   //     return (
   //       <div>
   //         {this.props.list.map((book, index) => (
   //           <Book
   //             key={index}
   //             title={book.title}
   //             cover={book.cover}
   //             author={book.author}
   //             readLink={book.readLink}
   //
   //             className="col-md-4 col-lg-3 col-8 offset-lg-0 offset-md-0 offset-2 book-list-info"
   //           />
   //         ))}
   //       </ div>
   //    );
   // }
// }
// BookList.defaultProps = {
//   list: []
// };
//
// export default BookList;
//
// // TEST TEST TEST TEST TEST
