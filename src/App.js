import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {withFormik,Form} from 'formik';
import Yup from 'yup';

class App extends Component {

  render() {
    const {values, handleChange, handleSubmit} = this.props;
    return (
      <Form>
        <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange}  />
        <input type="password" name="password" placeholder="password" value={values.password} onChange={handleChange}  />
        <button>Submit</button>
        
      </Form>
    );
  }
}

const FormikApp = withFormik({
  mapPropsToValues({email, password}){
    return {
      email: email || '',
      password: password || ''
    }
  },
  handleSubmit(values){
    console.log(values);
  }
})(App)

export default FormikApp;
