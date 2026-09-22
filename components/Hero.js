// components/Hero.js
window.Hero = function Hero({ onExploreWorks, onOpenConsultation, fontStyle = 'serif' }) {
  const titleFontClass = fontStyle === 'serif' ? 'font-serif italic' : 'font-sans font-normal tracking-tight';

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-16 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Subtle Architectural Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] -z-10" 
        style={{ 
          backgroundImage: `linear-gradient(#1c1917 1px, transparent 1px), linear-gradient(90deg, #1c1917 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-1 my-auto">
        {/* Left Column: Architectural Typography */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-stone-100 border border-stone-200 text-stone-700 text-xs tracking-widest uppercase font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-900"></span>
            Interior Architecture & Spatial Design Archive
          </div>

          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-stone-900 leading-[1.12]">
            Spatial Narrative, <br />
            <span className={`text-stone-950 ${titleFontClass}`}>
              Architectural Form.
            </span>
          </h1>

          <p className="text-stone-600 text-base sm:text-lg max-w-xl font-light leading-relaxed">
            비움과 채움, 빛과 텍스처의 정밀한 조화. 
            주거와 상업, 팝업 VMD부터 2D CAD 실시도면, 실시간 3D 렌더링, 가구 디자인까지 
            KD아카데미의 완성도 높은 포트폴리오를 탐색해 보세요.
          </p>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-stone-950 text-stone-50 text-xs font-medium tracking-widest uppercase hover:bg-stone-800 transition-all duration-200 inline-flex items-center gap-3 shadow-md active:scale-95"
            >
              <span>포트폴리오 아카이브 보기</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>

            <a
              href="#about"
              className="px-8 py-4 bg-white border border-stone-300 text-stone-800 text-xs font-medium tracking-widest uppercase hover:border-stone-950 hover:text-stone-950 transition-all duration-200 inline-flex items-center gap-2 active:scale-95"
            >
              <span>아카데미 안내</span>
            </a>
          </div>

          {/* Disciplines Stack */}
          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-stone-500">
            <span className="font-mono text-stone-700 uppercase tracking-wider">Disciplines:</span>
            <div className="flex flex-wrap items-center gap-2">
              {['실내건축 & 주거', '상업 & 팝업 VMD', '업무 공간', '2D CAD 실시도면', '3D CG & 렌더링', '가구 디자인'].map((item) => (
                <span key={item} className="px-2.5 py-1 bg-stone-100 text-stone-700 text-[11px]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Showcase */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none group">
            <div className="absolute -inset-2 bg-stone-200/70 -rotate-1 rounded-none -z-10 transition-transform duration-500 group-hover:rotate-0"></div>
            
            <div className="relative overflow-hidden shadow-2xl bg-stone-950 border border-stone-300">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=85"
                alt="젠틀몬스터 x 탬버린즈 팝업스토어 VMD"
                className="w-full h-[460px] sm:h-[500px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <span className="text-[11px] uppercase tracking-widest text-stone-300 font-mono">Featured VMD Project</span>
                <h3 className={`text-xl sm:text-2xl text-white mt-1 ${titleFontClass}`}>성수 팝업스토어 & VMD 쇼룸</h3>
                <p className="text-xs text-stone-400 mt-1 font-mono">Designer. 이민우 · SketchUp & D5 Render</p>
                <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between text-xs text-stone-300">
                  <span>면적: 215㎡ (65평)</span>
                  <a href="#portfolio" className="inline-flex items-center gap-1.5 text-stone-200 hover:text-white">
                    <span>작품 목록 보기</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Architecture Spec Badge */}
            <div className="absolute -bottom-5 -left-5 bg-white p-4 shadow-xl border border-stone-200 hidden sm:block">
              <div className="text-xs font-mono uppercase text-stone-500">Selected Archive</div>
              <div className="text-xl font-serif font-semibold text-stone-950">KD Academy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
