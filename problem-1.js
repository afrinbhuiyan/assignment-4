
function calculateVAT( price ) {
    if( price <= 0 || typeof price !== "number" ) {
       return  "Invalid";
    }
    const VAT = 7.5;
    const totalVAT = VAT * price / 100;
    return totalVAT
}

const result = calculateVAT(200);
console.log(result);