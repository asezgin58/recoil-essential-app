import {selector} from "recoil";
import {userAtom} from "../atoms/user";
import {IUser} from "../../pages/User/type";

export const userSelector = selector<IUser>({
    key: "userSelector",
    get: ({get}) => get(userAtom),
    set: ({set}, newValue) => set(userAtom, newValue)
});

export const userFullNameSelector = selector<string>({
    key: "userFullNameSelector",
    get: ({get}) => {
        const user = get(userAtom);
        return user.name + ' ' + user.surname;
    },
});