import {selector} from "recoil";
import {userListAtom} from "../atoms/user";
import {IUser} from "../../pages/User/type";

export const userListSelector = selector<IUser[]>({
    key: "userListSelector",
    get: ({get}) => get(userListAtom),
    set: ({set}, newValue) => set(userListAtom, newValue)
});

export const userListSelectorWithRequest = selector<IUser[]>({
    key: "userListSelectorWithRequest",
    get: async () => {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const {data} = await response.json();
        return data;
    },
    set: ({set}, newValue) => set(userListAtom, newValue)
});