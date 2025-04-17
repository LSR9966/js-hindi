//JAVASCRIPT EXECUTION CONTEXT

// *GLOBAL EXECUTION CONTEXT
// *FUNCTION EXECUTION CONTEXT
// *EVAL EXECUTION CONTEXT

//  {} MEMORY CREATION PHASE/CREATION PHASE :- IN THIS MEMORY ARE ALLOCATED FOR VARIABLES
//   EXECUTION PHASE  :-

let val1=10
let val2=20

function result(num1,num2){      
    let ans=num1+num2
    return ans
}
let result1=result(val1,val2);
let result2=result(10,5)

/*  1) Global execution
             |
             this

    2)  Memory Phase
    val1->undefined
    val2->undefined
    result->defination
    result1->undefined
    result2->undefined

    3) Execution Phase
    val1->10
    val2->20           JAB JAB FUNCTION LIKEGEE
    result->           new variable environment + execution thread=new execution context
                        _____________________|___________
                        Memory Phase                Execution Context    //JAB KAAM HOGA TO DELETE HO JAYEGA
                        val1->undefined           num1->10
                        val2->undefined           num2->20
                        result->undefined         total->15 //TOTAL RETURN HOTA HAI GLOBAL EXECUTION CONTEXT
    
    
                        again NVE+THREAD
                                      |
                        memory phase           execution phase  

*/

// call stack 