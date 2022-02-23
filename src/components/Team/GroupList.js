import react from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Group = (props)=>{
    const history = useHistory(); 
    const {groupName , groupId, members} = props
    return(
        <div>
            <h3>{groupName}</h3>
            <h4>Members:</h4>
            <div>
                {members.length > 0 ? members.map((val)=>{
                    return(
                        <h5 key={val.email}>{val.username}</h5>
                    )
                })
            : "none"}
            </div>
            <button onClick={()=>{props.joinGroup(props.groupId);history.push(`/teams/${groupId}`)}}>Join Group</button>
        </div>
    )
}


const GroupList = (props) =>{
    const {groupList} = props;
    return(
        <div>
            {
                groupList.map(val=><Group key={val.groupId} joinGroup={props.joinGroup} groupId={val.groupId} groupName={val.groupName} members={val.members} />)
            }
        </div>
    )
}

export default GroupList;