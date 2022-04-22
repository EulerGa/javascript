function checkCashRegister(price, cash, cid) {
  let dife = cash - price;
  let parcial = 0;
  let change = [];
  for ( let i = 8; i >= 0; i--) {
        switch (cid[i][0]) {
          case "ONE HUNDRED":
            while ( dife >= 100 && cid[i][1] >= 100) {
              dife -= 100;
              dife = Math.round(dife*100)/100;
              cid[i][1] -=100;
              cid[i][1] =  Math.round(cid[i][1]*100)/100;
              parcial += 100;
              parcial = Math.round(parcial*100)/100;
            }
            change.push(["ONE HUNDRED",parcial]);
              parcial = 0;
              break;
          case "TWENTY":
            while ( dife >= 20 && cid[i][1] >= 20) {
              dife -= 20;
              dife = Math.round(dife*100)/100;
              cid[i][1] -=20;
              cid[i][1] =  Math.round(cid[i][1]*100)/100;
              parcial += 20;
              parcial = Math.round(parcial*100)/100;
            }
            change.push(["TWENTY",parcial]);
              parcial = 0;
              break;
          case "TEN":
                while ( dife >= 10 && cid[i][1] >= 10) {
                  dife -= 10;
                  dife = Math.round(dife*100)/100;
                  cid[i][1] -=10;
                  cid[i][1] =  Math.round(cid[i][1]*100)/100;
                  parcial += 10;
                  parcial = Math.round(parcial*100)/100;
            }
                change.push(["TEN",parcial]);
                  parcial = 0;
                 break;
                  
          case "FIVE":
                  while ( dife >= 5 && cid[i][1] >= 5) {
                    dife -= 5;
                    dife = Math.round(dife*100)/100;
                    cid[i][1] -= 5;
                    cid[i][1] =  Math.round(cid[i][1]*100)/100;
                    parcial += 5;
                    parcial = Math.round(parcial*100)/100;
              }
                  change.push(["FIVE",parcial]);
                  parcial = 0;
                   break;

            case "ONE":
                  while ( dife >= 1 && cid[i][1] >= 1) {
                    dife -= 1;
                    dife = Math.round(dife*100)/100;
                    cid[i][1] -= 1;
                    cid[i][1] =  Math.round(cid[i][1]*100)/100;
                    parcial += 1;
                    parcial = Math.round(parcial*100)/100;
                }
                    change.push(["ONE",parcial]);
                    parcial = 0;
                     break;
            
            case "QUARTER":
                      while ( dife >= 0.25 && cid[i][1] >= 0.25) {
                        dife -= 0.25;
                        dife = Math.round(dife*100)/100;
                        cid[i][1] -= 0.25;
                        cid[i][1] =  Math.round(cid[i][1]*100)/100;
                        parcial += 0.25;
                        parcial = Math.round(parcial*100)/100;
                  }
                      change.push(["QUARTER",parcial]);
                       parcial = 0;
                       break;   
            case "DIME":
                    while ( dife >= 0.1 && cid[i][1] >= 0.1) {
                      dife -= 0.1;
                      dife = Math.round(dife*100)/100;
                      cid[i][1] -= 0.1;
                      cid[i][1] =  Math.round(cid[i][1]*100)/100;
                      parcial += 0.1;
                      parcial = Math.round(parcial*100)/100;
                    }
                        change.push(["DIME",parcial]);
                         parcial = 0;
                         break;  
              case "NICKEL":
                  while ( dife >= 0.05 && cid[i][1] >= 0.05) {
                      dife -= 0.05;
                      dife = Math.round(dife*100)/100;
                      cid[i][1] -= 0.05;
                      cid[i][1] =  Math.round(cid[i][1]*100)/100;
                      parcial += 0.05;
                      parcial = Math.round(parcial*100)/100;
                          }
                  change.push(["NICKEL",parcial]);
                  parcial = 0;
                  break;     
                  
              case "PENNY":
                    while ( dife >= 0.01 && cid[i][1] >= 0.01) {
                        dife -= 0.01;
                        dife = Math.round(dife*100)/100;
                        cid[i][1] -= 0.01;
                        cid[i][1] =  Math.round(cid[i][1]*100)/100;
                        parcial += 0.01;
                        parcial = Math.round(parcial*100)/100;
                            }
                    ;
                    change.push(["PENNY",parcial]);
                    parcial = 0;
                    break;   
        }
    
      
        

  }

  let caixa = cid.reduce(function(sum, col) {
    return sum + col[1];
  }, 0);
  caixa = Math.round(caixa*100)/100;
   let change_fil = change.filter(function(col) {
    return col[1] > 0;
  });
  if ( dife > 0 ) {
    let insff = {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
    return insff
  }
  if( dife === 0 && caixa === 0 ) {
    change = change.reverse();
    let closed = {
      status: "CLOSED",
      change: change
    }
    return closed
  }
  let open = {
    status: "OPEN",
    change: change_fil
  }
  return open
  }



//console.log(checkCashRegister(9, 60, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

//{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}