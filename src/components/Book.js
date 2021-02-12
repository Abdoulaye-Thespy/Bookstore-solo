import React from 'react';
// import PropTypes from 'prop-types';

const Book = ({book}) => (
	  const {
    id, title, author, category,
  } = book;
<table>
    <tr>
      <th>{author}</th>
      <th>{title}</th>
      <th>{Catergory}</th>
    </tr>
  </table>

);
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
export default Book;
