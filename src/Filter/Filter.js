

const Filter = ({value, onFilterChange}) => (
    <div>
        <h2>Find contacts by name</h2>
        <input
            type="text"
            value={value}
            onChange={onFilterChange}
        />
    </div>
)

export default Filter