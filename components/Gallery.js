// components/Gallery.js
window.Gallery = function Gallery({ 
  onSelectProject, 
  fontStyle = 'serif',       // 'serif' | 'sans'
  hoverEffect = 'effect1'    // 'effect1' (Soft Zoom & Info) | 'effect2' (Blueprint Overlap)
}) {
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
    <section id="portfolio" className="py-20 bg-stone-50/50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-[0.25em] text-stone-500 font-mono flex items-center gap-2">
              <span className="w-2 h-0.5 bg-stone-400"></span>
              Selected Works Archive
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-light text-stone-950 ${titleFontClass}`}>
              Interior, 3D & Furniture
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-light max-w-xl">
              실내건축, VMD 팝업, 2D 실시도면, 실시간 3D 렌더링, 가구 디자인까지 — 
              KD아카데미 수강생들의 치열한 탐구와 실무 역량이 담긴 포트폴리오 컬렉션입니다.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              placeholder="프로젝트, 툴, 디자이너 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-8 py-3 text-xs bg-white border border-stone-300 focus:border-stone-900 focus:outline-none transition-colors text-stone-900 placeholder:text-stone-400 shadow-2xs"
            />
            <svg 
              className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-stone-200 scrollbar-none">
          {categories.map((cat) => {
            const count = cat.id === 'all' 
              ? projects.length 
              : projects.filter(p => p.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 text-xs tracking-wider transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                  isActive
                    ? 'bg-stone-950 text-stone-50 shadow-sm font-medium'
                    : 'bg-white text-stone-600 hover:text-stone-950 border border-stone-200 hover:border-stone-400 font-normal'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-none font-mono ${
                  isActive ? 'bg-stone-800 text-stone-200' : 'bg-stone-100 text-stone-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-24 text-center text-stone-500 bg-white border border-stone-200">
            <p className="text-base font-light">해당 조건에 부합하는 포트폴리오 프로젝트가 없습니다.</p>
            <button 
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-5 py-2.5 text-xs uppercase tracking-wider bg-stone-900 text-white hover:bg-stone-800"
            >
              전체 포트폴리오 보기
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer bg-white border border-stone-200/90 flex flex-col transition-all duration-300 hover:shadow-xl hover:border-stone-400"
              >
                {/* Image Container with Dynamic Hover Effect */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-950">
                  {/* Base Render/Photo */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                      hoverEffect === 'effect1' 
                        ? 'group-hover:scale-108' 
                        : 'group-hover:opacity-40 group-hover:scale-103'
                    }`}
                  />

                  {/* Hover Effect 2: Blueprint CAD Overlap (X-ray mode) */}
                  {hoverEffect === 'effect2' && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none mix-blend-screen bg-black/60 flex items-center justify-center p-4">
                      <img 
                        src={project.blueprintImage || project.thumbnail} 
                        alt="도면 오버랩"
                        className="w-full h-full object-contain filter invert contrast-125 brightness-110"
                      />
                      <span className="absolute bottom-3 right-3 px-2 py-0.5 text-[10px] uppercase font-mono tracking-widest bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                        2D CAD Blueprint Overlay
                      </span>
                    </div>
                  )}

                  {/* Category Tag */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-2.5 py-1 text-[11px] font-medium tracking-wider uppercase bg-stone-950/85 backdrop-blur-sm text-stone-100">
                      {project.categoryName}
                    </span>
                  </div>

                  {/* Area / Size Tag */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="px-2.5 py-1 text-[11px] font-mono bg-white/90 backdrop-blur-sm text-stone-800">
                      {project.area}
                    </span>
                  </div>

                  {/* Hover Overlay 1: Text & Action Button */}
                  {hoverEffect === 'effect1' && (
                    <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 bg-white text-stone-900 text-xs uppercase font-semibold tracking-widest transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-md">
                        VIEW PROJECT
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono text-stone-500 flex items-center justify-between">
                      <span>{project.designer}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className={`text-lg font-medium text-stone-950 group-hover:text-stone-600 transition-colors line-clamp-1 ${titleFontClass}`}>
                      {project.title}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2 font-light leading-relaxed pt-1">
                      {project.concept}
                    </p>
                  </div>

                  {/* Footer Tools & Details */}
                  <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 text-[10px] font-mono bg-stone-100 text-stone-600"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="text-[10px] text-stone-400 self-center font-mono">
                          +{project.tools.length - 3}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-stone-900 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      <span>Explore</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
