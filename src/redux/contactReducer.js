// import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62acb4ac402135c7acb77dbc.mockapi.io',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => 'contacts/',
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     filter: '',
//   },
//   reducers: {
//     addContact: (state, action) => {
//       const isContactExist = state?.items
//         ?.map(existingContact => existingContact.name)
//         .includes(action.payload.name);

//       if (!isContactExist) {
//         return { ...state, items: [...state.items, action.payload] };
//       }

//       alert(`${action.payload.name} is already in contacts`);
//       return state;
//     },

//     deleteContact: (state, action) => {
//       return {
//         ...state,
//         items: state.items.filter(contact => action.payload !== contact.id),
//       };
//     },

//     filter: (state, action) => {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     },
//   },
// });

// export const { addContact, deleteContact, filter } = contactsSlice.actions;