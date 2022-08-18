const distance = 43;
function distanceFromHqInBlocks(someValue) {
    const TomMboya = someValue === distance? 1:8
    return TomMboya
  }
  function distanceFromHqInFeet(someValue) {
    const TomMboya = someValue === distance? 264:2112
    return TomMboya
}
function distanceTravelledInFeet(someValue) {
    if (someValue === 43 || someValue === 48){
        return 1320;
    }else if (someValue === 50|| someValue === 60){
        return 2640;
    }else{
        return 1584;
    }
}
const calculatesFarePrice = (start, destination)=>{
    if((Number(destination) - Number(start)) ===1){
        return 0;
    }if(start, destination ==start, destination === 32){
        return 2.56;
    }else if(start, destination === 50 || start, destination === 58){
        return 25;
    }else{
        return `cannot travel that far`;
    }
}
