function paperRequirements( firstBookQuantity, secondBookQuantity, thirdBookQuantity ) {
    const firstBookRequiredPage = 100;
    const secondBookRequiredPage = 200;
    const thirdBookRequiredPage = 300;

    const totalPageNeed = (firstBookQuantity * firstBookRequiredPage) + (secondBookQuantity * secondBookRequiredPage) + (thirdBookQuantity * thirdBookRequiredPage);

    return totalPageNeed;
}

const totalPageNeed = paperRequirements( 1, 1, 1 );
console.log( totalPageNeed );