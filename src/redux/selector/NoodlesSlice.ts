import {createSlice} from '@reduxjs/toolkit';
import {DATACUP} from '@Src/pages/infor/types';
import { act } from 'react';

interface initial {
  data: DATACUP[];
}

const initialState: initial = {
  data: [
    {
      id: 1,
      status: false,
      noodleLeft: 0,
    },
    {
      id: 2,
      status: false,
      noodleLeft: 0,
    },
    {
      id: 3,
      status: false,
      noodleLeft: 0,
    },
  ],
};

const noodelSlice = createSlice({
  name: 'noodel',
  initialState,
  reducers: {
    updateQuantity: (state, action) => {
      state.data[0].noodleLeft = action.payload.quantityTypeOne;
      state.data[1].noodleLeft = action.payload.quantityTypeTwo;
      state.data[2].noodleLeft = action.payload.quantityTypeThree;
    },
    updateStatus: (state, action) => {
      state.data[action.payload.id - 1].status = action.payload.status;
    },
    updateData: (state, action) =>{
      state.data = action.payload
    }
  },
});

export const {updateQuantity, updateStatus, updateData} = noodelSlice.actions;

export default noodelSlice.reducer;
