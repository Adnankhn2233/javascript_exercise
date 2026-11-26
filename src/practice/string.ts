//trim and collapse spaces
export function  collapseSpaces (text : string): string{

    return text.trim().replace(/\s+/g," ");
}




// remove the puntcuation from the string 
export function removePunctuation(text: string): string {
  return text.replace( /[^a-zA-Z0-9\s]/g , "");
}




export function toTitleCase (text : string): string {

    let words = text.trim().split(/\s+/); 
    let capitalletter =words.map(w=> w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
    return capitalletter;
} 

//slug  
export function makeSlug(text: string): string {
  return text.trim().toLowerCase().replace( /\s+/g , "-" );
}


// // Remove all digits

export function removeDigits (str : string) : string{
    let onlyword = str.replace(/\d/g,"");
    return onlyword;
}




