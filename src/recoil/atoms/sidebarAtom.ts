import { atom } from "recoil";

export const sidebarState = atom({
  key: "isSidebarActive", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
