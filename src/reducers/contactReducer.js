import {
  GET_CONTACTS,
  ADD_CONTACT,
  DEL_CONTACT,
  UPD_CONTACT,
  GET_CONTACT
} from "../actions/actions";

const initialState = {
  contacts: [
    // {
    //   id: 1,
    //   name: "Benjamin Oni",
    //   email: "onibenjo@gmail.com",
    //   phone: "+234 8099556675"
    // },
    // {
    //   id: 2,
    //   name: "Caleb Ayomide",
    //   email: "cayo419@gmail.com",
    //   phone: "+234 8099556675"
    // },
    // {
    //   id: 3,
    //   name: "Oni Benjo",
    //   email: "benjamin44@gmail.com",
    //   phone: "+234 8099556675"
    // },
    // {
    //   id: 4,
    //   name: "FM the Scholar",
    //   email: "onlyscholar@gmail.com",
    //   phone: "+234 80scholar"
    // },
    // {
    //   id: 5,
    //   name: "Adamobolaji",
    //   email: "fortunatekeem@gmail.com",
    //   phone: "+234 8065615646"
    // }
  ],
  contact: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state, contacts: action.payload };
    case GET_CONTACT:
      return { ...state, contact: action.payload };
    case DEL_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case UPD_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };

    default:
      return state;
  }
};

export default reducer;
