import React, { useState, PureComponent } from "react";


export default class ToDoForm extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {todoCount: 0};
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(element) {
        if (this._inputElement.value !== "") {
            const newTodo =  {
                text: this._inputElement.value,
                id: this.state.todoCount,
                key: Date.now()
            };

            this.props.addTodo(newTodo);

            this.state.todoCount += 1;

            this._inputElement.value = "";

        }

        element.preventDefault();

    }
    render() {
        return (
            <div>
                <form onSubmit={this.addTodo}>
                    <input className="todoInput" onInput = {e => this._inputElement = e.target} placeholder="Add Todo!"/>
                    <button className="addButton" type='submit'>Create Todo</button>
                </form>
            </div>
            
        )
    }
}   