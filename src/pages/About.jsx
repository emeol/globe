import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">🏠 Globe Homes</h1>
          <div className="flex gap-6">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">About</Link>
          </div>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">Welcome to Globe Homes, your premier destination for finding the perfect property.</p>
        <p className="text-lg text-gray-700 dark:text-gray-300">We connect buyers and sellers with beautiful homes around the world.</p>
      </main>
    </div>
  )
}

export default About
