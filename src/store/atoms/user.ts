import {atom} from "recoil";
import {IUser} from "../../pages/User/type";

export const userListAtom = atom<IUser[]>({
    key: 'userListAtom',
    default: []
});