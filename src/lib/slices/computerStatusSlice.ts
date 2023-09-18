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
    volume: number
    setVolume: (volume: number) => void
    display: number
    setDisplay: (display: number) => void
    isPlaying: boolean
    setIsPlaying: (isPlaying: boolean) => void
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
    setAirdrop: (airdrop: boolean) => set({ airdrop}),
    volume: 50,
    setVolume: (volume: number) => set({ volume}),
    display: 80,
    setDisplay: (display: number) => set({ display}),
    isPlaying: false,
    setIsPlaying: (isPlaying: boolean) => set({ isPlaying })
})