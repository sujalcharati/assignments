count =0;
const counter=()=>{
    count+=1;
    console.log(`count:${count}`)
}
setInterval(counter,1000);
