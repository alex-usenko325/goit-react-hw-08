import { createSelector } from "reselect";

export const selectContacts = (state) => state.contacts.items;

export const selectFilter = (state) => state.filters?.name?.toLowerCase() || "";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter) ||
        contact.number.includes(filter)
    );
  }
);
