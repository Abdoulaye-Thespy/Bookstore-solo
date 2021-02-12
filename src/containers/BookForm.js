import React from 'react';
// import PropTypes from 'prop-types';
const Categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BookForm = () => {
  const AllCategories = Categories.map(category => (
    <option
      key={category}
    >
      {category}
    </option>
  ));

  return (
    <div className="container">
      <h3 className="form-title">ADD NEW BOOK</h3>
      <p className="text-danger" id="error" />
      <form className="d-flex">
        <input className="form-control mr-2" type="text" name="title" placeholder="Title" />
        <input className="form-control mr-2" type="text" name="author" placeholder="Author" />
        <select className="form-control mr-2" name="category" id="category">
          <option value="" disabled hidden>Category</option>
          {AllCategories}
        </select>
        <button className="w-50" type="submit" variant="primary">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
