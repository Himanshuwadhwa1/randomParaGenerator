import { useState } from "react"
import "../App.css"
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";
import { numAtom } from "../Data/atom";

export default function Form(){
    const [number,setNumber] = useState("");
    const setNum = useSetRecoilState(numAtom);
    function numberHandler(e){
        e.preventDefault();
        const textInput = e.target.querySelector('input[type="text"]');
        setNum(textInput.value);
    }
    return(
        <div>
            <h1>Para Generator</h1>
            <form onSubmit={numberHandler}>
                <input type="text" value={number} onChange={(e)=>{setNumber(e.target.value)}} className="text" placeholder="Enter number of words"/>
                <input type="submit" value="Generate" className="submit"/>
            </form>
        </div>
    )
}