//            callback   also handle the error  in the createorder 

// function checkInventory (callback: () => void ) {
//     //callback
//     setTimeout( () => {
//          console.log("check the inventory");
//          callback()
//     },2000
//     );

// }

// function createorder (callback : (error : Error| null) => void){
//     setTimeout( () => {
//          console.log("Create the order");
//          let error = new Error("order creation failed")
//          callback(error)
//     },1000
//     );
// }

// function chargepayment (callback: (error: Error| null,chargeammount:number) => void) {
//     setTimeout( () => {
//          console.log("charge the payment");
//          let error =null;
//          let chargeammount = 100;
//          callback(error,chargeammount)
//     },2000
//     );
// }

// function sendinvoice (callback: () => void) {
//     setTimeout( () => {
//          console.log("Sent the invoice");
//          callback()
//     },1000
//     );
// }


// function main ()
// {
//     console.log("other process request")
//     // this is the callback hell which will cost more for the big project and compromised the managing of the project 
//     checkInventory(()=> {
//        createorder((error) => {
//         if(error)
//         {
//             console.log(error)
//         }
//         chargepayment((error, chargeammount)=> {
//             if (error)
//             {
//                 console.log(error)
//             }
//             else
//                 console.log(`charge ammount is ${chargeammount}`)
//             sendinvoice(()=>{
//                 console.log("process done")
//             })
//         })
//        });
//     });
//     // createorder(()=> {
//     //     console.log("created the order")
//     // });
//     // chargepayment(()=> {
//     //     console.log("charged the payment")
//     // });
//     // sendinvoice(() => {
//     //     console.log("send the invoice")
//     // });

// }
// main()
// // this will make the callback hell and the solution of this issues is the promises 



               // Promises 
function checkInventory(): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("check the inventory");
            resolve();
            //reject(new Error("failed to check the inventory"));
        }, 2000
        );
    })

}

function createorder(): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Create the order");
            resolve();
           // reject(new Error("failed to create the order"));
        }, 1000
        );
    })

}

function chargepayment(): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("charge the payment");
            // resolve();
            reject(new Error("failed to charge the payment"))
        }, 2000
        );
    })

}

function sendinvoice(): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sent the invoice");
            //resolve();
            reject(new Error("failed to send the invoice to the customer"))
        }, 1000
        );
    })

}


function main() {
    console.log("other process request")
    checkInventory().
        then(createorder)
        .then(chargepayment)
        .then(sendinvoice)
        .catch((error) => {
            console.log((error as Error).message)
        })
}
main()


//  async      await 

// function checkInventory(): Promise<void> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("check the inventory");
//            // resolve();
//             reject(new Error("failed to check the inventory"));
//         }, 2000
//         );
//     })

// }

// function createorder(): Promise<void> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Create the order");
//             resolve();
//            // reject(new Error("failed to create the order"));
//         }, 1000
//         );
//     })

// }

// function chargepayment(): Promise<void> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("charge the payment");
//             resolve();
//             //reject(new Error("failed to charge the payment"))
//         }, 2000
//         );
//     })

// }

// function sendinvoice(): Promise<void> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Sent the invoice");
//             resolve();
//             //reject(new Error("failed to send the invoice to the customer"))
//         }, 1000
//         );
//     })

// }


// async function main() {
//     try{
//          console.log("other process request")
//     await checkInventory();

//     }
//     catch (error){
//         console.log(error)
//     }
//     try{
//     await createorder();
//     await chargepayment();
//     await sendinvoice();
//     }
//     catch(error) {
//         console.log((error as Error).message)
//     }
   
// }
// main()
