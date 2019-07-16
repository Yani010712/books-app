import React from 'react';
import Book from './Book';

class BookList extends React.Component {

   render() {
       return (
         <div> //class="p-3 mb-2 bg-white
           {this.props.list.map((book, index) => (
             <Book
               key={index /* find unique props to use here */}
               title={book.title}
               cover={book.cover}
               readLink={book.readLink}
             />
           ))}
         </ div>
      );
   }
}
// BookList.defaultProps = {
//   list: []
// };

export default BookList;



// function BookList({ list }) {
//   return (
//     <div>
//       {list.map(props => (
//         <Book
//           key={props.readLink /* find unique props to use here */}
//           title={props.title}
//           cover={props.cover}
//           readLink={props.readLink}
//         />
//       ))}
//     </div>
//   );
// }
//
// BookList.defaultProps = {
//   list: []
// };
//
// export default BookList;
