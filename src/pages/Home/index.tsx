import React from 'react';
import {useRecoilValue} from "recoil";
import {userFullNameSelector} from "../../store/selectors/user";

/**
 * Component File Description
 */
const Home: React.FC<any> = () => {
    const userFullName: string = useRecoilValue<string>(userFullNameSelector);

    return (
        <>
            <h1>Welcome, {userFullName}</h1>
        </>
    );
};

export default Home;