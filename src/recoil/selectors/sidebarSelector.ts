import { selector } from "recoil";
import { sidebarState } from "../atoms/sidebarAtom";

export const isSidebarActiveState = selector({
  key: "isSidebarActiveState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    return get(sidebarState);
  },
});
