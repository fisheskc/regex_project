import React, { Component } from 'react'
import Input from "./Input";
import Output from "./Output";

const [newExtraction, setNewExtraction] = React.useState("");
export default class FormOps extends Component {
    state ={
       stringInput: "Please put your test here. Hello email world real@email.com is simply dummy text of the printing and typesetting industry. real2@email.com Lorem Ipsum has been the real.t2@email.com industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also real.text@email.comthe leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more real.mapper@email.comrecently with desktop publishing software like Aldus PageMaker realfoot@email.comincluding versions reallogger@email.com of Lorem Ipsum.",
       outputBox: "",
       resultOuput: "",
       holder: []
    }

    handleChange = (e) => {
        const { name, value, type } = e.target
        this.setState({
            stringInput: e.target.value
        })
        // console.log("Working!")
     }
    
    handleSubmit = (e) => { 
        e.preventDefault();
        searchValue
        this.newExtraction();
     }  

    render() {
        // console.log(this.state)
        console.log(this.state)
        return (
            <div className="container">
               <div className="row">
                    <div className="10-,col mx-auto col-md-8 mt-5">                        
                        <Input 
                            stringInput={this.state.stringInput}
                            value={this.value}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        />
                        <Output 
                            stringInput={this.state.outputBox}
                            handleChange={this.handleChangeOutput}
                            handleSubmit={this.handleSubmit}
                        />
                    </div>
                </div> 
            </div>
           
        )
    }
}


