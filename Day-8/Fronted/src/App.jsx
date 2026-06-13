import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [notes, setNotes] = useState([]);

  /// get notes
  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNotes(res.data.note);
      
    });
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  function submitHandle(e) {
    e.preventDefault();
    const { title, description } = e.target.elements;
    console.log(title.value, description.value);
    title.value="",
    description.value=""
    ///create notes

    axios
      .post("http://localhost:3000/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        //   console.log(res.data);
        fetchNotes();
      });
  }

  //delete notes

  function noteDelete(noteId) {
    axios.delete("http://localhost:3000/api/notes/" + noteId).then((res) => {
      //  console.log(res.data);
      fetchNotes();
    });
  }

  function updateNotes(noteId) {

    const newTitle=prompt("Enter new Title");
    const newDescription=prompt("enter description");

    if(!newTitle||!newDescription){
      alert("both filed required text")
      return;
    }

    axios
      .patch(`http://localhost:3000/api/notes/${noteId}`, {
        title:newTitle,
        description:newDescription,
      })

      .then((res) => {
        console.log("updates",res.data);
        fetchNotes()
      });
  }

  return (
    <>
      <form className="form-notes" onSubmit={submitHandle}>
        <input name="title" type="text" placeholder="enter title" />
        <input name="description" type="text" placeholder="enter description" />
        <button>submit</button>
      </form>

      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description} </p>
              <button
                className="deletebtn"
                onClick={() => {
                  noteDelete(note._id);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  updateNotes(note._id);
                }}
                className="updatebtn"
              >
                Update
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
