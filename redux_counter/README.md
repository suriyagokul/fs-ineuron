Steps for Redux Counter

    1) npx create-react-app .

    2) Add tailwind from docs

    3) npm install @reduxjs/toolkit

    4) npm install react-redux

    5) Create store folder and in it store.js file

    6) Create a Redux Store

        import { configureStore } from "@reduxjs/toolkit";

        export const store = configureStore({
            reducer: {},
        });

    7) Provide the Redux Store to React

        Make sure to know our application there is a central store.For that

            In index.js--> import { Provider } from "react-redux";
                           import { store } from "./store/store";

            In index.js render method-->

                <React.StrictMode>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </React.StrictMode>

    8) Create a Redux State Slice

            At first we have to initialize the state.

                import { createSlice } from "@reduxjs/toolkit";

                let initialState = {
                    value: 0,
                };

            Implement actions/methods like increment, decrement...

                export const counterSlice = createSlice({
                    name: "counter",
                    initialState,
                    reducers: {
                        increment: (state) => {
                        state.value += 1; // we can mutate/change the state using redux-toolkit.
                        },
                        decrement: (state) => {
                        state.value -= 1;
                        },
                        incrementByValue: (state, action) => {
                        state.value += action.payload;
                        },
                    },
                    });

            Export the action creators and the reducer function for the whole slice.

                export const { increment, decrement, incrementByValue } = counterSlice.actions;

                export default counterSlice.reducer;

    9) Provide reducer to our central store

            import counterReducer from "../features/counter/counterSlice";

            reducer: {
                counter: counterReducer,
            },
