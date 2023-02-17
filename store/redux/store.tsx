import { configureStore, createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orderItems: []
    },
    reducers: {
        addorderItem: (state, action) => {             
            state.orderItems.push(action.payload.orderItem )
        },
        removeorderItem: (state, action) => {
            console.log('ddddd1', action);
            state.orderItems.splice(state.orderItems.map(e => e.itemId).indexOf(action.payload.id), 1)
            console.log('ddddd', state.orderItems);
        },
    }   
})

export const addorderItem = orderSlice.actions.addorderItem
export const removeorderItem = orderSlice.actions.removeorderItem

export const store = configureStore({

    reducer: {
        order: orderSlice.reducer
    }


});

export type RootState = ReturnType<typeof store.getState>

