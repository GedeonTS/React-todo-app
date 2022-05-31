import React from 'react'

export default function TodoItem (props) {

    return <li> <input type="checkbox" checked={props.todo.completed}/> {props.todo.title}</li>
}
