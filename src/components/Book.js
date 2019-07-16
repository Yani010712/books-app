import React from 'react';
import { Link } from 'react-router-dom';


class Book extends React.Component {
  render () {
    return(
    <div className="book">
        <img src={this.props.cover} alt={this.props.title}/>
        <div>{this.props.title}</div>
        <Link to={{
            pathname: `/author/${this.props.author}`,
            state: {
              author: this.props.author
            }
          }}>
          {this.props.author}
        </Link>
        <a target= "_blank" rel="noopener noreferrer" className="btn btn-info" href= {this.props.readLink}>
          Read Book
        </a>
     </div>
   );
  }
}

Book.defaultProps = {
  cover: "https://www.jainsusa.com/images/store/agriculture/not-available.jpg",
  readLink: "#"
};

export default Book;
