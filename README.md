# random-colored-string

Random colored string in terminal

## Features

-   `colored(str)`: Returns the input string in a random color (both regular and soft variants)
-   `allColored(str)`: Returns an array of the input string in all available colors
-   Regular colors: black, blue, cyan, green, magenta, red, white, yellow
-   Soft colors: blackSoft, blueSoft, cyanSoft, greenSoft, magentaSoft, redSoft, whiteSoft, yellowSoft

## Related projects

| Name                  | NPM package                                                | GitHub repo                                              |
| --------------------- | ---------------------------------------------------------- | -------------------------------------------------------- |
| color-black           | [npm](https://www.npmjs.com/package/@f0c1s/color-black)    | [github](https://github.com/f0c1s/color-black)           |
| color-blue            | [npm](https://www.npmjs.com/package/@f0c1s/color-blue)     | [github](https://github.com/f0c1s/color-blue)            |
| color-cyan            | [npm](https://www.npmjs.com/package/@f0c1s/color-cyan)     | [github](https://github.com/f0c1s/color-cyan)            |
| color-green           | [npm](https://www.npmjs.com/package/@f0c1s/color-green)    | [github](https://github.com/f0c1s/color-green)           |
| color-magenta         | [npm](https://www.npmjs.com/package/@f0c1s/color-magenta)  | [github](https://github.com/f0c1s/color-magenta)         |
| color-red             | [npm](https://www.npmjs.com/package/@f0c1s/color-red)      | [github](https://github.com/f0c1s/color-red)             |
| color-white           | [npm](https://www.npmjs.com/package/@f0c1s/color-white)    | [github](https://github.com/f0c1s/color-white)           |
| color-yellow          | [npm](https://www.npmjs.com/package/@f0c1s/color-yellow)   | [github](https://github.com/f0c1s/color-yellow)          |
| random-colored-string | [npm](https://www.npmjs.com/package/random-colored-string) | [github](https://github.com/f0c1s/random-colored-string) |

## Usage

```typescript
import colored, { allColored } from "random-colored-string";

// Get string in a random color
console.log(colored("Hello, World!"));

// Get string in all available colors
console.log(allColored("Hello, World!"));

// Use specific colors
import { red, redSoft } from "random-colored-string";
console.log(red("Error!"));
console.log(redSoft("Warning..."));
```

## References

- [SVG IMG xterm256 colors wikimedia](https://upload.wikimedia.org/wikipedia/commons/1/15/Xterm_256color_chart.svg "xterm256 colors wikimedia https://upload.wikimedia.org/wikipedia/commons/1/15/Xterm_256color_chart.svg")
    -   No I am not missing `!`. I don't want to show image here.
-   https://github.com/tmux/tmux/wiki/FAQ#how-do-i-use-a-256-colour-terminal
-   https://learn.microsoft.com/en-us/windows/terminal/customize-settings/color-schemes
-   https://superuser.com/questions/67582/tty-with-256-colors
-   https://unix.stackexchange.com/questions/118806/tmux-term-and-256-colours-support
-   https://unix.stackexchange.com/questions/148/colorizing-your-terminal-and-shell-environment
-   https://unix.stackexchange.com/questions/23763/checking-how-many-colors-my-terminal-emulator-supports/23789#23789

## License

MIT License

Copyright (c) 2019-2025 Anubhav Saini
