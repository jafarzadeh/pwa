export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}