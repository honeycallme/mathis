export function splitString(str : string)
{
    let words = str.split(" ");
    let midPoint = Math.floor(words.length / 2);
    
    // If the number of words is odd, add the extra word randomly to the first or second part
    if (words.length % 2 !== 0) midPoint += Math.floor(Math.random() * 2);
    
    let firstPart = words.slice(0, midPoint).join(" ");
    let secondPart = words.slice(midPoint).join(" ");
    
    return [firstPart, secondPart];
}

export function calculateMargin(marginValue : number) {
    const screenWidth = window.innerWidth;
    const standardScreenWidth = 1920; 
    const increment = 0.7;

    const extraPixels = screenWidth - standardScreenWidth;
    const extraMargin = Math.floor(extraPixels / 10) * increment;
    marginValue = -60 - extraMargin;

    return marginValue;
 }