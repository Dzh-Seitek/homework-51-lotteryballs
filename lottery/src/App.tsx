import './App.css';
import LotteryBall from "./LotteryBall.tsx";
import {useState} from "react";

const getNewRandomNumbers = (): number[] => {
    const numbersSet = new Set<number>();

    while (numbersSet.size < 5) {
        const newNum = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
        numbersSet.add(newNum);
    }
    return Array.from(numbersSet).sort((a, b) => a - b);
}

function App() {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);
    const generateNewRandomNumbers = () => {
        setNumbers(getNewRandomNumbers());
    }

  return (
    <>
        <div>
            <button onClick={generateNewRandomNumbers} className={'btn-number'}>New numbers</button>
            <div className={'ball-container'} style={{}}>
                {numbers.map((number) => (
                    <LotteryBall key={number} number={number}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default App
