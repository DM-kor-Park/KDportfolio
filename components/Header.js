// components/Header.js
window.Header = function Header({ activeSection, onNavigate, onOpenConsultation }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "포트폴리오", href: "#portfolio" },
    { label: "아카데미 소개", href: "#about" },
    { label: "커리큘럼", href: "#curriculum" },
    { label: "수강 상담", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3.5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          className="group flex flex-col tracking-tight transition-transform duration-200 active:scale-95"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-stone-900 rounded-none group-hover:scale-110 transition-transform"></span>
            <span className="text-xl sm:text-2xl font-semibold tracking-wider font-serif text-stone-950">
              KD ACADEMY
            </span>
          </div>
          <span className="text-[10px] tracking-[0.25em] text-stone-500 uppercase ml-4.5 font-sans font-medium">
            Interior Architecture Design
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-stone-600">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-stone-950 transition-colors relative py-1 text-[14.5px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-stone-900 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-widest bg-stone-900 text-stone-50 hover:bg-stone-800 transition-all duration-200 rounded-none shadow-sm hover:shadow active:scale-95 flex items-center gap-2"
          >
            <span>1:1 포트폴리오 상담</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-stone-800 hover:text-stone-950 focus:outline-none"
          aria-label="메뉴 열기"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-900 text-stone-100 border-b border-stone-800 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-4 text-base tracking-wide font-medium">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-stone-300 hover:text-white border-b border-stone-800/60"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 text-center text-xs uppercase tracking-widest font-semibold bg-stone-100 text-stone-900 hover:bg-white"
              >
                1:1 포트폴리오 상담 신청
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
