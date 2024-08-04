console.log(new Date().getHours())

const productname =["cosmetics" , "Dress" ,"grocery" , "furniture" ];
    let productlist = "";
 
    //loop
    for(let i = 0 ; i < productname.length ; i++)
        {
            productlist += ' ' + productname[i] ;
        }

        console.log(productlist);