import React from 'react';
import {useRecoilValue} from "recoil";
import {authorFullNameSelector} from "../../store/selectors/author";

/**
 * Component File Description
 */
const Home: React.FC<any> = () => {
    const authorFullName: string = useRecoilValue<string>(authorFullNameSelector);

    return (
        <>
            <h1>Welcome, {authorFullName}</h1>
        </>
    );
};

export default Home;