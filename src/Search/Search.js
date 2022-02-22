import React, {useState} from 'react';

const Search = ({handleInput}) => {

    const [value, setValue] = useState("")

const changeInput = (event) =>{
       setValue(event.target.value)
        handleInput(event.target.value)
}

    return (
        <div>
            <input onChange={changeInput} className="input" type="text" placeholder="what test are you looking for" value={value}/>

        </div>
    );
};

export default Search;