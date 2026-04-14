const Footer = () => {
  return (
    <footer className="py-6 px-2 border-t border-border/0">
      <div className="container mx-auto">
        <div className="mt-0 pt-6 border-t border-gray-200 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mohammed Zaid</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
