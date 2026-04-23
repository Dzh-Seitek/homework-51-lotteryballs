import './App.css'

const getNewRandomNumbers = (): number[] => {
    const numbersSet = new Set<number>();

    while (numbersSet.size < 5) {
        const newNum = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
        numbersSet.add(newNum);
    }
    return Array.from(numbersSet).sort((a, b) => a - b);
}

function App() {

  return (
    <>

    </>
  )
}

export default App
