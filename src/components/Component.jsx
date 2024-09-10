import { useRecoilValue } from "recoil"
import { numAtom } from "../Data/atom"
import { generateLoremIpsum } from "../utils/loremIpsum";

export default function Component(){
    const num = useRecoilValue(numAtom);
    const number = Number(num);
    const loremText = generateLoremIpsum(number);

    return (
        <div>
            {number!=0 && <p>{loremText}</p>}
            
        </div>
    )
}