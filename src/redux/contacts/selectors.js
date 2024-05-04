import { selectNameFilter } from "../filters/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => {
  return state.contacts.items;
};

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (dataContacts, dataNameFilter) => {
    return dataContacts.filter((contact) =>
      contact.name.toLowerCase().includes(dataNameFilter.toLowerCase())
    );
  }
);

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;
