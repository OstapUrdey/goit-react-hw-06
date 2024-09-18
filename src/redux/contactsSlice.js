import {createSlice} from '@reduxjs/toolkit';
import {nanoid} from 'nanoid';

export const selectContacts = (state) => state.contacts.items;

const contactsSlise = createSlice({
    name: "contacts",
    initialState: {
        items: [],
    },
    reducers: {
        addContact: (state, action) => {
            state.items.push({ id: nanoid(), ...action.payload });
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        },
    },
});

export const {addContact, deleteContact} = contactsSlise.actions;

export default contactsSlise.reducer;