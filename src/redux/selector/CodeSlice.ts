import {createSlice} from '@reduxjs/toolkit';

export interface DataState {
  code: string | null;
  noodles: noodle | null;
  birthDay: number | null;
  department: string | null;
  fullName: string | null;
  gender: string | null;
  avatar: string | null;
}

export interface noodle {
  quantityTypeOne: number;
  quantityTypeTwo: number;
  quantityTypeThree: number;
}

const initialState: DataState = {
  code: null,
  noodles: null,
  birthDay: null,
  department: null,
  fullName: null,
  gender: null,
  avatar: null,
};

const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    setCode: (state, action) =>{
      state.code = action.payload;
    },
    save: (state, action) => {
      state.noodles = action.payload.noodles;
      state.birthDay = action.payload.birthDay;
      state.department = action.payload.department;
      state.fullName = action.payload.fullName;
      state.gender = action.payload.gender;
      state.avatar = action.payload.avatar;
    },
    logout: state => {
      state.code = null;
      state.noodles = null;
      state.birthDay = null;
      state.department = null;
      state.fullName = null;
      state.gender = null;
      state.avatar = null;
    },
  },
});

export const {save, logout ,setCode} = codeSlice.actions;

export default codeSlice.reducer;
