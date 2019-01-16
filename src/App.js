import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {withFormik,Form,Field} from 'formik';
import Yup from 'yup';

class App extends Component {

  render() {
    const {values,errors} = this.props;
    return (
      <Form>
        <div>
          {errors.email && <p>errors.email</p>}
        <Field type="email" name="email" placeholder="Email" />

        </div>
        <Field type="password" name="password" placeholder="password" />
        <label>

        <Field type="checkbox" name="newsletter" checked={values.newsletter} />
        Join our newsletter
        </label>
        <Field component="select" name="plan">
          <option value="free">Free</option>
          <option value="premium">Premium</option>

        </Field>
        <button>Submit</button>
        
      </Form>
    );
  }
}

const FormikApp = withFormik({
  mapPropsToValues({email, password, newsletter,plan}){
    return {
      email: email || '',
      password: password || '',
      newsletter: newsletter || true,
      plan: plan || 'free'
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(9).required()
  }),
  handleSubmit(values){
    console.log(values);
  }
})(App)

export default FormikApp;
