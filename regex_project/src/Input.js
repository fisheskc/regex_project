import React from 'react'

export default function Input({setNewExtraction}) {
    const searchValue = React.useRef("");

    React.useEffect(() => {
        let holder= [...this.state.holder];
        holder.current.focus();
      }, []);

    setNewExtraction = (id) => {
        let temp= this.state.stringInput;
        let exp=/([A-Za-z._-]+@[a-zA-Z0-9.-_]+\.[a-zA-Z0-9.-_]+)/gi;
        let emailData= temp.match(exp);

        for(let x = 0; x <emailData.length; x++) {
            // 9 Checking for duplicates in text
            // indexOf checks the index value of array
            // returns -1, info does not exist
            if(holder.indexOf(emailData[x])===-1) {
            // 8 this is a duplicate of the array
            // the array is comma separated
            this.state.holder.push(emailData[x]);
            }
            this.setState(
                () => {
                  return holder;
                },
                () => console.log(this.holder)
            )
        }
    }
    
        const {stringInput, handleChange,handleSubmit} = this.props;
        return (
            <form onSubmit={() => handleSubmit()}>
                <div className="form">
                    <textarea
                        className="form-control"
                        name="name"
                        ref="stringInput"
                        rows="12"
                        cols="50"
                        value={stringInput}
                        onChange={handleChange}
                    />
                </div>
                <button className="btn btn-block btn-primary mt-3 text-uppercase">
                    Submit
                </button>
            </form>
        )
    
}


