import { createAction } from "@reduxjs/toolkit";

const fetchContactsLoading = createAction("contacts/fetch/loading");
const fetchContactsSuccess = createAction("contacts/fetch/success");
const fetchContactsError = createAction("contacts/fetch/error");

const addContactLoading = createAction("contacts/add/loading");
const addContactSuccess = createAction("contacts/add/success");
const addContactError = createAction("contacts/add/error");

const removeContactLoading = createAction("contacts/remove/loading");
const removeContactSuccess = createAction("contacts/remove/success");
const removeContactError = createAction("contacts/remove/error");

const actions = {
    fetchContactsLoading,
    fetchContactsSuccess,
    fetchContactsError,
    addContactLoading,
    addContactSuccess,
    addContactError,
    removeContactLoading,
    removeContactSuccess,
    removeContactError,
}

export default actions;
