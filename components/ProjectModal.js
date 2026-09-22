// components/ProjectModal.js
window.ProjectModal = function ProjectModal({ project, onClose, onPrev, onNext }) {
  const [activeImageIdx, setActiveImageIdx] = React.useState(0);

  // Close on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext]);

  // Reset active image index when project changes
  React.useEffect(() => {
    setActiveImageIdx(0);
  }, [project]);

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

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10 animate-fade-in">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Modal Container */}
      <div 
        className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto z-10 shadow-2xl border border-stone-200 flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
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
            {onPrev && (
              <button 
                onClick={onPrev}
                className="p-2 text-stone-600 hover:text-stone-950 hover:bg-stone-100 transition-colors"
                title="이전 프로젝트"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {onNext && (
              <button 
                onClick={onNext}
                className="p-2 text-stone-600 hover:text-stone-950 hover:bg-stone-100 transition-colors"
                title="다음 프로젝트"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-950 hover:bg-stone-100 transition-colors ml-2"
              title="닫기 (Esc)"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Main Visual Carousel / Large Viewer */}
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

              {/* 우측 하단 태그 */}
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

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-stone-200">
            {/* Left: Title & Design Concept */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-light text-stone-950">
                  {project.title}
                </h2>
                <p className="text-sm text-stone-500 mt-1 font-sans">
                  {project.designer} · {project.location}
                </p>
              </div>

              {/* Design Concept Paragraph */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-widest font-mono text-stone-400 font-semibold">
                  Design Intent & Philosophy
                </h4>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light whitespace-pre-line">
                  {project.concept}
                </p>
              </div>

              {/* Key Features List */}
              {project.features && (
                <div className="space-y-2.5">
                  <h4 className="text-xs uppercase tracking-widest font-mono text-stone-400 font-semibold">
                    Key Architectural Features
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-600 font-light">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-900 mt-1.5 flex-shrink-0"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right: Technical Specs & Materials */}
            <div className="lg:col-span-4 bg-stone-50 p-6 space-y-6 border border-stone-200/80">
              {/* Project Meta Info */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest font-mono text-stone-500 font-semibold">
                  Project Info
                </h4>
                <dl className="grid grid-cols-2 gap-y-2 text-xs">
                  <dt className="text-stone-400">공간 면적</dt>
                  <dd className="text-stone-900 font-mono font-medium">{project.area}</dd>
                  <dt className="text-stone-400">프로젝트 연도</dt>
                  <dd className="text-stone-900 font-mono">{project.year}</dd>
                  <dt className="text-stone-400">위치</dt>
                  <dd className="text-stone-900">{project.location}</dd>
                  <dt className="text-stone-400">담당 디자이너</dt>
                  <dd className="text-stone-900 font-medium">{project.designer}</dd>
                </dl>
              </div>

              {/* Software & Tools */}
              <div className="space-y-3 pt-4 border-t border-stone-200">
                <h4 className="text-xs uppercase tracking-widest font-mono text-stone-500 font-semibold">
                  Software Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 text-xs font-mono bg-white border border-stone-300 text-stone-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Material Palette */}
              {project.materials && (
                <div className="space-y-3 pt-4 border-t border-stone-200">
                  <h4 className="text-xs uppercase tracking-widest font-mono text-stone-500 font-semibold">
                    Material Palette
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.materials.map((mat) => (
                      <span
                        key={mat}
                        className="px-2.5 py-1 text-[11px] bg-stone-200/70 text-stone-700 font-sans"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
          <span className="text-xs text-stone-500 font-mono">
            KD Academy Interior Architecture Portfolio
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs uppercase tracking-wider font-semibold bg-stone-900 text-stone-50 hover:bg-stone-800"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
