import React, { useState } from 'react';
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';

function App () {
//STATE
const [compteur, setCompteur] = useState(1);


//BEHAVIOUR


//RENDER
return (
    <div>
        <h1>Bloc note</h1>
        <MarkdownInput/>
    </div>
);
}

export default App;