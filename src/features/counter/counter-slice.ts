import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CounterState = {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented(state, { payload }: PayloadAction<number>) {
      state.value += payload
    },
  },
})

export const { incremented } = counterSlice.actions
export const counterReducer = counterSlice.reducer
