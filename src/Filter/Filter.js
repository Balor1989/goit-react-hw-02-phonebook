

const Filter = ({value, onFilterChange}) => (
    <div>
        <h2>Filter</h2>
        <input
            type="text"
            value={value}
            onChange={onFilterChange}
        />
    </div>
)

export default Filter