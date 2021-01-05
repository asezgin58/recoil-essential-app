import React, {useEffect} from 'react';
import {useRecoilState} from "recoil";
import {userListSelector} from "../../store/selectors/user";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {IUser} from "./type";

/**
 * Component File Description
 */
const List: React.FC<any> = () => {

    const [userList, setUserList] = useRecoilState<IUser[]>(userListSelector);

    useEffect(() => {
        fetch("https://reqres.in/api/users?per_page=12")
            .then(result => result.json())
            .then(resp => setUserList(resp.data));
    }, [setUserList]);

    return (
        <>
            <h1>User List</h1>
            <div className="row">
                <div className="col">
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>&nbsp;</TableCell>
                                    <TableCell>&nbsp;</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {userList.map((row: IUser) => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell>{row.first_name}</TableCell>
                                        <TableCell>{row.last_name}</TableCell>
                                        <TableCell>{row.email}</TableCell>
                                        <TableCell align="right" style={{width:100}}><Button variant="contained" color="primary">Detail</Button></TableCell>
                                        <TableCell align="right" style={{width:100}}><Button variant="contained" color="secondary">Delete</Button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    );
};

export default List;