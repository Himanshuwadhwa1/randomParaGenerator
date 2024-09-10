import { LoremIpsum } from "lorem-ipsum";
const lorem = new LoremIpsum();
export function generateLoremIpsum(num){
    return lorem.generateWords(num);
}