import { StateCreator } from "zustand";

export interface ComputerStatus {
    booted: boolean;
    logedIn: boolean;
}

export const computerStatusSlice: StateCreator<ComputerStatus> = (set) => ({
    booted: false,
    toggleBooted: () => set((state) => ({ booted: !state.booted})),
    logedIn: false,
    toggleLogedIn: () => set((state) => ({ logedIn: !state.logedIn})),
})