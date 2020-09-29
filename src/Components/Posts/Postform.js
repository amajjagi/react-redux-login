import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { createPost } from '../../actions/postActions'
import {  Row, Col, Form , Button } from 'react-bootstrap';

const initialState ={
    username: '',
    password: '',
    nameError: '',
    passwordError: '',
    inValidUser:'',
    ValidUser:'',
  }

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    
      validate = () => {
    
        // this.validateUser(a,b,function(bool){
        //   if(bool)
        //   thi
    
        // })
        let hardcodedCred = {
          username: 'email@email.com',
          password: 'password123'
      }
    
       let nameError =  "";
       let passwordError = "";
       let inValidUser = "";
       let ValidUser = "";
       if(this.state.password.length<5){
    
        passwordError = "Password Invalid";
    
      }
    
       if(!this.state.username.includes("@")){
         nameError = "invalid Email";
       }
    
       if(this.state.username === hardcodedCred.username && this.state.password === hardcodedCred.password){
        ValidUser = "Login Successful"
        window.location.href='/posts'
    
       }else{
        inValidUser = "invalid User";
       }
       
       if(nameError || passwordError  || inValidUser || ValidUser){
    
        this.setState({ nameError , passwordError , inValidUser , ValidUser});
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
    
     
      }
  
    render() {
        return (

            <div>
  <Form.Group controlId="formBasic">
  <Row>
    <Col><h1> Login </h1></Col>
  </Row>
  <Row>
    <Col><div style={{fontSize:20,color:"red"}}>{this.state.inValidUser}</div></Col>
  </Row>
  <Row>
    <Col><div style={{fontSize:20,color:"red"}}>{this.state.ValidUser}</div></Col>
  </Row>
 </Form.Group>



  <form onSubmit={this.onSubmit}>
<Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"
     name="username"
     onChange={this.onChange}
     value={this.state.username}
     placeholder="Enter email" />
    <div style={{fontSize:12,color:"red"}}>{this.state.nameError}</div>
 </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"
     type="password"
     name="password"
     placeholder="Password"
     onChange={this.onChange}
     value={this.state.password}
      placeholder="Password" />
    <div style={{fontSize:12,color:"red"}}>{this.state.passwordError}</div>
 </Form.Group>
 
 <Form.Group controlId="formBasic">
 <Button variant="primary" type="submit">
    Submit
  </Button>
 </Form.Group>

  </form>

            </div>
        )
    }
}



PostForm.propTypes = {
    createPost : PropTypes.func.isRequired
    }
const mapStateToProps= state => ({
   posts: state.posts.items
});
export default connect(mapStateToProps , {createPost})(PostForm);
