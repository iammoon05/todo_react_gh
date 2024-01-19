import React, { PureComponent } from "react";


export default class ToDo extends PureComponent {
    constructor(props) {
        super(props);

        this.deleteTodo = this.deleteTodo.bind(this);
        this.markDone = this.markDone.bind(this);

        this.state = {
            backgroundColor: ''
        }
    }

    deleteTodo() {
        this.props.deleteTodo(this.props.id);
    }

    markDone() {
        if (this.state.backgroundColor === '') {
            this.setState({ backgroundColor: 'rgb(144,238,144, 0.5)'});
        } else {
            this.setState({ backgroundColor: ''});
        }
    }

    render() {
        return(
            <div className="todoContainer">
                <div className="singleTodoContainer" style={{backgroundColor: this.state.backgroundColor}}>
                    <h2 className="taskName"> {this.props.text} </h2>

                </div>
                <div className="buttonsContainer">
                    <button className="done" onClick={this.markDone}> Done! </button>
                    <button className="delete" onClick={this.deleteTodo}> Delete </button>

                </div>
            </div>
        )   
    }

}