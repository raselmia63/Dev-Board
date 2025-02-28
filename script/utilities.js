function getInnerTextByID(id){
    const number = document.getElementById(id).innerText;
    const convertedNumber = parseInt(number);
    return convertedNumber;
}


function setInnerTextByIDandValue(id,value){
    document.getElementById(id).innerText =value;
}