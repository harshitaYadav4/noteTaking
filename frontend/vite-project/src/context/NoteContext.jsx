import { Children } from "react";
import { createContext } from "react";
import Backend_URL from "../api/url";
import { use } from "react";

const NoteContext = createContext();  

export const NoteProvider = ({children}) => {
    
const[notes, setNotes] = useState([]);
const[loading, setLoading] = useState(true);   

//fetch all notes
const getNotes = async () => {
    setLoading(true);
    try {
        const response = await Backend_URL.get("/get");
        setNotes(response.data);
    } catch (error) {
        console.error("Error fetching notes:", error);
    }finally {
        setLoading(false);
    }
}
useEffect(() => {
    getNotes();
}  , []);

//create a note
const createNote = async (note) => {
    const res = await Backend_URL.post("/create", note);
    setNotes([ res.data,...notes]);

}   

//update a note
const updateNote = async (id, note) => {}   

//delete a note
const deleteNote = async (id) => {}


return (
    <NoteContext.Provider value={{ notes, loading, createNote, updateNote, deleteNote }}>
    <children />
    </NoteContext.Provider>
)
}

