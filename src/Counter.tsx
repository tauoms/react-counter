const Counter = () => {
    const handleAttack = () => {
        alert('Attack is clicked!')
    }
    const handleDefence = () => {
        alert('Defend is clicked!')
    }
  return (
    <div className="row text-white">
        <h1>Counter: </h1>
        <button onClick={handleAttack} style={{width:'200px'}}>+1</button>
        <button onClick={handleDefence} style={{width:'200px'}}>-1</button>
    </div>
    );
};

export default Counter;