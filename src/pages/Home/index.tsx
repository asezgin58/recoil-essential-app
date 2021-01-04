import React from 'react';
import {IUser} from "../User/type";
import {useRecoilValue} from "recoil";
import {userState} from "../../store/atoms/userAtom";

/**
 * Component File Description
 */
const Home: React.FC<any> = () => {
    const user: IUser = useRecoilValue(userState);

    return (
        <>
            <h1>Welcome, {user.name} {user.surname}</h1>
        </>
    );
};

export default Home;