import React from 'react';

//input-large search-query" to make input text field longer
class Form extends React.Component {

   render() {
       return (

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
