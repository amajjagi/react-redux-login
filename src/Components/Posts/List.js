import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {   Form  } from 'react-bootstrap';


class Posts extends Component {


  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    let postItems= []
    if(this.props.posts){
    const items = this.props.posts;
    return (
      <Form.Group controlId="formBasic">
      <div class="table table-bordered">
        <table class="table table-hover">
          <tbody>
            <tr>
            <th>participants Name</th>
            <th>participants Email</th>
            <th>schedule Date</th>
            </tr>
            {items.map(item => {
              return (
                <tr>
                 <td>{item.participantsName}</td>
            <td>{item.participantsEmail}</td>
            <td>{item.scheduleDate}</td>
                </tr>
              );
            })}
             
          </tbody>
        </table>
        {postItems}
      </div>
      </Form.Group>
    );
          }
  }


}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, {  })(Posts);
