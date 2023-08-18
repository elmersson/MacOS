/* eslint-disable no-unused-vars */
import { StateCreator } from "zustand";

export interface ComputerStatus {
    booted: boolean
    setBooted: (booted: boolean) => void
    logedIn: boolean
    setLogedIn: (logedIn: boolean) => void
}

export const computerStatusSlice: StateCreator<ComputerStatus> = (set) => ({
    booted: false,
    setBooted: (booted: boolean) => set({ booted}),
    logedIn: false,
    setLogedIn: (logedIn: boolean) => set({ logedIn}),
})