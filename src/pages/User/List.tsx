import {FC, useEffect} from 'react';
import {useRecoilState} from "recoil";
import {userListSelector} from "../../store/selectors/user";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {IUser} from "./type";
import {useHistory} from "react-router-dom";

/**
 * Component File Description
 */
const List: FC<any> = () => {
    const {push} = useHistory();
    const [userList, setUserList] = useRecoilState<IUser[]>(userListSelector);

    useEffect(() => {
        if (!userList.length) {
            fetch("https://reqres.in/api/users?per_page=12")
                .then(result => result.json())
                .then(resp => setUserList(resp?.data));
        }
        // eslint-disable-next-line
    }, []);

    const deleteUser = (userId: number) => {
        const filterList: IUser[] = [...userList];
        filterList.splice(filterList.findIndex((item: IUser) => item.id === userId), 1);
        setUserList(filterList);
    };

    return (
        <>
            <h1>User List</h1>
            <div className="row">
                <div className="col">
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>&nbsp;</TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>&nbsp;</TableCell>
                                    <TableCell>&nbsp;</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {userList.map((row: IUser, index: number) => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell>{row.first_name}</TableCell>
                                        <TableCell>{row.last_name}</TableCell>
                                        <TableCell>{row.email}</TableCell>
                                        <TableCell align="right" style={{width: 100}}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => push(`/user/detail/${row.id}`)}
                                            >Detail</Button>
                                        </TableCell>
                                        <TableCell align="right" style={{width: 100}}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={() => deleteUser(row.id)}
                                            >Delete</Button>
                                        </TableCell>
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