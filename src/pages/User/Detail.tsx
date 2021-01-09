import {FC} from "react";
import {useRecoilValue} from "recoil";
import {Button} from "@material-ui/core";
import {useHistory, useParams} from "react-router-dom";
import {IUser} from "./type";
import {userSelector} from "../../store/selectors/user";

/**
 * Component File Description
 */
const Detail: FC<any> = () => {
    const {push}: any = useHistory();
    const {id}: any = useParams();
    const user: IUser = useRecoilValue<IUser>(userSelector(id));

    return (
        <>
            <h1>User Detail</h1>
            <div className="row mb-4">
                <div className="col">
                    {user && <>
                        <div><strong>Id : </strong>{user.id}</div>
                        <div><strong>Name : </strong>{user.first_name}</div>
                        <div><strong>Surname : </strong>{user.last_name}</div>
                        <div><strong>Email : </strong>{user.email}</div>
                    </>}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Button variant="contained" color="primary" onClick={() => push('/user')}>
                        Back to List
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Detail;