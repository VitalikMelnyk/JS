var list ={
    value : 1,
    next : {
        value : 2,
        next : {
            value : 3,
            next : {
                value : 4,
                next : null
            }
        }
    }
};

function printList(list) {
    var tmp = list;
    while(tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}
function printList1(list) {
    console.log(list.value);
    if(list.next){
        printList1(list.next);
    }
}
function printReverseList(list){
    if(list.next){
        printReverseList(list.next);
    }
    console.log(list.value);
}

printList(list);
printList1(list);
printReverseList(list);

