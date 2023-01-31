import React, { useEffect, useState } from 'react';
import uuid from "react-uuid";
import "./App.css";
import Main from './components/Main';
import Sidebar from './components/Sidebar';


function App() {
    //STATE
    const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);
    const [activeNote, setActiveNote] = useState(false);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes]);

    const onAddNote = () => {
        const newNote = {
            id: uuid(),
            title: "Sans titre",
            body: "",
            lastModified: Date.now(),
        };
        setNotes([newNote, ...notes]);
    };
    const onUpdateNote = (updatedNote) => {
        const updatedNotesArray = notes.map((note) => {
            if(note.id === activeNote) {
                return updatedNote;

            }
            return note ;
        });
        setNotes(updatedNotesArray);
    };


    const onDeleteNote = (idToDelete) => {
        setNotes(notes.filter((note) => note.id !== idToDelete));
    };

    const getActiveNote = () => {
        return notes.find((note) => note.id === activeNote);
    }

    //RENDER
    return (
        <div className="App">
            <Sidebar
                notes={notes}
                onAddNote={onAddNote}
                onDeleteNote={onDeleteNote}
                activeNote={activeNote}
                setActiveNote={setActiveNote}
            />
            <Main
            activeNote={getActiveNote()}
            onUpdateNote={onUpdateNote} />
        </div>
    );
}

export default App;