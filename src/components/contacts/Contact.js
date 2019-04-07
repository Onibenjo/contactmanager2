import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { Consumer } from "../../context";
import { connect } from "react-redux";
import { delContact } from "../../actions/contactDispatches";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  onDeleteClick = id => {
    this.props.delContact(id);

    // try {
    //   await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
    //   dispatch({
    //     type: "DELETE_CONTACT",
    //     payload: id
    //   });
    // } catch (e) {
    //   dispatch({
    //     type: "DELETE_CONTACT",
    //     payload: id
    //   });
    // }

    // dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { contact } = this.props;
    const { id } = contact;
    const { showContactInfo } = this.state;
    return (
      // <Consumer>
      //   {(value) => {
      //     const { dispatch } = value;
      //     return (
      <div className="card card-body mb-3">
        <h4>
          {contact.name}
          <i
            onClick={this.onShowClick}
            style={{
              cursor: "cursor"
            }}
            className="fas fa-sort-down"
          />
          <i
            className="fas fa-times"
            style={{
              cursor: "cursor",
              float: "right",
              color: "red"
            }}
            onClick={this.onDeleteClick.bind(this, id)}
          />{" "}
          <Link to={`contact/edit/${id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: "cursor",
                float: "right",
                marginRight: "1.5rem",
                color: "gray"
              }}
            />{" "}
          </Link>{" "}
        </h4>{" "}
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">
              <strong> Email: </strong> {contact.email}{" "}
            </li>{" "}
            <li className="list-group-item">
              <strong> Phone: </strong> {contact.phone}{" "}
            </li>{" "}
          </ul>
        ) : null}{" "}
      </div>
      //     );
      //   }}
      // </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default connect(
  null,
  { delContact }
)(Contact);
