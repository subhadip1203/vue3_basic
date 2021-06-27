### methods 
methods : is an object, which has many functions <br>
1. those functions <b>should not be Arrow function </b> , only valina js function is allowed
2. as Arrow function , do not have access of "this" , so it is not allowed

### computed 
computed : are middle between data and method . it returns vanila functions (because we may nwwd to use "this" )

1. computed properties are catched , do not changed still any dependencies are changed
2. computed properties : by default has only "getter"  (no "setter" ) , but manually we can provide "setter"

### watch