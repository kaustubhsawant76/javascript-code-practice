const radius=[2,3,5,3];

const calculateArea=function(radius){
    const output=[];
    for(i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}

console.log(calculateArea(radius));

const calculateCircum=function(radius){
    const output=[];
    for(i=0;i<radius.length;i++){
        output.push(2*Math.PI*radius[i]);
    }
    return output;
}

console.log(calculateCircum(radius));


const calculateDiameter=function(radius){
    const output=[];
    for(i=0;i<radius.length;i++){
        output.push(2*radius[i]);
    }
    return output;
}

console.log(calculateDiameter(radius));

