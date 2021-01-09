import {selector, selectorFamily} from "recoil";
import {userListAtom} from "../atoms/user";
import {IUser} from "../../pages/User/type";

export const userListSelector = selector<IUser[]>({
    key: "userListSelector",
    get: ({get}) => get(userListAtom),
    set: ({set}, newValue) => set(userListAtom, newValue)
});

export const userSelector = selectorFamily<IUser, string>({
    key: "userSelector",
    get: (userId: string) => ({get}) => {
        const userList: IUser[] = get(userListAtom);
        return userList.filter((item: IUser) => item.id === parseInt(userId))[0];
    }
});