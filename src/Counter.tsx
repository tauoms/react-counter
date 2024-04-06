import { useState } from "react";
import attack from './assets/attack.png';
import defend from './assets/defend.png';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleAttack = () => {
        // alert('Attack is clicked!');
        setCounter((preCounter) => {
            let newCount = preCounter + Math.round(Math.random()* 10);
            return newCount;
        });
    };
    const handleDefence = () => {
        // alert('Defend is clicked!');
        setCounter((preCounter) => {
            let newCount = preCounter - Math.round(Math.random()* 10);
            return newCount;
        });
    };

    const handleReset = () => {
        setCounter(0);
    };

    const handleRandomPlay = () => {
        let playMode = Math.round(Math.random());
        if(playMode === 0) {
            handleAttack();
        } else {
            handleDefence();
        }

        // playMode === 0 ? handleAttack() : handleDefence();
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
            <button onClick={handleRandomPlay} className="btn btn-secondary w-100 mt-2">Random Play</button>
            <button onClick={handleReset} className="btn btn-warning w-100 mt-2">Reset</button>
        </div>
    </div>
    );
};

export default Counter;