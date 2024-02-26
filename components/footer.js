const Footer = () => {
  return (
    <footer className="bg-black-900 text-white p-4 text-center">
      <div className="mb-2">Följ oss på sociala medier:</div>
      <div className="mb-4">
        {/* Exempel på länkar, ersätt # med faktiska länkar */}
        <a href="#" className="mx-2">Facebook</a> |
        <a href="#" className="mx-2">Twitter</a> |
        <a href="#" className="mx-2">Instagram</a>
      </div>
      <p>© 2024 Newsify. Alla rättigheter förbehållna.</p>
      <p>Allt innehåll är skyddat enligt Newsify's varumärken.</p>
    </footer>
  );
};

export default Footer;
