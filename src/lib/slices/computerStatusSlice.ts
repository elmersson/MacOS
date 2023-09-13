/* eslint-disable no-unused-vars */
import { StateCreator } from "zustand";

export interface ComputerStatus {
    booted: boolean
    setBooted: (booted: boolean) => void
    logedIn: boolean
    setLogedIn: (logedIn: boolean) => void
    darkmode: boolean
    setDarkmode: (darkmode: boolean) => void
    wifi: boolean
    setWifi: (wifi: boolean) => void
    bluetooth: boolean
    setBluetooth: (bluetooth: boolean) => void
    airdrop: boolean
    setAirdrop: (airdrop: boolean) => void
}

export const computerStatusSlice: StateCreator<ComputerStatus> = (set) => ({
    booted: false,
    setBooted: (booted: boolean) => set({ booted}),
    logedIn: false,
    setLogedIn: (logedIn: boolean) => set({ logedIn}),
    darkmode: false,
    setDarkmode: (darkmode: boolean) => set({ darkmode}),
    wifi: true,
    setWifi: (wifi: boolean) => set({ wifi}),
    bluetooth: true,
    setBluetooth: (bluetooth: boolean) => set({ bluetooth}),
    airdrop: true,
    setAirdrop: (airdrop: boolean) => set({ airdrop})
})