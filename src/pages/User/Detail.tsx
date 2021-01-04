import React from 'react';
import {useRecoilValue} from "recoil";
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {IUser} from "./type";
import {userSelector} from "../../store/selectors/user";

/**
 * Component File Description
 */
const Detail: React.FC<any> = () => {
    const {push} = useHistory();
    const user: IUser = useRecoilValue<IUser>(userSelector);

    return (
        <>
            <h1>User</h1>
            <div className="row mb-4">
                <div className="col">
                    {user && <>
                        <div><strong>Name : </strong>{user.name}</div>
                        <div><strong>Surname : </strong>{user.surname}</div>
                        <div><strong>Age : </strong>{user.age}</div>
                        <div><strong>Job : </strong>{user.job}</div>
                    </>}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Button variant="contained" color="primary" onClick={() => push('/user/edit')}>
                        Edit
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Detail;