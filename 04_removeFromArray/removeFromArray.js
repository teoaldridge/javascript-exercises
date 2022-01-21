let itemList;
let valuesToRemove;

const removeFromArray = function(itemList, valuesToRemove) {
    
    itemList = itemList.filter((i) => !valuesToRemove.includes(i));
    console.log(itemList);
    return itemList;
    
};

removeFromArray(itemList, valuesToRemove);

// Do not edit below this line
module.exports = removeFromArray;
