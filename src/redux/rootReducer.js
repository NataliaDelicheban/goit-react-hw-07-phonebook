import { combineReducers } from "redux";

import contactsReducer from "./contacts/contacts-reduser";
import filterReducer from "./filter/filter-reduser";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer
})

export default rootReducer;