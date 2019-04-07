import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(
          contact =>
            contact.id === action.payload.id
              ? (contact = action.payload)
              : contact
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Benjamin Oni",
        email: "onibenjo@gmail.com",
        phone: "+234 8099556675"
      },
      {
        id: 2,
        name: "Caleb Ayomide",
        email: "cayo419@gmail.com",
        phone: "+234 8099556675"
      },
      {
        id: 3,
        name: "Oni Benjo",
        email: "benjamin44@gmail.com",
        phone: "+234 8099556675"
      },
      {
        id: 4,
        name: "FM the Scholar",
        email: "onlyscholar@gmail.com",
        phone: "+234 80scholar"
      },
      {
        id: 5,
        name: "Adamobolaji",
        email: "fortunatekeem@gmail.com",
        phone: "+234 8065615646"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    const res = await axios.get("http://jsonplaceholder.typicode.com/users");

    this.setState({ contacts: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
