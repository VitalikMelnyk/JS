var list = {
    value : 1,
    next : {
        value : 2,
        next: {
            value : 3,
            next : {
                value : 4
            }
        }
    }
};


function printList(list){
    var tmp = list;
    while(tmp){
        console.log(tmp.value);
        tmp = tmp.next;
    }
}
// printList(list);

function recursionPrintList(list) {
    console.log(list.value);
    if(list.next){
        recursionPrintList(list.next);
    }
}
// recursionPrintList(list);


function reversePrintList(list) {
    if(list.next){
        reversePrintList(list.next)
    }
    console.log(list.value);
}
// reversePrintList(list);

function reversePrintListWith(list) {
    var arr = [];
    var tmp = list;

    while(tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }
    for(var i = arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }
}
reversePrintListWith(list);