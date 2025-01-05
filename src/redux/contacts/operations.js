import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const contactsApi = axios.create({
  baseURL: "https://675887c560576a194d10e56c.mockapi.io",
});

const handleRequest = async (request, thunkAPI) => {
  try {
    const response = await request();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({
      message: error.message,
      code: error.response?.status,
    });
  }
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    return await handleRequest(() => contactsApi.get("/contacts"), thunkAPI);
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    return await handleRequest(
      () => contactsApi.post("/contacts", { name, number }),
      thunkAPI
    );
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    return await handleRequest(
      () => contactsApi.delete(`/contacts/${id}`),
      thunkAPI
    );
  }
);
