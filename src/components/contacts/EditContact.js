import React, { Component } from "react";
// import { Consumer } from "../../context";
import InputGroup from "../layout/InputGroup";
import { connect } from "react-redux";
import { getContact, updContact } from "../../actions/contactDispatches";
// import uuid from "uuid";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  // componentWillReceiveProps(nextProps, nextState) {
  //   const { name, email, phone } = nextProps.contact;
  //   this.setState({
  //     name,
  //     email,
  //     phone
  //   });
  // }

  // Persists that data in the input field... Newer version to the componentWillReceiveProps
  static getDerivedStateFromProps(nextProps, prevState) {
    const { name, email, phone } = nextProps.contact;

    return { name, email, phone };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }

  onSubmit = e => {
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

    //Updating data to the api
    const { id } = this.props.match.params;

    const updatedContact = {
      id,
      name,
      email,
      phone
    };
    //updates the contact
    this.props.updContact(updatedContact);

    // const res = await axios.put(
    //   `http://jsonplaceholder.typicode.com/users/${id}`,
    //   updatedContact
    // );

    // dispatch({
    //   type: "UPDATE_CONTACT",
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

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      // <Consumer>
      //   {value => {
      //     const { dispatch } = value;
      //     return (
      <div className="card mb-3">
        <div className="card-header"> Edit Contact </div>
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
              value="Update  Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
      //     );
      //   }}
      // </Consumer>
    );
  }
}

//Mapping the state from the store to the props so that we could get it from this.props.contact
const mapStateToProps = state => ({
  contact: state.contact.contact
});

export default connect(
  mapStateToProps,
  { getContact, updContact }
)(EditContact);
