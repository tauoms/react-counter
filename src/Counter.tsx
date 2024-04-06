import { useState } from "react";
import attack from './assets/attack.png';
import defend from './assets/defend.png';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleAttack = () => {
        // alert('Attack is clicked!');
        setCounter((preCounter) => preCounter + 1);
    };
    const handleDefence = () => {
        // alert('Defend is clicked!');
        setCounter((preCounter) => preCounter - 1);
    };
  return (
    <div className="row text-white text-center">
        <h1>Counter: {counter}</h1>
        <p>You win at +10 points and lose at -10</p>
        <p>Let's Play: </p>
        <p>Game satus: </p>
        <div className="col-6 col-md-3 offset-md-3"> 
            <img 
                className='p-4 rounded' 
                src={attack} alt="Attack" 
                onClick={handleAttack} 
                style={{cursor: 'pointer', width: '100%', border: '2px solid green'}} />
        </div>
        <div className="col-6 col-md-3"> 
            <img 
                className='p-4 rounded' 
                src={defend} alt="Defend" 
                onClick={handleDefence} 
                style={{cursor: 'pointer', width: '100%', border: '2px solid green'}} />
        </div>

        <div className="col-12 col-md-4 offset-md-4">
            <button className="btn btn-secondary w-100 mt-2">Random Play</button>
            <button className="btn btn-warning w-100 mt-2">Reset</button>
        </div>
    </div>
    );
};

export default Counter;