import { useContext } from "react"  
import { NoteContext } from "../context/NoteContext.jsx"
import Notecard from "../components/Notecard.jsx"

function Home() {
  const { notes,loading } = useContext(NoteContext)
  console.log(notes)
  

  if (loading) {  
    return(
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    )
  }
if (notes.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen"> 
        <p className="text-lg text-gray-600">No notes available.</p>
      </div>
    )
  }
 return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {notes.map((note) => (
        <Notecard key={note._id} note={note} />
      ))}
    </div>
  )
}

export default Home
