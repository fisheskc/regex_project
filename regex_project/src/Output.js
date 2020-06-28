import React, { Component, useRef } from 'react'

export default class Output extends Component {
    render() {
        const {outputBox, handleChangeOutput,handleSubmit} = this.props;
        return (
            <form>
                <div className="form">
                    <textarea
                        className="form-control"
                        rows="12"
                        cols="50"
                        value={outputBox}
                        onChange={handleChangeOutput}
                    />
                </div>
            </form>
        )
    }
}