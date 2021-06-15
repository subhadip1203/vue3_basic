###  audit prod dependency
command : `npm audit --production`

### run dev server
command : `npm run serve`

## Vue basic
    1. data

### data 
data : is a function, which return an object. <br>
1. those object properties can be used inside template
2. try to not use "v-html" : because it can push dangerous  code inside html (XSS issue)
3. v-if / v-else remove sor add item in DOM , where as v-show only add css of "display:none" or "display:block"
4. v-for : can work on "Array" or "object" both 
5. when using "v-for" to loop through data , always use "v-bind:key"
6. "v-bind:value" can be used in form item
7. "v-bind" tells the template that , do not consider "attribute" as string , but a "vue data"