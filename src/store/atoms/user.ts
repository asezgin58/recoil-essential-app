import {atom} from "recoil";
import {IUser} from "../../pages/User/type";

const initialUserData: IUser = {
    name: 'Aykut',
    surname: 'Sezgin',
    age: 26,
    job: 'Front-End Developer'
};

export const userAtom = atom<IUser>({
    key: 'userAtom',
    default: initialUserData
});