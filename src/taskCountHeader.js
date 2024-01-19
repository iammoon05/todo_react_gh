import React from "react";


const TaskCountHeader = ({ pendingTaskCount, completedTaskCount}) => {

    return (
        <span>
            <b>
                Unfinished task count: {pendingTaskCount}
            </b>
            <br></br>
            <b>
                Finished task count: {completedTaskCount}
            </b>
        </span>
    )
}

export default TaskCountHeader;