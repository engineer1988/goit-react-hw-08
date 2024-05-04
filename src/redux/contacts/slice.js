import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "../redux/contactsOps";
import { addContact } from "../redux/contactsOps";
import { deleteContact } from "../redux/contactsOps";
const contactsInitialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});
// export const selectContacts = (state) => {
//   return state.contacts.items;
// };

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (dataContacts, dataNameFilter) => {
//     return dataContacts.filter((contact) =>
//       contact.name.toLowerCase().includes(dataNameFilter.toLowerCase())
//     );
//   }
// );

// export const selectLoading = (state) => state.contacts.loading;

// export const selectError = (state) => state.contacts.error;

export const contactsReducer = contactsSlice.reducer;