import React from 'react';
// import FormImage from '../books-image-for-form.jpg';
//
// var formStyle = {
//   backgroundImage: `url(${FormImage})`
// }

class Form extends React.Component {

   render() {
       return (

         // <img src="https://cdn.aarp.net/content/dam/aarp/money/budgeting_savings/2016/04/1140-yeager-sell-your-used-books.imgcache.rev6feda141288df73e8fd100822bb375ea.jpg"
         //class="img-fluid" alt="Responsive image">

       <form onSubmit = {this.props.getBook} className="form-inline"> 
         <div className="form-group mb-2 mr-2" >
          <input
            name="title"
            type="text"
            className="form-control"
            autoComplete="off"
            placeholder="Type text to search books"
         />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
           Search
        </button>
       </form>

        );

   }

}

export default Form;
