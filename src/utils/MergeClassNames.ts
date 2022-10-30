type Argument = string | false | undefined;

function mcn(...args: Argument[]):string {
    return args
        .filter((arg) => arg)
        .join(' ');
}

export default mcn;