import React, { useState } from 'react';

    // const [text, setText] = useState('')
    // const [amount, setAmount] = useState('')

function AddTransaction() {
    return(
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" 
                        //  value={text}
                        //  onChange={(e) => setText(e.target.value)} 
                         placeholder="Enter Text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                        >Amount <br />
                        (negative - expense, positive - income) </label>
                <input 
                    type="number" 
                    // value={amount}
                    // onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount..." />
                </div>
                <button className="btn"> Add transaction </button>
            </form>
        </>
    )
}

export default AddTransaction;