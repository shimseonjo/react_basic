export default function Button(){

  const handleClick = () => console.log("Ouch!");

  const handleClick2 = (name) => console.log(`${name} stop clicking me`);

  let count = 0;
  const handleClick3 = (name)=>{
    if(count<3){
      count++;
      console.log(`${name} you clicked me ${count} tiems`);
    }else{
      console.log(`${name} stop clicking me!`);
    }
  }

  const handleClick4 = (e) => {
    // console.log(e)
    e.target.textContent = "OUCH! 😣";
  }
  return(
    <>
      <button onClick={handleClick}>Click me 😁</button>
      <button onClick={() => handleClick2("hong")}>Click me 😁</button>
      <button onClick={() => handleClick3("hong")}>Click me 😊</button>
      {/* <button onClick={(e) => handleClick4(e)}>Click me 😊</button> */}
      <button onDoubleClick={(e) => handleClick4(e)}>Click me 😊</button>
    </>
  )
}

