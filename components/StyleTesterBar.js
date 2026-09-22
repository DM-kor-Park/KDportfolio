// components/StyleTesterBar.js
window.StyleTesterBar = function StyleTesterBar({ 
  fontStyle, 
  setFontStyle, 
  hoverEffect, 
  setHoverEffect 
}) {
  const [minimized, setMinimized] = React.useState(false);

  if (minimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setMinimized(false)}
          className="px-4 py-2.5 bg-stone-900 text-stone-50 text-xs font-mono uppercase tracking-wider shadow-2xl border border-stone-700 flex items-center gap-2 hover:bg-stone-800 transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          <span>디자인 샘플 비교 컨트롤러 열기</span>
        </button>
      </div>
    );
  }

  return (
    <aside aria-label="디자인 스타일 실시간 비교 컨트롤러" className="fixed bottom-6 right-6 left-6 md:left-auto md:w-[480px] z-50 bg-stone-950/95 text-stone-100 p-5 shadow-2xl border border-stone-700 backdrop-blur-md animate-fade-in">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-800 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="font-semibold text-stone-200">디자인 샘플 실시간 비교 컨트롤러</span>
        </div>
        <button
          onClick={() => setMinimized(true)}
          className="text-stone-400 hover:text-white text-xs px-1.5 py-0.5"
          title="컨트롤러 최소화"
        >
          ✕ 접기
        </button>
      </div>

      <div className="space-y-4 text-xs">
        {/* Font Style Toggle */}
        <div>
          <div className="text-stone-400 font-mono mb-1.5 flex items-center justify-between">
            <span>[2번 선택] 헤드라인 폰트 스타일:</span>
            <span className="text-amber-400 font-semibold">{fontStyle === 'serif' ? '세리프 (우아/클래식)' : '산세리프 (모던/단단함)'}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setFontStyle('serif')}
              className={`py-2 px-3 text-center border font-serif transition-all ${
                fontStyle === 'serif'
                  ? 'bg-white text-stone-950 border-white font-medium'
                  : 'bg-stone-900 text-stone-400 border-stone-700 hover:text-stone-200'
              }`}
            >
              세리프형 (Cormorant)
            </button>
            <button
              onClick={() => setFontStyle('sans')}
              className={`py-2 px-3 text-center border font-sans font-semibold transition-all ${
                fontStyle === 'sans'
                  ? 'bg-white text-stone-950 border-white'
                  : 'bg-stone-900 text-stone-400 border-stone-700 hover:text-stone-200'
              }`}
            >
              산세리프형 (Montserrat)
            </button>
          </div>
        </div>

        {/* Hover Effect Toggle */}
        <div>
          <div className="text-stone-400 font-mono mb-1.5 flex items-center justify-between">
            <span>[3번 선택] 카드 마우스 호버 효과:</span>
            <span className="text-amber-400 font-semibold">{hoverEffect === 'effect1' ? '효과 1 (소프트 줌 & 버튼)' : '효과 2 (2D 도면 투과 오버랩)'}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setHoverEffect('effect1')}
              className={`py-2 px-2.5 text-center border transition-all text-[11px] ${
                hoverEffect === 'effect1'
                  ? 'bg-white text-stone-950 border-white font-medium'
                  : 'bg-stone-900 text-stone-400 border-stone-700 hover:text-stone-200'
              }`}
            >
              효과 1: 소프트 줌 & 정보
            </button>
            <button
              onClick={() => setHoverEffect('effect2')}
              className={`py-2 px-2.5 text-center border transition-all text-[11px] ${
                hoverEffect === 'effect2'
                  ? 'bg-white text-stone-950 border-white font-medium'
                  : 'bg-stone-900 text-stone-400 border-stone-700 hover:text-stone-200'
              }`}
            >
              효과 2: 2D 도면 투과 (X-ray)
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-stone-800/80 text-[11px] text-stone-400 flex items-center justify-between">
        <span>💡 버튼을 누른 후 갤러리 카드에 마우스를 올려보세요!</span>
      </div>
    </aside>
  );
};
