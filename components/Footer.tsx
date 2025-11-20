import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-500 py-8 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Cal Catalán. Hecho con ❤️ y aceite de oliva.</p>
    </footer>
  );
};

export default Footer;