import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./auth_slice";

const store = configureStore({
    reducer: {
        auth: authreducer,
    },
});

export default store;