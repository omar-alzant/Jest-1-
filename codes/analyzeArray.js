// An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

//example : 
// const object = analyzeArray([1,8,3,4,2,6]);

// object == {
//     average: 4,
//     min: 1,
//     max: 8,
//     length: 6
//   };

const analyzeArray = (array)=>{
    let l = array.length,
        sum = array.reduce((t,e)=>{ return t+e },0),
        sorta = array.sort((a,b)=> a>b ? 1 : -1);
        return {
            average: sum/l,
            min: sorta[0], // or Math.min(...array)
            max: sorta.pop(), // or Math.max(...array)
            length: l,
        }
}
export default analyzeArray;

