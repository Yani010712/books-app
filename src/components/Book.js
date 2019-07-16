// import React from 'react';
// import { Link } from 'react-router-dom';
//
//
// class Book extends React.Component {
//   render () {
//     return(
//     <div className="book card-deck">
//       <div className="col-md-4 col-lg-3 col-8 offset-lg-0 offset-md-0 offset-2 book-list-info">
//         <img src={this.props.cover} alt={this.props.title}/>
//           <div>
//             <div>{this.props.title}</div>
//             <Link to={{
//                 pathname: `/author/${this.props.author}`,
//                 state: {
//                   author: this.props.author
//                 }
//               }}>
//               {this.props.author}
//             </Link>
//             <a target= "_blank" rel="noopener noreferrer" className="btn btn-info" href= {this.props.readLink}>
//               Read Book
//             </a>
//           </div>
//      </div>
//     </div>
//    );
//   }
// }
//
// Book.defaultProps = {
//   cover: "https://www.jainsusa.com/images/store/agriculture/not-available.jpg",
//   readLink: "#"
// };
//
// export default Book;




// // TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST

// import React from 'react';
// import { Link } from 'react-router-dom';
//
//
// class Book extends React.Component {
//   render () {
//     return(
//     <div className="book card-deck">
//       <div className="image-container">
//         <img className="card-img-top" src={this.props.cover} alt={this.props.title}/>
//         <div className="card-body">
//             <h5 className="card-title">{this.props.title}</h5>
//             <Link className="card-text author-link" to={{
//                 pathname: `/author/${this.props.author}`,
//                 state: {
//                   author: this.props.author
//                 }
//               }}>
//               {this.props.author}
//             </Link>
//             <br></br>
//             <a target= "_blank" rel="noopener noreferrer" className="btn btn-info card-text" href= {this.props.readLink}>
//               Read Book
//             </a>
//         </div>
//       </div>
//     </div>
//    );
//   }
// }
// {this.props.title.length < 20 ? `${this.props.title}` : `${this.props.title.substring(0, 20)}...`}
//
// Book.defaultProps = {
//   cover: "https://www.jainsusa.com/images/store/agriculture/not-available.jpg",
//   readLink: "#"
// };
//
// export default Book;

// TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST

import React from 'react';
import { Link } from 'react-router-dom';


class Book extends React.Component {
  render () {
    return(
    <div className="book card-deck">
      <div className="image-container">
        <img className="card-img-top" src={this.props.cover} alt={this.props.title}/>
        <div className="card-body">
            <h5 className="card-title">{this.props.title.length < 20 ? `${this.props.title}` : `${this.props.title.substring(0, 20)}...`}</h5>
            <Link className="card-text author-link" to={{
                pathname: `/author/${this.props.author}`,
                state: {
                  author: this.props.author
                }
              }}>
              {this.props.author}
            </Link>
            <br></br>
            <br></br>
            <a target= "_blank" rel="noopener noreferrer" className="btn btn-info card-text" href= {this.props.readLink}>
              Read Book
            </a>
        </div>
      </div>
    </div>
   );
  }
}
// {this.props.title.length < 20 ? `${this.props.title}` : `${this.props.title.substring(0, 20)}...`}

Book.defaultProps = {
  cover: "https://www.jainsusa.com/images/store/agriculture/not-available.jpg",
  readLink: "#"
};

export default Book;
