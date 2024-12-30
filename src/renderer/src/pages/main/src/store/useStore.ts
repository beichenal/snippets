import { create } from "zustand";
import { DataType } from "@renderer/types";

interface State {
  data: DataType[];
  setData: (data: DataType[]) => void;
}
export const useStore = create<State>((set) => ({
  data: [],
  setData: (data: DataType[]) => set({ data })
}));
