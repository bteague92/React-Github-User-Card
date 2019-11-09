import React from 'react';


const Search = (props) => {

    const handleChange = event => {
        props.setMPerson(event.target.value);
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Username Here"
                    onChange={handleChange}
                    name="search"
                />
            </form>
        </div>
    );
}

export default Search;