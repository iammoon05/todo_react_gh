import React, { PureComponent } from "react";
import ToDo from "./todo";

export default class ToDoList extends PureComponent {


    render() {
        return(
            <div>
                <div className="todoListContainer">
                    { this.props.todos.map(
                        todo => 
                        <ToDo key={todo.key} 
                            text={todo.text} 
                            id={todo.id} 
                            deleteTodo={this.props.deleteTodo}>
                        </ToDo> ) }

                </div>
            </div>
        )   
    }

}