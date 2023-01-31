import React, { useState } from 'react';


//STATE
const MarkdownInput = () => {
    const [markdown, setMarkdown] = useState('');

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

//BEHAVIOUR


//RENDER
return (
    <div>
        <p>Coucou depuis le composant MarkdownInput</p>

        
      <textarea value={markdown} onChange={handleChange} />
      <div>
        <p>{markdown}</p>
      </div>
    </div>
);
};


export default MarkdownInput ;