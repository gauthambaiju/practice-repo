const obj = {
    name: "gautham",
    age: 20,
};

const jsonString = JSON.stringify(obj);
console.log(typeof jsonString);
console.log(jsonString);

const jsString = JSON.parse(jsonString);
console.log(jsString);
