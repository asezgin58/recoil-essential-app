import {atom} from "recoil";

export const userState = atom({
    key: 'userState',
    default: {
        name: 'Aykut',
        surname: 'Sezgin',
        age: 26,
        job: 'Front-End Developer'
    }
});