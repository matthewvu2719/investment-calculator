

export default function UserInput({updateInput,input}) {
    
    


    
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                <label>INITIAL INVESTMENT</label>
                <input type="number" required onChange={(event)=>updateInput('initialInvestment',event.target.value)} value={input.initialInvestment}/>
                </p>
                <p>
                <label>ANNUAL INVESTMENT</label>
                <input type="number" required onChange={(event)=>updateInput('annualInvestment',event.target.value)} value={input.annualInvestment}/>
                </p>
            </div>

            <div className="input-group">
                <p>
                <label>EXPECTED RETURN</label>
                <input type="number" required onChange={(event)=>updateInput('expectedReturn',event.target.value)} value={input.expectedReturn}/>
                </p>
                <p>
                <label>DURATION</label>
                <input type="number" required onChange={(event)=>updateInput('duration',event.target.value)} value={input.duration}/>
                </p>
            </div>


        </section>
    );
}