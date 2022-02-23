// import react from 'react'
import { useParams } from "react-router-dom";
import MemberList from './TeamMemberList'
import Messages from './Messages'
import styled from "styled-components";
const GroupWrapper = styled.div`
border:1px solid black; 
`
const Group = (props) =>{
    let {teamID} = useParams(); 
    teamID = parseInt(teamID); 
    const {members, messages} = props.groupList.find(val=> val.groupId === (teamID))
    const {user} = props; 
    return(
        <GroupWrapper>
            <h2>Members:</h2>
            <MemberList user={user} members={members}/>
            <h3>Messages:</h3>
            <Messages sendMessage={(m)=>props.updateMessages(m)} user={user} messages={messages} members={members}/>
            <button onClick={()=>props.leaveGroup(teamID)}>Leave Group</button>
        </GroupWrapper>
    )
}

export default Group; 