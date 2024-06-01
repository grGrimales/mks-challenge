import { create } from 'zustand'


interface State{
    isSideMenuCartOpen: boolean
    openSideMenuCart: () => void
    closeSideMenuCart: () => void

    
}

export const useUIStore = create<State>((set) => ({
   isSideMenuCartOpen: true,

    openSideMenuCart: () => set({ isSideMenuCartOpen: true }),
    closeSideMenuCart: () => set({ isSideMenuCartOpen: false })


}))