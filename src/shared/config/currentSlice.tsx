import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import pageType from './pageType';
import Empty from '../../config/content/other/Empty';
import WoodenSword from '../../config/content/weapons/WoodenSword';
import IronSword from '../../config/content/weapons/IronSword';

export type dmgTyp = "Normal" | "Fire" | "Ice";

// Define a type for the slice state
interface CounterState {
  page1: pageType,
  page2: pageType,
  page3: pageType,
  page4: pageType,
  page5: pageType,
  page6: pageType,
  page7: pageType,
  page8: pageType,
  page9: pageType,
  page10: pageType,
  page11: pageType,
  page12: pageType,
  page13: pageType,
  page14: pageType,
  page15: pageType,
  page16: pageType,
  page17: pageType,
  page18: pageType,
  page19: pageType,
  page20: pageType,
  HP: number,
  Sheild: number,
  Energy: number,
  Power: number,
  Gold: number
}

// Define the initial state using that type
const initialState: CounterState = {
    page1: {
        innerItem: WoodenSword,
        mutliColor: false,
        index: 0
    },
    page2: {
        innerItem: Empty,
        mutliColor: false,
        index: 1
    },
    page3: {
        innerItem: Empty,
        mutliColor: false,
        index: 2
    },
    page4: {
        innerItem: Empty,
        mutliColor: false,
        index: 3
    },
    page5: {
        innerItem: Empty,
        mutliColor: false,
        index: 4
    },
    page6: {
        innerItem: IronSword,
        mutliColor: false,
        index: 5
    },
    page7: {
        innerItem: Empty,
        mutliColor: false,
        index: 6
    },
    page8: {
        innerItem: Empty,
        mutliColor: false,
        index: 7
    },
    page9: {
        innerItem: Empty,
        mutliColor: false,
        index: 8
    },
    page10: {
        innerItem: Empty,
        mutliColor: false,
        index: 9
    },
    page11: {
        innerItem: Empty,
        mutliColor: false,
        index: 10
    },
    page12: {
        innerItem: IronSword,
        mutliColor: false,
        index: 11
    },
    page13: {
        innerItem: Empty,
        mutliColor: false,
        index: 12
    },
    page14: {
        innerItem: Empty,
        mutliColor: false,
        index: 13
    },
    page15: {
        innerItem: Empty,
        mutliColor: false,
        index: 14
    },
    page16: {
        innerItem: Empty,
        mutliColor: false,
        index: 15
    },
    page17: {
        innerItem: Empty,
        mutliColor: false,
        index: 16
    },
    page18: {
        innerItem: Empty,
        mutliColor: false,
        index: 17
    },
    page19: {
        innerItem: Empty,
        mutliColor: false,
        index: 18
    },
    page20: {
        innerItem: Empty,
        mutliColor: false,
        index: 19
    },
    HP: 10,
    Sheild: 0,
    Energy: 10,
    Power: 0,
    Gold: 5
}

export const currencySlice = createSlice({
  name: 'currency',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    
    setPage1: (state, action: PayloadAction<pageType>) => {
      state.page1 = action.payload;
    },
    setPage2: (state, action: PayloadAction<pageType>) => {
        state.page2 = action.payload;
      },
      setPage3: (state, action: PayloadAction<pageType>) => {
        state.page3 = action.payload;
      },
      setPage4: (state, action: PayloadAction<pageType>) => {
        state.page4 = action.payload;
      },
      setPage5: (state, action: PayloadAction<pageType>) => {
        state.page5 = action.payload;
      },
      setPage6: (state, action: PayloadAction<pageType>) => {
        state.page6 = action.payload;
      },
      setPage7: (state, action: PayloadAction<pageType>) => {
        state.page7 = action.payload;
      },
      setPage8: (state, action: PayloadAction<pageType>) => {
        state.page8 = action.payload;
      },
      setPage9: (state, action: PayloadAction<pageType>) => {
        state.page9 = action.payload;
      },
      setPage10: (state, action: PayloadAction<pageType>) => {
        state.page10 = action.payload;
      },
      setPage11: (state, action: PayloadAction<pageType>) => {
        state.page11 = action.payload;
      },
      setPage12: (state, action: PayloadAction<pageType>) => {
          state.page12 = action.payload;
        },
        setPage13: (state, action: PayloadAction<pageType>) => {
          state.page13 = action.payload;
        },
        setPage14: (state, action: PayloadAction<pageType>) => {
          state.page14 = action.payload;
        },
        setPage15: (state, action: PayloadAction<pageType>) => {
          state.page15 = action.payload;
        },
        setPage16: (state, action: PayloadAction<pageType>) => {
          state.page16 = action.payload;
        },
        setPage17: (state, action: PayloadAction<pageType>) => {
          state.page17 = action.payload;
        },
        setPage18: (state, action: PayloadAction<pageType>) => {
          state.page18 = action.payload;
        },
        setPage19: (state, action: PayloadAction<pageType>) => {
          state.page19 = action.payload;
        },
        setPage20: (state, action: PayloadAction<pageType>) => {
            state.page20 = action.payload;
          },
        setHP: (state, action: PayloadAction<number>) => {
            state.HP = action.payload;
        },
        setPower: (state, action: PayloadAction<number>) => {
            state.Power = action.payload;
        },
        setGold: (state, action: PayloadAction<number>) => {
            state.Gold = action.payload;
        }
    
    
  },
})

export const { setPage1, setPage2, setPage3, setPage4, setPage5, setPage6, setPage7, setPage8, setPage9, setPage10, setPage11, setPage12, setPage13, setPage14, setPage15, setPage16, setPage17, setPage18, setPage19, setPage20,
setHP, setPower, setGold
} = currencySlice.actions

export default currencySlice.reducer