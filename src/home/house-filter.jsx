const HouseFilter = () => {
    return ( 
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Filter Houses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="flex flex-col">
                    <span className="text-gray-700 dark:text-gray-300 font-medium mb-2">Location:</span>
                    <input type="text" name="location" className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter location" />
                </label>
  
            </div>
        </div>
     );
}

export default HouseFilter;