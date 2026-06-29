export const Button = ({ children, variant = 'primary', ...props }: any) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition';
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export const Card = ({ children, className = '' }: any) => (
  <div className={`bg-white dark:bg-slate-700 rounded-lg shadow-lg p-6 ${className}`}>
    {children}
  </div>
);

export const Badge = ({ children, color = 'blue' }: any) => {
  const colors = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    red: 'bg-red-100 text-red-800',
    yellow: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${colors[color]}`}>
      {children}
    </span>
  );
};

export const Loading = () => (
  <div className="flex justify-center items-center p-8">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
  </div>
);

export const Alert = ({ type = 'info', message }: any) => {
  const colors = {
    info: 'bg-blue-100 text-blue-800 border-blue-300',
    success: 'bg-green-100 text-green-800 border-green-300',
    error: 'bg-red-100 text-red-800 border-red-300',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  };

  return (
    <div className={`border-l-4 p-4 ${colors[type]}`}>
      {message}
    </div>
  );
};
