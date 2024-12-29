import { create } from "zustand";
import { DataType } from "@renderer/types";
import { mockData } from "@mock/result";

interface State {
  data: DataType[];
}
export const useStore = create<State>((set) => ({
  data: mockData,
  setData: (data: DataType[]) => set({ data })
}));
