import {
  ADD_CONTACT,
  GET_CONTACTS,
  GET_CONTACT,
  DEL_CONTACT,
  UPD_CONTACT
} from "./actions";
import axios from "axios";

//mapDispacthToProps.. Just an alternative way.. than
//in the bottom to avoid code clustering

export const delContact = id => async dispatch => {
  try {
    await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: DEL_CONTACT, payload: id });
  } catch (error) {
    dispatch({ type: DEL_CONTACT, payload: id });
  }
};

export const getContacts = () => async dispatch => {
  const res = await axios.get("http://jsonplaceholder.typicode.com/users");
  dispatch({ type: GET_CONTACTS, payload: res.data });
};

export const getContact = id => async dispatch => {
  const res = await axios.get(
    `http://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};

export const addContact = contact => async dispatch => {
  const { data } = await axios.post(
    "http://jsonplaceholder.typicode.com/users",
    contact
  );
  dispatch({ type: ADD_CONTACT, payload: data });
};

export const updContact = contact => async dispatch => {
  const res = await axios.put(
    `http://jsonplaceholder.typicode.com/users/${contact.id}`,
    contact
  );
  dispatch({ type: UPD_CONTACT, payload: res.data });
};
