import React, {useState} from "react";

const SingleTask = ({ taskDetails }) => {

    const [backgroundColor, setBackgroundColor] = useState('rgb(144,238,144, 0.5)');
    const [completed, setCompleted] = useState(false);

    return (
        <div className="taskContainer" >
                <div className="singleTaskContainer" style={{backgroundColor: backgroundColor}}>
                    <h2 className="taskName"> {taskDetails} </h2>
                </div>
                <div className="buttonsContainer">
                    <button className="done" onClick={this.markDone}> Done! </button>
                    <button className="delete" onClick={this.deleteTodo}> Delete </button>

                </div>
            </div>
    )

}

export default SingleTask