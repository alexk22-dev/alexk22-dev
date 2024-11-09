// Button Component
const Button = ({ children, onClick, className = '', type = 'button' }) => (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold
      transition-all duration-300 hover:bg-orange-600 hover:shadow-lg
      hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500
      focus:ring-opacity-50 ${className}`}
    >
      {children}
    </button>
  );