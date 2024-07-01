var employees = [
    { name: "tim", id: 1 },
    { name: "cindy", id: 2 },
    { name: "rob", id: 3 },
];
var elements = employees.map(function (item, index) {
    console.log(index);
    // return `<div>${item.id} - ${item.name}</div>`;
    return "".concat(item.id * 2);
}); //map은 다 하나씩 실행해서 다 돌린다. 약간 for문 너낌인가?
console.log(elements);
