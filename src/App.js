import React, { Component } from 'react';
import './index.css';
import Plan from "./Plan.js";
export default class App extends Component {
  state={
    text:"",
    items:[]
    };
    handleChange = (e) =>{
     this.setState({text:e.target.value});
    }
    handleAdd = () =>{
      if(this.state.text!==""){
      const items=[...this.state.items,this.state.text];
      this.setState({items:items,text:""});
    }
  }
    handleDelete=(id)=>{
    const Olditems=[...this.state.items]
    const items=Olditems.filter((element,i)=>{
      console.log(element);
      return i !== id
     
    })
   
    this.setState({items:items})
    }
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
        <div className="col-sm-6 mx-auto text-black shadow-lg p-3">
              <h1 className="text-center"> Today's Plan </h1>
              <div className="row">
                 <div className="col-9">
                 <input type="text" className="form-control" placeholder="Write Your Plan Here" onChange={this.handleChange}></input>
                 </div>
                 <div className="col-2">
                  <button className="btn btn-primary px-5" onClick={this.handleAdd}>Add</button>
                 </div>
                 <div className="container-fluid">
                   <ul className="list-unstyled row m-5">
                 
                 {
                  this.state.items.map((value,i)=>{
                     return <Plan key={i} id={i} value={value} sendData={this.handleDelete}/>
                  })
                 }
                
                </ul>
                </div>
              </div>
            </div>
         </div>
      </div>
           );
           }
}

