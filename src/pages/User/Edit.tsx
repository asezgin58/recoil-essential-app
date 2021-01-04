import React, {useState} from 'react';
import {useRecoilState} from "recoil";
import {userState} from "../../store/atoms/userAtom";
import {Button, TextField} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {IUser} from "./type";

/**
 * Component File Description
 */
const Edit: React.FC<any> = () => {
    const {push, goBack} = useHistory();
    const [storeUser, setStoreUser] = useRecoilState(userState);
    const [user, setUser] = useState<IUser>(storeUser);

    const handleChange = (e: any) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setStoreUser(user);
        push('/user');
    };

    return (
        <>
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <div className="row mb-4">
                    <div className="col-3">
                        <TextField name="name" label="Name" variant="outlined" value={user.name} onChange={handleChange}/>
                    </div>
                    <div className="col-3">
                        <TextField name="surname" label="Surname" variant="outlined" value={user.surname} onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-3">
                        <TextField name="age" label="Age" variant="outlined" value={user.age} onChange={handleChange}/>
                    </div>
                    <div className="col-3">
                        <TextField name="job" label="Job" variant="outlined" value={user.job} onChange={handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Button type={"submit"} className={"mr-3"} variant="contained" color="primary">
                            Update
                        </Button>
                        <Button variant="contained" color="secondary" onClick={() => goBack()}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Edit;