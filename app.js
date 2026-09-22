// app.js - KD아카데미 포트폴리오 통합 스크립트 (모든 컴포넌트 포함)

// 1. 헤더 컴포넌트
function Header({ onOpenConsultation, fontStyle, setFontStyle, hoverEffect, setHoverEffect }) {
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
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200 py-3' 
          : 'bg-white/80 backdrop-blur-sm border-b border-stone-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex flex-col tracking-tight group">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-stone-900 group-hover:scale-110 transition-transform"></span>
            <span className={`text-xl sm:text-2xl font-semibold tracking-wider text-stone-950 ${fontStyle === 'serif' ? 'font-serif' : 'font-sans'}`}>
              KD ACADEMY
            </span>
          </div>
          <span className="text-[10px] tracking-[0.25em] text-stone-500 uppercase ml-4.5 font-mono">
            Interior Architecture Design
          </span>
        </a>

        {/* 상단 눈에 띄는 디자인 비교 퀵 스위처 */}
        <div className="hidden lg:flex items-center gap-3 bg-stone-100 p-1.5 border border-stone-300 text-xs">
          <span className="font-mono text-stone-500 px-2 font-medium">⚡ 실시간 디자인 비교:</span>
          
          {/* 폰트 선택 */}
          <div className="flex items-center bg-white border border-stone-200">
            <button
              onClick={() => setFontStyle('serif')}
              className={`px-3 py-1 font-serif text-xs transition-colors ${fontStyle === 'serif' ? 'bg-stone-900 text-white font-medium' : 'text-stone-600 hover:text-stone-950'}`}
            >
              세리프 폰트
            </button>
            <button
              onClick={() => setFontStyle('sans')}
              className={`px-3 py-1 font-sans text-xs transition-colors ${fontStyle === 'sans' ? 'bg-stone-900 text-white font-semibold' : 'text-stone-600 hover:text-stone-950'}`}
            >
              산세리프 폰트
            </button>
          </div>

          {/* 호버 효과 선택 */}
          <div className="flex items-center bg-white border border-stone-200">
            <button
              onClick={() => setHoverEffect('effect1')}
              className={`px-3 py-1 text-xs transition-colors ${hoverEffect === 'effect1' ? 'bg-stone-900 text-white font-medium' : 'text-stone-600 hover:text-stone-950'}`}
            >
              효과 1: 소프트 줌
            </button>
            <button
              onClick={() => setHoverEffect('effect2')}
              className={`px-3 py-1 text-xs transition-colors ${hoverEffect === 'effect2' ? 'bg-stone-900 text-white font-medium' : 'text-stone-600 hover:text-stone-950'}`}
            >
              효과 2: 도면 투과(X-ray)
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-stone-600">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-stone-950 transition-colors text-[14px]"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={onOpenConsultation}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-stone-950 text-white hover:bg-stone-800 transition-all shadow-sm"
          >
            상담 신청
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-stone-800 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-900 text-white p-6 space-y-4">
          <div className="pb-3 border-b border-stone-800 space-y-2">
            <div className="text-xs text-stone-400 font-mono">디자인 실시간 비교:</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button 
                onClick={() => setFontStyle(fontStyle === 'serif' ? 'sans' : 'serif')}
                className="p-2 bg-stone-800 text-center"
              >
                폰트: {fontStyle === 'serif' ? '세리프' : '산세리프'}
              </button>
              <button 
                onClick={() => setHoverEffect(hoverEffect === 'effect1' ? 'effect2' : 'effect1')}
                className="p-2 bg-stone-800 text-center"
              >
                호버: {hoverEffect === 'effect1' ? '효과1' : '효과2(도면)'}
              </button>
            </div>
          </div>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-stone-300">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

// 2. 히어로 컴포넌트
function Hero({ fontStyle, onOpenConsultation }) {
  const titleFontClass = fontStyle === 'serif' ? 'font-serif italic' : 'font-sans font-normal tracking-tight';

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between pt-32 pb-16 px-6 sm:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-200/70 text-stone-800 text-xs tracking-widest uppercase font-mono">
            <span className="w-2 h-2 rounded-full bg-stone-900"></span>
            Interior Architecture & Spatial Design Archive
          </div>

          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-stone-950 leading-[1.12]">
            Spatial Narrative, <br />
            <span className={`text-stone-950 ${titleFontClass}`}>
              Architectural Form.
            </span>
          </h1>

          <p className="text-stone-600 text-base sm:text-lg max-w-xl font-light leading-relaxed">
            비움과 채움, 빛과 텍스처의 정밀한 조화. 
            주거와 상업, 팝업 VMD부터 2D CAD 실시도면, 실시간 3D 렌더링, 가구 디자인까지 
            KD아카데미 수강생들의 완성도 높은 포트폴리오를 탐색해 보세요.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-stone-950 text-stone-50 text-xs font-semibold tracking-widest uppercase hover:bg-stone-800 transition-all inline-flex items-center gap-3 shadow-md"
            >
              <span>작품 아카이브 감상하기</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-white border border-stone-300 text-stone-800 text-xs font-semibold tracking-widest uppercase hover:border-stone-950 transition-all"
            >
              <span>1:1 상담 안내</span>
            </button>
          </div>

          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center gap-2 text-xs text-stone-500">
            <span className="font-mono text-stone-800 uppercase tracking-wider font-semibold">4대 전문 영역:</span>
            <div className="flex flex-wrap items-center gap-1.5">
              {['실내건축(주거/상업/업무/팝업/VMD)', '2D CAD 실시도면', '3D CG & 렌더링(SketchUp/D5/Max)', '가구 디자인'].map((item) => (
                <span key={item} className="px-2.5 py-1 bg-stone-200/60 text-stone-700 text-[11px]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative overflow-hidden shadow-2xl bg-stone-950 border border-stone-300 group">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=85"
              alt="성수 팝업스토어 & VMD 쇼룸"
              className="w-full h-[460px] object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-[11px] uppercase tracking-widest text-stone-300 font-mono">Featured VMD Project</span>
              <h3 className={`text-xl sm:text-2xl text-white mt-1 ${titleFontClass}`}>성수 팝업스토어 & VMD 쇼룸</h3>
              <p className="text-xs text-stone-400 mt-1 font-mono">Designer. 이민우 · SketchUp & D5 Render</p>
              <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between text-xs text-stone-300">
                <span>면적: 215㎡ (65평)</span>
                <a href="#portfolio" className="text-stone-200 hover:text-white">자세히 보기 →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 3. 갤러리 컴포넌트
function Gallery({ onSelectProject, fontStyle, hoverEffect }) {
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');

  const projects = window.PROJECTS_DATA || [];
  const categories = window.CATEGORIES || [];

  const filteredProjects = React.useMemo(() => {
    return projects.filter((project) => {
      const matchCategory = activeCategory === 'all' || project.category === activeCategory;
      const matchSearch = searchQuery.trim() === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.designer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery, projects]);

  const titleFontClass = fontStyle === 'serif' ? 'font-serif' : 'font-sans font-semibold tracking-tight';

  return (
    <section id="portfolio" className="py-20 bg-stone-50/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-stone-500 font-mono mb-2">
              Portfolio Showcase
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-light text-stone-950 ${titleFontClass}`}>
              Interior, 3D & Furniture
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-light max-w-xl mt-2">
              카드를 클릭하면 상세 도면과 고화질 렌더링을 볼 수 있는 <strong>풀스크린 모달(옵션 1번)</strong>이 열립니다.
            </p>
          </div>

          <div className="relative w-full sm:w-80">
            <input
              type="text"
              placeholder="프로젝트, 툴, 디자이너 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-8 py-3 text-xs bg-white border border-stone-300 focus:border-stone-900 focus:outline-none text-stone-900"
            />
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400">🔍</span>
          </div>
        </div>

        {/* 카테고리 탭 */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-stone-200 scrollbar-none">
          {categories.map((cat) => {
            const count = cat.id === 'all' 
              ? projects.length 
              : projects.filter(p => p.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs tracking-wider transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                  isActive
                    ? 'bg-stone-950 text-white font-medium shadow-sm'
                    : 'bg-white text-stone-600 hover:text-stone-950 border border-stone-200 hover:border-stone-400'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 font-mono ${isActive ? 'bg-stone-800 text-stone-200' : 'bg-stone-100 text-stone-500'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-white border border-stone-200 flex flex-col transition-all duration-300 hover:shadow-xl hover:border-stone-400"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-950">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                    hoverEffect === 'effect1' 
                      ? 'group-hover:scale-108' 
                      : 'group-hover:opacity-30 group-hover:scale-103'
                  }`}
                />

                {/* Hover Effect 2: 2D Blueprint Overlap */}
                {hoverEffect === 'effect2' && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen bg-black/60 flex items-center justify-center p-4">
                    <img 
                      src={project.blueprintImage || project.thumbnail} 
                      alt="도면 오버랩"
                      className="w-full h-full object-contain filter invert contrast-125 brightness-110"
                    />
                    <span className="absolute bottom-3 right-3 px-2 py-0.5 text-[10px] uppercase font-mono tracking-widest bg-cyan-950 text-cyan-300 border border-cyan-700">
                      2D CAD Blueprint Overlay
                    </span>
                  </div>
                )}

                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-2.5 py-1 text-[11px] font-medium tracking-wider uppercase bg-stone-950/85 backdrop-blur-sm text-stone-100">
                    {project.categoryName}
                  </span>
                </div>

                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="px-2.5 py-1 text-[11px] font-mono bg-white/90 backdrop-blur-sm text-stone-800">
                    {project.area}
                  </span>
                </div>

                {hoverEffect === 'effect1' && (
                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 bg-white text-stone-900 text-xs uppercase font-semibold tracking-widest shadow-md">
                      VIEW PROJECT
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-stone-500 flex items-center justify-between mb-1">
                    <span>{project.designer}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className={`text-lg font-medium text-stone-950 group-hover:text-stone-600 transition-colors line-clamp-1 ${titleFontClass}`}>
                    {project.title}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 font-light leading-relaxed mt-2">
                    {project.concept}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span key={tool} className="px-2 py-0.5 text-[10px] font-mono bg-stone-100 text-stone-600">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-stone-900 group-hover:translate-x-1 transition-transform">
                    Explore →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 4. 프로젝트 상세 모달 (옵션 1번)
function ProjectModal({ project, onClose, onPrev, onNext }) {
  const [activeImageIdx, setActiveImageIdx] = React.useState(0);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext]);

  // 3D 렌더와 2D 도면을 연속으로 잇는 통합 미디어 리스트 구성
  const mediaList = React.useMemo(() => {
    if (!project) return [];
    const list = [];
    const images = project.images || [project.thumbnail];
    images.forEach((img, idx) => {
      list.push({
        type: '3d',
        title: `${project.title} 3D 투시도 #${idx + 1}`,
        image: img,
        tag: `3D Render View (${idx + 1}/${images.length})`,
        badge: `3D #${idx + 1}`
      });
    });
    // 2D 도면이 제외되지 않았을 때만 포함
    if (project.blueprintImage && project.excludeBlueprint !== true) {
      list.push({
        type: '2d',
        title: `${project.title} 2D CAD 실시설계 도면`,
        image: project.blueprintImage,
        tag: '2D CAD Blueprint View',
        badge: '2D 도면'
      });
    }
    return list;
  }, [project]);

  const currentMedia = mediaList[activeImageIdx] || mediaList[0] || { image: project.thumbnail, type: '3d', tag: '3D Render View', badge: '3D' };
  const has2D = mediaList.some(m => m.type === '2d');
  const count3D = mediaList.filter(m => m.type === '3d').length;

  const jumpToType = (type) => {
    const targetIdx = mediaList.findIndex(m => m.type === type);
    if (targetIdx !== -1) setActiveImageIdx(targetIdx);
  };

  const handlePrevMedia = () => {
    setActiveImageIdx((prev) => (prev - 1 + mediaList.length) % mediaList.length);
  };

  const handleNextMedia = () => {
    setActiveImageIdx((prev) => (prev + 1) % mediaList.length);
  };

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10 animate-fade-in">
      <div className="fixed inset-0" onClick={onClose}></div>

      <div 
        className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto z-10 shadow-2xl border border-stone-200 flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm px-6 py-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 text-[11px] font-medium tracking-wider uppercase bg-stone-900 text-stone-100">
              {project.categoryName}
            </span>
            <span className="text-xs text-stone-500 font-mono hidden sm:inline">
              Project ID: {project.id.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={onPrev} className="p-2 text-stone-600 hover:text-stone-950 hover:bg-stone-100" title="이전 (←)">
              ◀ 이전
            </button>
            <button onClick={onNext} className="p-2 text-stone-600 hover:text-stone-950 hover:bg-stone-100" title="다음 (→)">
              다음 ▶
            </button>
            <button onClick={onClose} className="p-2 text-stone-500 hover:text-stone-950 hover:bg-stone-100 font-bold ml-2">
              ✕ 닫기
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <div className="relative aspect-[16/10] bg-stone-950 overflow-hidden shadow-inner flex items-center justify-center group">
              <img
                src={currentMedia.image}
                alt={currentMedia.title}
                className={`w-full h-full transition-opacity duration-300 ${currentMedia.type === '2d' ? 'object-contain bg-white p-3' : 'object-cover'}`}
              />

              {/* 좌우 이전/다음 슬라이드 버튼 (3D ~ 2D 연속 순환) */}
              {mediaList.length > 1 && (
                <>
                  <button 
                    onClick={handlePrevMedia} 
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-black text-white p-2.5 rounded-full border border-white/40 transition-all z-20 shadow-lg cursor-pointer" 
                    title="이전 컷 (←)"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
                  </button>
                  <button 
                    onClick={handleNextMedia} 
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-black text-white p-2.5 rounded-full border border-white/40 transition-all z-20 shadow-lg cursor-pointer" 
                    title="다음 컷 (→)"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
                  </button>
                </>
              )}

              <div className="absolute bottom-4 right-4 bg-stone-900/90 text-white text-xs px-3.5 py-1.5 font-mono border border-stone-700 flex items-center gap-2 z-10 shadow-md">
                <span>{currentMedia.type === '3d' ? '🖼️' : '📐'} {currentMedia.tag}</span>
                <span className="bg-stone-800 text-amber-300 text-[10px] px-1.5 py-0.5 font-bold">
                  {activeImageIdx + 1} / {mediaList.length}
                </span>
              </div>
            </div>

            {/* ⭐️ [간결한 2D / 3D 전환 툴바] ⭐️ */}
            <div className="flex items-center justify-between gap-3 border-b border-stone-200 pb-2.5 pt-1">
              <div className="flex items-center gap-1.5 p-1 bg-stone-100 border border-stone-300">
                <button
                  onClick={() => jumpToType('3d')}
                  className={`px-3 py-1 text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                    currentMedia.type === '3d' ? 'bg-stone-900 text-white shadow-xs' : 'text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  <span>🖼️ 3D</span>
                  <span className="text-[10px] px-1.5 py-0.2 bg-stone-800 text-amber-300">{count3D}컷</span>
                </button>
                <button
                  onClick={() => has2D && jumpToType('2d')}
                  disabled={!has2D}
                  className={`px-3 py-1 text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                    !has2D 
                      ? 'opacity-40 cursor-not-allowed text-stone-400' 
                      : (currentMedia.type === '2d' ? 'bg-stone-900 text-white shadow-xs' : 'text-stone-700 hover:bg-stone-200')
                  }`}
                  title={!has2D ? '포함된 2D 도면이 없습니다 (제외됨)' : '2D 도면으로 이동'}
                >
                  <span>📐 2D</span>
                  <span className="text-[10px] px-1.5 py-0.2 bg-stone-200 text-stone-700">{has2D ? '1종' : '0개'}</span>
                </button>
              </div>

              <span className="text-xs font-mono text-stone-500">
                {activeImageIdx + 1} / {mediaList.length} · {currentMedia.title}
              </span>
            </div>

            {/* ⭐️ [이미지 밑에서 골라서 볼 수 있는 3D & 2D 통합 썸네일 스트립] ⭐️ */}
            {mediaList.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {mediaList.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative w-24 h-16 flex-shrink-0 overflow-hidden border-2 transition-all p-0.5 ${
                      activeImageIdx === idx 
                        ? 'border-amber-500 ring-2 ring-amber-500/50 shadow-md opacity-100 scale-102 z-10' 
                        : 'border-stone-200 opacity-60 hover:opacity-100'
                    }`}
                    title={item.title}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className={`w-full h-full ${item.type === '2d' ? 'object-contain bg-white' : 'object-cover'}`} 
                    />
                    <span className="absolute bottom-0 right-0 bg-stone-900/85 text-white font-mono text-[9px] px-1 font-bold">
                      {item.badge}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-stone-200">
            <div className="lg:col-span-8 space-y-5">
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif text-stone-950 font-light">
                  {project.title}
                </h2>
                <p className="text-sm text-stone-500 mt-1 font-mono">
                  {project.designer} · {project.location}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-widest font-mono text-stone-400 font-semibold">
                  Design Intent & Concept
                </h4>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
                  {project.concept}
                </p>
              </div>

              {project.features && (
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-widest font-mono text-stone-400 font-semibold">
                    Key Architectural Features
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-600 font-light">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-900 mt-1.5 flex-shrink-0"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="lg:col-span-4 bg-stone-50 p-6 space-y-5 border border-stone-200">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-mono text-stone-500 font-semibold mb-3">
                  Project Info
                </h4>
                <dl className="grid grid-cols-2 gap-y-2 text-xs">
                  <dt className="text-stone-400">공간 규격/면적</dt>
                  <dd className="text-stone-900 font-mono font-medium">{project.area}</dd>
                  <dt className="text-stone-400">제작 연도</dt>
                  <dd className="text-stone-900 font-mono">{project.year}</dd>
                  <dt className="text-stone-400">위치</dt>
                  <dd className="text-stone-900">{project.location}</dd>
                  <dt className="text-stone-400">디자이너</dt>
                  <dd className="text-stone-900 font-medium">{project.designer}</dd>
                </dl>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <h4 className="text-xs uppercase tracking-widest font-mono text-stone-500 font-semibold mb-2">
                  Software Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs font-mono bg-white border border-stone-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.materials && (
                <div className="pt-4 border-t border-stone-200">
                  <h4 className="text-xs uppercase tracking-widest font-mono text-stone-500 font-semibold mb-2">
                    Materials & Finishes
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.materials.map((m) => (
                      <span key={m} className="px-2 py-0.5 text-[11px] bg-stone-200 text-stone-700">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button onClick={onClose} className="px-5 py-2 text-xs font-semibold bg-stone-900 text-white">
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

// 5. 아카데미 소개 컴포넌트
function About({ onOpenConsultation }) {
  const curriculum = [
    { step: "01", title: "공간 기획 & VMD 콘셉팅", desc: "사용자 분석, 공간 브랜딩, 조닝(Zoning), 동선 계획 및 무드보드를 수립합니다." },
    { step: "02", title: "2D CAD 실시설계 & 상세도", desc: "실제 현장에서 쓰이는 정밀 평면도, 천장도, 입면도, 가구 상세도를 완성합니다." },
    { step: "03", title: "3D 모델링 & 실시간 렌더링", desc: "SketchUp, 3ds Max로 모델링하고 D5 Render 실시간 레이트레이싱으로 시각화합니다." },
    { step: "04", title: "가구 디자인 & 포트폴리오 북", desc: "맞춤 가구 디테일과 1:1 디렉팅을 거쳐 인쇄용/PDF 포트폴리오를 바인딩합니다." }
  ];

  return (
    <div id="about" className="py-24 bg-white border-t border-stone-200 space-y-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <div className="text-xs uppercase tracking-[0.25em] text-stone-500 font-mono">
              Academy Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-stone-950 font-light leading-tight">
              실무와 가장 가까운 <br />
              <span className="italic font-normal">공간 디자이너의 산실</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              KD아카데미는 단순 툴 테크닉을 넘어 공간의 본질과 구조, 빛과 재질의 디테일을 다루는 실무 중심 포트폴리오를 완성합니다.
            </p>
            <button onClick={onOpenConsultation} className="px-6 py-3 bg-stone-900 text-white text-xs uppercase font-semibold">
              1:1 포트폴리오 상담 신청
            </button>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {curriculum.map((c) => (
              <div key={c.step} className="p-6 bg-stone-50 border border-stone-200">
                <span className="text-2xl font-serif text-stone-400 font-light">{c.step}</span>
                <h3 className="text-sm font-semibold text-stone-900 mt-2 mb-1">{c.title}</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// 6. 상담 및 문의 컴포넌트
function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');

  return (
    <section id="contact" className="py-20 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <div className="text-xs uppercase tracking-[0.25em] text-stone-500 font-mono">Contact & Consultation</div>
        <h2 className="text-3xl font-serif text-stone-950 font-light">1:1 포트폴리오 상담 및 수강 문의</h2>
        <p className="text-stone-600 text-sm font-light">
          원하시는 인테리어 스튜디오에 맞는 최적의 포트폴리오 방향을 1:1로 진단해 드립니다.
        </p>

        {submitted ? (
          <div className="p-8 bg-white border border-stone-300">
            <h3 className="text-xl font-serif text-stone-900">상담 신청이 완료되었습니다!</h3>
            <p className="text-xs text-stone-500 mt-2">담당 멘토가 빠른 시간 내에 연락드리겠습니다.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-white p-8 border border-stone-200 shadow-sm max-w-xl mx-auto space-y-4">
            <input
              type="text"
              required
              placeholder="이름 (성함)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-300 focus:outline-none focus:border-stone-900"
            />
            <input
              type="tel"
              required
              placeholder="연락처 (010-0000-0000)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-300 focus:outline-none focus:border-stone-900"
            />
            <button type="submit" className="w-full py-3.5 bg-stone-950 text-white text-xs uppercase font-semibold tracking-wider hover:bg-stone-800">
              무료 1:1 상담 예약하기
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// 7. 푸터 컴포넌트
function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
        <div className="text-base font-serif text-white tracking-widest">KD ACADEMY</div>
        <p className="text-stone-500 font-light">실내건축 · VMD 팝업 · 2D 도면 · 3D CG 렌더링 · 가구 디자인 전문 아카데미</p>
        <p className="text-stone-600 font-mono text-[11px]">© {new Date().getFullYear()} KD Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}

// 8. 하단 플로팅 스타일 테스터 바
function StyleTesterBar({ fontStyle, setFontStyle, hoverEffect, setHoverEffect }) {
  return (
    <aside aria-label="디자인 샘플 비교 도구" className="fixed bottom-4 right-4 left-4 md:left-auto md:w-96 z-50 bg-stone-950 text-white p-4 shadow-2xl border border-stone-700 text-xs">
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-stone-800 font-mono">
        <span className="font-semibold text-amber-400">✨ 디자인 샘플 실시간 비교</span>
        <span className="text-[10px] text-stone-400">원클릭 변경</span>
      </div>

      <div className="space-y-3">
        <div>
          <div className="text-stone-400 mb-1 flex justify-between font-mono">
            <span>[2번] 헤드라인 폰트:</span>
            <span className="text-white font-semibold">{fontStyle === 'serif' ? '세리프' : '산세리프'}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setFontStyle('serif')}
              className={`py-1.5 px-2 border font-serif text-center ${fontStyle === 'serif' ? 'bg-white text-stone-950 font-bold border-white' : 'bg-stone-900 text-stone-400 border-stone-700'}`}
            >
              세리프 (우아함)
            </button>
            <button
              onClick={() => setFontStyle('sans')}
              className={`py-1.5 px-2 border font-sans text-center ${fontStyle === 'sans' ? 'bg-white text-stone-950 font-bold border-white' : 'bg-stone-900 text-stone-400 border-stone-700'}`}
            >
              산세리프 (모던)
            </button>
          </div>
        </div>

        <div>
          <div className="text-stone-400 mb-1 flex justify-between font-mono">
            <span>[3번] 마우스 호버 효과:</span>
            <span className="text-white font-semibold">{hoverEffect === 'effect1' ? '효과1 (소프트 줌)' : '효과2 (도면 투과)'}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <button
              onClick={() => setHoverEffect('effect1')}
              className={`py-1.5 px-2 border text-center ${hoverEffect === 'effect1' ? 'bg-white text-stone-950 font-bold border-white' : 'bg-stone-900 text-stone-400 border-stone-700'}`}
            >
              효과 1: 소프트 줌
            </button>
            <button
              onClick={() => setHoverEffect('effect2')}
              className={`py-1.5 px-2 border text-center ${hoverEffect === 'effect2' ? 'bg-white text-stone-950 font-bold border-white' : 'bg-stone-900 text-stone-400 border-stone-700'}`}
            >
              효과 2: 도면 투과
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

// 9. 메인 App
function App() {
  const [fontStyle, setFontStyle] = React.useState('serif');
  const [hoverEffect, setHoverEffect] = React.useState('effect1');
  const [selectedProject, setSelectedProject] = React.useState(null);

  const projects = window.PROJECTS_DATA || [];
  const currentIdx = selectedProject ? projects.findIndex(p => p.id === selectedProject.id) : -1;

  const handlePrev = () => {
    if (currentIdx > 0) setSelectedProject(projects[currentIdx - 1]);
    else setSelectedProject(projects[projects.length - 1]);
  };

  const handleNext = () => {
    if (currentIdx < projects.length - 1) setSelectedProject(projects[currentIdx + 1]);
    else setSelectedProject(projects[0]);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F9F9F8] text-stone-900 selection:bg-stone-900 selection:text-white">
      <Header 
        onOpenConsultation={scrollToContact}
        fontStyle={fontStyle}
        setFontStyle={setFontStyle}
        hoverEffect={hoverEffect}
        setHoverEffect={setHoverEffect}
      />
      <main>
        <Hero 
          fontStyle={fontStyle}
          onOpenConsultation={scrollToContact}
        />
        <Gallery 
          fontStyle={fontStyle}
          hoverEffect={hoverEffect}
          onSelectProject={(p) => setSelectedProject(p)}
        />
        <About onOpenConsultation={scrollToContact} />
        <Contact />
      </main>
      <Footer />

      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      <StyleTesterBar 
        fontStyle={fontStyle}
        setFontStyle={setFontStyle}
        hoverEffect={hoverEffect}
        setHoverEffect={setHoverEffect}
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
