import React, {Component} from "react";
export default class TodoItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="list-group-item">
                {this.props.title}
                <span className="float-end">
                    <i className="fa fa-trash"></i>
                    <i className="fa fa-edit"></i>
                </span>
            </li>
        )
    }
}