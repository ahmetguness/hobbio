import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../models/UserModel";

interface UserState {
  userInfo: User;
}

const initialState: UserState = {
  userInfo: {
    userId: "",
    userName: "",
    userPassword: "",
  },
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<User>) {
      state.userInfo = { ...action.payload };
    },
  },
});

export default UserSlice.reducer;
export const { setUserInfo } = UserSlice.actions;
