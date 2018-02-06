
let array1 = [
    {
        blah: 'blah1'
    },{
        blah: 'blah2'
    },{
        blah: 'blah3'
    },{
        blah: 'blah4'
    },{
        blah: 'blah5'
    },{
        blah: 'blah6'
    },{
        blah: 'blah7'
    },{
        blah: 'blah8'
    },{
        blah: 'blah9'
    },{
        blah: 'blah10'
    }
]
let array2 = [{
    blah: 'blah5'
}]

let test = [];
test.push(array1);
test.push(array2)
//console.log(test);
let productsObj = [];
let productGroup = [];
let count = Math.ceil(array1.length / 4)
/* for(let x = 0; x < products.length; x++)
} */
console.log("LENGTH: "+array1.length);
console.log("Count: "+count);
let aCount = 1;
let prodArray = [];

for(let x = 0; x <array1.length; x++){
    
    if (aCount % 4 === 0) {
       
        console.log("inside if "+ x);
        productGroup.push(prodArray);
        prodArray.push(array1[x]);
        
        prodArray = [];
        

        
    }else {
        prodArray.push(array1[x]);
        console.log("inside else: "+ x);  
    }
        
    
    aCount++;
    if (x +1 === array1.length){
        productGroup.push(prodArray);
    }
    /* console.log("ACOUNT: "+aCount);
    console.log(x);
    
    if(aCount !== 0 &&  x % 4 === 0 ){
        console.log(prodArray);
        console.log("inside if");
        prodArray.push(array1[x]);
        productGroup.push(prodArray);
        
    }else {
        prodArray.push(array1[x]);
    }
    //console.log(prodArray);
    aCount++; */
      
}
for(let x = 0; x < productGroup.length; x++){
    console.log(x);
    for(let i =0; i < productGroup[x].length; i++){
        console.log(productGroup[x][i]);
    }
}
console.log("PRODUCTGROUP: ");
console.log(productGroup)