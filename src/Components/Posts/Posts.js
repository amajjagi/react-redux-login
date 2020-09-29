import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { createPost } from '../../actions/postActions';
import List from './List'; 
import {  Row, Col, Form , Button } from 'react-bootstrap';


const initialState ={
    participantsName: '',
    participantsEmail: '',
    scheduleDate: '',
    nameError: '',
    emailError: '',
    dateError: ''

  }
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }


      validate = () => {
    
       let nameError =  "";
       let emailError = "";
       let dateError = "";
       if(!this.state.participantsEmail.includes('@')){
        emailError = "Email Invalid";
      }
    
       if(this.state.participantsName.length<5){
        nameError = "invalid Name";
       }

       if(!this.state.scheduleDate){

        dateError = "Date Invalid";
    
      }
       
       if(nameError || emailError || dateError ){
    
        this.setState({ nameError , emailError , dateError});
        return false;
       }
    
       return true;
      }

      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      onSubmit(e) {
        e.preventDefault();
    const isValid = this.validate();
    if(isValid){
      console.log(this.state)
      this.setState(initialState);  
    }
    
        const post = {
          participantsName: this.state.participantsName,
          participantsEmail: this.state.participantsEmail,
          scheduleDate: this.state.scheduleDate

        };
    
        this.props.createPost(post);
      }

    

    render() {
        return (
            <div>
  <Form.Group controlId="formBasic">
  <Row>
    <Col><h1> Schedule Meeting </h1></Col>
  </Row>
  <Row>
    <Col><div style={{fontSize:20,color:"red"}}>{this.state.inValidUser}</div></Col>
  </Row>
  <Row>
    <Col><div style={{fontSize:20,color:"red"}}>{this.state.ValidUser}</div></Col>
  </Row>
 </Form.Group>

 <form onSubmit={this.onSubmit}>
<Form.Group controlId="formBasic">
    <Form.Label>Participants Name:</Form.Label>
             <Form.Control   
                type="text"
              name="participantsName"
              placeholder="Participants Name"
              onChange={this.onChange}
              value={this.state.participantsName}
     placeholder="Enter Participants Name" />
     <div style={{fontSize:12,color:"red"}}>{this.state.nameError}</div>
 </Form.Group>

  <Form.Group controlId="formBasic">
    <Form.Label>Participants Email:</Form.Label>
    <Form.Control type="text"
     type="text"
     name="participantsEmail"
     placeholder="Participants Email"
     onChange={this.onChange}
     value={this.state.participantsEmail} />
    <div style={{fontSize:12,color:"red"}}>{this.state.emailError}</div>
 </Form.Group>

 <Form.Group controlId="formBasic">
    <Form.Label>Schedule Date:</Form.Label>
    <Form.Control 
    type="date"
    name="scheduleDate"
    placeholder="Schedule Date"
    onChange={this.onChange}
    value={this.state.scheduleDate} />
    <div style={{fontSize:12,color:"red"}}>{this.state.dateError}</div>
 </Form.Group>
 
 <Form.Group controlId="formBasic">
 <Button variant="primary" type="submit" disabled={!this.state.participantsName || !this.state.participantsEmail || !this.state.scheduleDate}>
    Submit
  </Button>
 </Form.Group>

  </form>

        <List/>
        
      </div>
        )
    }
};
Posts.propTypes = {
    createPost: PropTypes.array.isRequired
}




export default connect(null, { createPost })(Posts);