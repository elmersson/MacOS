import { create } from "zustand";
import { ComputerStatus, computerStatusSlice } from "./slices/computerStatusSlice";

export const useStore = create<ComputerStatus>()((...a) => ({
  ...computerStatusSlice(...a),
}));