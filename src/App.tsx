import { useState } from "react"; // ✅ Import do hook

function App() {
  const [count, setCount] = useState(0); // ✅ Uso do hook useState



  return (
    <>
      <p>hello word</p>

      <button onClick={() => setCount(count + 1)}>
        Count {count}
      </button>
    </>
  )
}

export default App
