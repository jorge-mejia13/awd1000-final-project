
const SearchBar = ({ setSearchTerm }) => {
    return (
        <input 
            type="text" 
            className="form-control mb-5" 
            placeholder="Search workout by name or type" 
            onChange={(e) => { setSearchTerm(e.target.value) }}
        />
    )
}

export default SearchBar;