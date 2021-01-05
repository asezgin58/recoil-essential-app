import {atom} from "recoil";
import {IUser} from "../../pages/User/type";

const initialUserListData: IUser[] = [];

export const userListAtom = atom<any>({
    key: 'userListAtom',
    default: initialUserListData
});