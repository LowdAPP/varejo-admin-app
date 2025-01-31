import { themeConfig } from '@/configs/theme.config'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { LayoutType, Direction } from '@/@types/theme'

export type ThemeState = {
    mode: string
    themeSchema: string
    direction: Direction
    panelExpand: boolean
    layout: {
        type: LayoutType
        sideNavCollapse: boolean
    }
}

type ThemeAction = {
    setSchema: (payload: string) => void
    setMode: (payload: ThemeState['mode']) => void
    setSideNavCollapse: (payload: boolean) => void
    setDirection: (payload: Direction) => void
    setPanelExpand: (payload: boolean) => void
    setLayout: (payload: LayoutType) => void
}

const inititialThemeState: ThemeState = {
    mode: themeConfig.mode,
    themeSchema: themeConfig.themeSchema,
    direction: themeConfig.direction,
    panelExpand: themeConfig.panelExpand,
    layout: {
        type: themeConfig.layout.type,
        sideNavCollapse: themeConfig.layout.sideNavCollapse
    }
}

export const useThemeStore = create<ThemeState & ThemeAction>()(
    persist(
        (set) => ({
            ...inititialThemeState,
            setSchema: (payload) => set(() => ({ themeSchema: payload })),
            setMode: (payload) => set(() => ({ mode: payload })),
            setSideNavCollapse: (payload) =>
                set((state) => ({
                    layout: { ...state.layout, sideNavCollapse: payload },
                })),
            setDirection: (payload) => set(() => ({ direction: payload })),
            setPanelExpand: (payload) => set(() => ({ panelExpand: payload })),
            setLayout: (payload) =>
                set((state) => ({
                    layout: { ...state.layout, type: payload },
                })),
        }),
        {
            name: 'theme',
        },
    ),
)
