
import React, { useState } from 'react'


const Search = (props) => {
    const [item, setItem] = useState();
    const changeHandeler = (e) => {
        //console.log(e.target.value)
        setItem(e.target.value);
    }

    function getbyid() {
        props.getbyid(item)
    }


    return (
        <>

            <div class="search">
                <input type="text" name='product' onChange={(e) => changeHandeler(e)} autoComplete="off" placeholder='Enter product name' />
                <button onClick={() => getbyid()} class="button">Search</button>
            </div>
        </>
    )
}

export default Search;