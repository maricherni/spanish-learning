
import { createSlice } from "@reduxjs/toolkit";
import bodyParts from "../../../../lib/recursos/vocabulario/partesCuerpo";

export const bodySlice = createSlice({
  name: "body",
  initialState: {
    list: {
        titulo:'PARTES DEL CUERPO',
        vocabulario: bodyParts.vocabulario,
    },
  },
  reducers: {
    setBodyList: (state, action) => {
      state.list = action.payload;
    },
  },
});
export const { setBodyList } = bodySlice.actions;

export default bodySlice.reducer;

