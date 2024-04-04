      /////Task # 44 ///

//Sandwiches: Write a function that accepts a array of items a person wants on a
//sandwich. The function should have one parameter that collects as many items as
//the function call provides, and it should print a summary of the sandwich that 
//is being ordered. Call the function three times, using a different number of 
//arguments each time.

function make_sandwich(...item: string[]) {
    console.log(`Making a sandwich with: ${item.join( )}.`);   
}
make_sandwich("chicken", "capsicum","cheese")
make_sandwich("deli meat", "lettuce", "tomato")
make_sandwich("mayonnaise", "mustard", "Olives", "Avocado")



