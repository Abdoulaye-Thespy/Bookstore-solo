import React from 'react';
import PropTypes from 'prop-types';

const Booklist = () => {
	return (
       <table style="width:100%">
  <tr>
    <th>Book is</th>
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
}
 
const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);