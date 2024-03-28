import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [] 
  },
  reducers: {
    addProduct: (state, action) => {
      const { id, name, price, image , description , brand} = action.payload;
      const existingIndex = state.todos.findIndex(item => item.id === id);
    
      if (existingIndex === -1) {
        state.todos.push({ id, name, price, quantity: 1, image, description , brand,totalprice :price });
      } else {
        state.todos[existingIndex] = {
          ...state.todos[existingIndex],
          quantity: state.todos[existingIndex].quantity + 1,
          totalprice:state.todos[existingIndex].totalprice+ state.todos[existingIndex].price
        };
      }
    },
    
    increase: (state, action) => {
      const existingIndex = state.todos.findIndex(item => item.id === action.payload);
      state.todos[existingIndex].quantity++;
      state.todos[existingIndex].totalprice=state.todos[existingIndex].totalprice+state.todos[existingIndex].price;

    },
    decrease: (state, action) => {
      const existingIndex = state.todos.find(item => item.id === action.payload);
      if(existingIndex.quantity==1)
      {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      }
      else{
        const Index = state.todos.findIndex(item => item.id === action.payload);
        state.todos[Index].quantity--;
        state.todos[Index].totalprice=state.todos[Index].totalprice-state.todos[Index].price;
      }
      
    },
  }
});

export const { addProduct,increase,decrease } = todoSlice.actions;

export default todoSlice.reducer;
