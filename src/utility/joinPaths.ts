
export function joinPaths (delimiter: string, ...inputs: string[]) : string;
export function joinPaths (delimiter: string, inputs: string[]) : string;
export function joinPaths (delimiter: string, inputs: string | string[]) : string {
  // typescript doesn't automatically convert the rest parameters to an array,
  // so we have to do this ourselves.
  if (arguments.length > 2) {
    const argsArr: string[] = [];
    for (let i = 1, j = arguments.length; i < j; i++){
      argsArr.push(arguments[i]);
    }
    inputs = argsArr;
  }

  if(!inputs || inputs.length === 0) return "";
  if(!Array.isArray(inputs)) return inputs;
  if(inputs.length === 1) return inputs[0];

  const dLength = delimiter.length;

  const output = inputs.reduce((prev, curr, idx) => {
    const hasDelimiter = prev.length >= dLength && prev.substr(prev.length - dLength, dLength) === delimiter;

    if(idx === 0) return curr;
    return prev + (hasDelimiter ? "" : delimiter) + curr;
  }, "");

  return output;
}
