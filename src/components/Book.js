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
              {
                this.props.author ?
                  (this.props.author[0].length < 18 ? this.props.author[0] : `${this.props.author[0].substring(0, 18)}...` )
                  : "Unknown"
              }
            </Link>
            <br></br>
            <br></br>
            <a target= "_blank" rel="noopener noreferrer" className="btn btn-info card-text1" href= {this.props.readLink}>
              Read Book
            </a>
        </div>
      </div>
     </div>
   );
  }
}

Book.defaultProps = {
  cover: "https://www.jainsusa.com/images/store/agriculture/not-available.jpg",
  readLink: "#"
};

export default Book;
