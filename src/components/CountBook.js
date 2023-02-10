import { useEffect, useState } from "react";

// Components
import Title from "./Title/Title";

function CountBook() {
    const [books,setBooks] = useState(1);
  
    useEffect(
      () => {
        if (books > 5) {
          alert("hello");
        }
        else if (books <= -1) {
          setBooks(0);
        }
      }, 
      [books] // watch books value
    )

    return (
        <div> {/* use parent if you have elements */} 

            <Title data={books} />
            <button onClick={() => setBooks((prev) => ++prev)}>tambah</button>
            <button onClick={() => setBooks((prev) => --prev)}>kurang</button>
        
        </div>
    );
  }
  
  export default CountBook;
  