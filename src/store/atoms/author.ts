import {atom} from "recoil";
import {IAuthor} from "../../pages/Author/type";

const initialAuthorData: IAuthor = {
    name: 'Aykut',
    surname: 'Sezgin',
    age: 26,
    job: 'Front-End Developer'
};

export const authorAtom = atom<IAuthor>({
    key: 'authorAtom',
    default: initialAuthorData
});