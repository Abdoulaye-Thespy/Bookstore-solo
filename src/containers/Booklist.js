import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Booklist = () => (
  <table>
    <tr>
      <th>Book id</th>
      <th>Title</th>
      <th>Catergory`</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
  </table>
);

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(Booklist);
