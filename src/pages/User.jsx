import { useState } from "react";

export default function User() {

  const [count, setCount] = useState(0);

  const [name, setName] = useState("");

  const Add = () => {
    setCount(count + 1);
    if (count >= 10) {
      setCount(10)
      setName("Cart is full")
      
    } else {
      setName("")
    }
  }

  const minus = () => {
    
    if (count > 0) {
      setCount(count - 1)
      
    } else if (count === 0) {
      setName("Cart is empty")
    }
    else if (count < 10) {
      setName("")
    }
  }

  const reset = () => {
    setCount(0)
    setName("")
  }
;

  return (
    <div className="p-[200px]">
      
      <button onClick={Add} className="m-5 py-3 px-6 rounded-xl bg-green-800 text-white shadow-lg hover:bg-green-600  ">Add</button>
    
    <span className="text-3xl font-bold ">{count}</span>

      <button className="mx-5 py-3 px-6 bg-red-400 text-white rounded-xl shadow-lg hover:bg-red-300 " onClick={minus}>Remove  </button>

      {count > 0 && (
        <button className="mx-5 py-3 px-6 bg-gray-600 text-white rounded-xl shadow-lg hover:bg-gray-500 " onClick={reset}>Reset  </button>
          
        )}

      <p className="text-xl text-red-500 mt-4 text-center ">{name}</p>
      
    
    </div>
    
  );
}