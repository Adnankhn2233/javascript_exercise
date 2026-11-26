// get only digit 
function onlyDigits(text : string) : string{
    return text.replace(/\D/g,"");
}

// the normalised function
export function normalisePhone (phone : string) : string | null  {

    let digits = onlyDigits(phone);

    if(digits.startsWith("0092")){
        digits = "0" + digits.slice(4);
    }
    else if (digits.startsWith("920"))
    {
        digits = "0" + digits.slice(3);
    }
    else if (digits.startsWith("92"))
    {
        digits = "0" + digits.slice(2);
    }
    else if (digits.startsWith("092"))
    {
        digits = "0" + digits.slice(3);
    }

    if (digits.length === 10 && digits.startsWith("3"))
    {
        digits = "0"+digits;
    }

    if(digits.length === 11 && digits.startsWith("03"))
    {
        return digits;
    }
    
    return null;
}

// console.log(normalisePhone("00923409374939"));
// console.log(normalisePhone("+923409374939"));
// console.log(normalisePhone("0300-123 4567"));

