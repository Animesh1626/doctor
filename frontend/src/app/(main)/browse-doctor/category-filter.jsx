

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
    return (
        <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Specialties</h2>
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => onSelectCategory(category.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedCategory === category.id
                                ? "bg-blue-500 text-white"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                            }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

