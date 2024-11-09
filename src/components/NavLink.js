// Simple Navigation Link Component
const NavLink = ({ to, children, currentPage, setCurrentPage }) => (
    <button
      onClick={() => setCurrentPage(to)}
      className={`text-gray-300 hover:text-orange-500 transition-colors ${
        currentPage === to ? 'text-orange-500' : ''
      }`}
    >
      {children}
    </button>
  );