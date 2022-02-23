import React, { useState } from "react";

const CreateForm = (props)=>{
    // create a new group and add it to the group list
    const[currentGroupName,setCurrentGroupName] = useState(''); 
    return(
        <div>
            <form>
                <label>Group Name
                    <input
                        type="text"
                        name="groupName" 
                        placeholder="ex: Project-Slippi"
                        value={currentGroupName}
                        onChange={(event)=>setCurrentGroupName(event.target.value)}
                    />
                </label>
                <input
                type="submit"
                value="Create Group"
                onClick={(event)=>{event.preventDefault(); props.createGroup(currentGroupName);setCurrentGroupName('')}}
                />
            </form>
        </div>
    )
}
export default CreateForm