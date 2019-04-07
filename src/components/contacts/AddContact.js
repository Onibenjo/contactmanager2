import React, { Component } from "react";
// import { Consumer } from "../../context";
import InputGroup from "../layout/InputGroup";
// import uuid from "uuid";

import {connect} from 'react-redux';
import {addContact} from '../../actions/contactDispatches';


class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    //Check for errors
    if (name === "") {
      this.setState({
        errors: {
          name: "Name is required"
        }
      });
      return;
    }
    if (email === "") {
      this.setState({
        errors: {
          email: "Email is required"
        }
      });
      return;
    }
    if (phone === "") {
      this.setState({
        errors: {
          phone: "Phone is required"
        }
      });
      return;
    }

    const newContact = {
      //id
      name,
      email,
      phone
    };

    //Getting data from the api
    // const res = await axios.post(
    //   "http://jsonplaceholder.typicode.com/users",
    //   newContact
    // );

    this.props.addContact(newContact);

    // dispatch({
    //   type: "ADD_CONTACT",
    //   payload: res.data
    // });

    //Clear State
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      // <Consumer>
      //   {value => {
      //     const { dispatch } = value;
      //     return (
            <div className="card mb-3">
              <div className="card-header"> Add Contact </div>{" "}
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this)}>
                  <InputGroup
                    label="Name"
                    name="name"
                    value={name}
                    placeholder="Enter Name"
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  <InputGroup
                    label="Email"
                    name="email"
                    value={email}
                    type="email"
                    placeholder="Enter Email"
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <InputGroup
                    label="Phone"
                    name="phone"
                    value={phone}
                    placeholder="Enter Phone Number"
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>{" "}
              </div>{" "}
            </div>
      //     );
      //   }}
      // </Consumer>
    );
  }
}

export default connect(null, {addContact})(AddContact);