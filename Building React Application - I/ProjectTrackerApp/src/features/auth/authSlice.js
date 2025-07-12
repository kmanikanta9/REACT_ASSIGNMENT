
import {createUserWithEmailAndPassword, signInWithEmailAndPassword}  from "firebase/auth";

import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import { auth } from "../../utils/firbase";

export const signupUser =  createAsyncThunk(
    "auth/signupUser",
    async({},{})=>{

    }
)