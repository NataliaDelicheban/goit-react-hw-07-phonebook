import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./contacts/contacts-reduser";
import filterReducer from "./filter/filter-reduser";

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    }
})

export default store;
