import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/slice";
import { selectNameFilter } from "./slice";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
