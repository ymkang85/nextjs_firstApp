
const Delete = (props) => {
    return (
        <div className="sm:container mx-auto relative isolate px-6 pt-20 lg:px-8">
            <form className="mt-10 mx-32 px-64">
                <label for="password" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">password</label>
                <div class="relative">

                    <input type="password" id="password" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required />
                    <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">전 송</button>
                </div>
            </form>
        </div>
    )
}

export default Delete