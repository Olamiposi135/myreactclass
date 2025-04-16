const Navbar2 = () => {
  return (
    <nav className="flex justify-between items-center p-6 border-b-2">
      <h1 className= "font-bold cursor-pointer">LOGO</h1>
      <div>
        <ul className="flex gap-8 font-bold cursor-pointer">
          <li className="hover:text-blue-500">Home</li>
          <li className="hover:text-blue-500">About</li>
          <li className="hover:text-blue-500">Contact</li>
        </ul>
      </div>
      <div>
        <button className="bg-blue-400 px-6 py-2 rounded-md text-white" >Login</button>
      </div>
    </nav>
  )
}

export default Navbar2;