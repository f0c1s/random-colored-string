import black from "@f0c1s/color-black";
import blue from "@f0c1s/color-blue";
import cyan from "@f0c1s/color-cyan";
import green from "@f0c1s/color-green";
import magenta from "@f0c1s/color-magenta";
import red from "@f0c1s/color-red";
import white from "@f0c1s/color-white";
import yellow from "@f0c1s/color-yellow";

const simpleRandomInt = (low = 0, high = 8) => Math.floor(Math.random() * (high - low) + low);

function colored(str: string) {
    const colors = [black, blue, cyan, green, magenta, red, white, yellow];
    const choosenColor = colors[simpleRandomInt()];
    return choosenColor(str);
}

export default colored;
