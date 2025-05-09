import black from "@f0c1s/color-black";
import blue from "@f0c1s/color-blue";
import cyan from "@f0c1s/color-cyan";
import green from "@f0c1s/color-green";
import magenta from "@f0c1s/color-magenta";
import red from "@f0c1s/color-red";
import white from "@f0c1s/color-white";
import yellow from "@f0c1s/color-yellow";
const endSoft = "\x1b[0m";
const blackSoft = (text: string) => `\x1b[38;5;240m${text}${endSoft}`;
const blueSoft = (text: string) => `\x1b[38;5;110m${text}${endSoft}`;
const cyanSoft = (text: string) => `\x1b[38;5;152m${text}${endSoft}`;
const greenSoft = (text: string) => `\x1b[38;5;108m${text}${endSoft}`;
const magentaSoft = (text: string) => `\x1b[38;5;139m${text}${endSoft}`;
const redSoft = (text: string) => `\x1b[38;5;174m${text}${endSoft}`;
const whiteSoft = (text: string) => `\x1b[38;5;252m${text}${endSoft}`;
const yellowSoft = (text: string) => `\x1b[38;5;187m${text}${endSoft}`;

const colors = [
    black,
    blackSoft,
    blue,
    blueSoft,
    cyan,
    cyanSoft,
    green,
    greenSoft,
    magenta,
    magentaSoft,
    red,
    redSoft,
    white,
    whiteSoft,
    yellow,
    yellowSoft,
];
const simpleRandomInt = (low = 0, high = colors.length) => Math.floor(Math.random() * (high - low) + low);

function colored(str: string) {
    const choosenColor = colors[simpleRandomInt()];
    return choosenColor(str);
}

const allColored = (str: string): string[] => colors.map((color) => color(str));

export default colored;
export {
    black,
    blackSoft,
    blue,
    blueSoft,
    cyan,
    cyanSoft,
    green,
    greenSoft,
    magenta,
    magentaSoft,
    red,
    redSoft,
    white,
    whiteSoft,
    yellow,
    yellowSoft,
    colors,
    allColored,
};
