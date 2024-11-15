import React, { Component } from "react";
import "./TodoApp.css";
export default class TodoApp extends Component {
    state={
    input:'', items:[]
    };
    handleChange=(event)=>{
        this.setState({
            input :event.target.value
        })
    }
    deleteItem =(index)=>{
        const allItmes=this.state.items;
        allItmes.splice(index, 1);
        this.setState({
            items:allItmes
        })
    }
    storeItem=(event)=>{
        event.preventDefault();
        const {input}=this.state;
        const allItmes=this.state.items;
        allItmes.push(input);
        this.setState({
            items:allItmes,
            input:''
        })
    }
  render() {
    const {input, items}=this.state
    console.log(items)
    return (
      <div className="todo-container">
        <h1>Todo App</h1>
        <form className="input-section" aria-placeholder="Enter Items..." onSubmit={this.storeItem}>
          <input type="text" value={input} onChange={this.handleChange }/>
        </form>
        <ul>
            {items.map((data, index)=>( <li key={index}>{data}<i className="fa-solid fa-trash" onClick={()=>this.deleteItem(index)}></i></li>))}
         
         
        </ul>
      </div>
    );
  }
}
