// src/components/Layout/Layout.jsx
const Layout = ({ children }) => {
  return (
    <div>
      <header>{/* Ваш header тут */}</header>
      <main>{children}</main>
    </div>
  );
};

export default Layout; // Це default export
