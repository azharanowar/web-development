// Simple Interest Rate Calculation Logic ( a=p(1+rt). Here a = final amount, p = initial principal balance, r = annual interest rate, t	= time (in years) )

function simpleInterest ( p, r, t ) {
    const principalBalance = p;
    const annualInterestRate = r;
    const time = t;

    const finalAmount = principalBalance * ( 1 + ( annualInterestRate / 100 ) * time );

    return finalAmount;
}

const finalAmount = simpleInterest( 100, 10, 2 );
console.log( finalAmount );