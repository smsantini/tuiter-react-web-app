import React, {Component} from "react";
import TodoItem from "./todoItem.js";
export default class ToDo extends Component {
    constructor() {
        super();
        this.state = {
            module: { title: ""},
            modules: [
                {title: 'Module 1', id: 123},
                {title: 'Module 2', id: 234},
                {title: 'Module 3', id: 345},
                {title: 'Module 4', id: 456}
            ]}
        this.titleChanged = this.titleChanged.bind(this);
        this.createToDo = this.createToDo.bind(this);
    }

    createToDo(todo) {
        // add later
    }

    titleChanged(event) {
        this.setState({module: {title: event.target.value}});
    }

    renderListOfModules() {
        return this.state.modules.map(function(todo){
            return <TodoItem title={todo.title} key={todo.id}/>
        });
    }
    render() {
        return (
            <div>
                <input className="form-control"
                       placeholder="title"
                       onChange={this.titleChanged}
                       value={this.state.module.title}/>
                <button className="btn btn-primary btn-block"
                        onClick={this.createToDo}>
                    Add New <i className="fa fa-plus"></i>
                </button>
                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>
            </div>
        );
    }
}