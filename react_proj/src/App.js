import React from "react";
import { useDispatch, useSelector } from "react-redux";


function App() {

  const dispatch = useDispatch()

  const books = useSelector(state => state.books.books)


  return (
    <div>
      {books}
    </div>
  );
}

export default App;
