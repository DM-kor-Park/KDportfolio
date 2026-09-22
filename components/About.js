// components/About.js
window.About = function About({ onOpenConsultation }) {
  const curriculum = window.CURRICULUM || [];

  return (
    <div id="about" className="space-y-24 py-24 bg-white">
      {/* 1. Philosophy Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-[0.25em] text-stone-500 font-mono">
              Academy Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-950 leading-tight">
              실무와 가장 가까운 <br />
              <span className="font-serif italic font-normal">공간 디자이너의 산실</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              KD아카데미는 단순한 컴퓨터 그래픽 툴 학원이 아닙니다. 
              공간의 형태와 구조, 인간 중심의 동선, 마감재의 질감과 빛의 움직임을 이해하는 
              ‘진짜 공간 디자이너’를 양성합니다.
            </p>
            <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              국내외 유수의 인테리어 디자인 스튜디오 출신 실무진이 수강생 개개인의 개성과 역량에 맞추어 
              1:1 밀착 디렉팅으로 타협 없는 하이엔드 포트폴리오를 완성합니다.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-stone-900 text-stone-50 text-xs uppercase tracking-widest font-semibold hover:bg-stone-800 transition-colors"
              >
                1:1 포트폴리오 진단 받기
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-stone-50 border border-stone-200/80 space-y-3">
              <div className="w-10 h-10 bg-stone-900 text-white flex items-center justify-center font-serif text-lg">
                01
              </div>
              <h3 className="text-base font-medium text-stone-900">1:1 소수정예 밀착 크리틱</h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                공장형 일괄 수업이 아닌, 개인별 지향 공간(주거, F&B, 리테일, 하이엔드 오피스)에 맞춘 맞춤형 포트폴리오 디렉팅.
              </p>
            </div>

            <div className="p-8 bg-stone-50 border border-stone-200/80 space-y-3">
              <div className="w-10 h-10 bg-stone-900 text-white flex items-center justify-center font-serif text-lg">
                02
              </div>
              <h3 className="text-base font-medium text-stone-900">최신 렌더링 파이프라인</h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                D5 Render 실시간 레이트레이싱, V-Ray, 3ds Max를 결합하여 실제 시공 사진에 필적하는 극사실적 공간 씬을 구현합니다.
              </p>
            </div>

            <div className="p-8 bg-stone-50 border border-stone-200/80 space-y-3">
              <div className="w-10 h-10 bg-stone-900 text-white flex items-center justify-center font-serif text-lg">
                03
              </div>
              <h3 className="text-base font-medium text-stone-900">현업 표준 실시설계 도면</h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                디자인에만 머무르지 않고, 시공 현장에서 실제 쓰이는 평면도, 천장도, 입면도, 가구 상세도까지 완벽히 마스터합니다.
              </p>
            </div>

            <div className="p-8 bg-stone-50 border border-stone-200/80 space-y-3">
              <div className="w-10 h-10 bg-stone-900 text-white flex items-center justify-center font-serif text-lg">
                04
              </div>
              <h3 className="text-base font-medium text-stone-900">스튜디오 취업 연계 네트워크</h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                수료 후 국내 메이저 인테리어 디자인 설계사무소 및 브랜딩 스튜디오로의 추천 채용과 취업 포지셔닝을 적극 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Curriculum Roadmap Section */}
      <section id="curriculum" className="max-w-7xl mx-auto px-6 sm:px-8 pt-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] text-stone-500 font-mono">
            Structured Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-950">
            4-Step Master Curriculum
          </h2>
          <p className="text-stone-600 text-sm font-light">
            아이디어 스케치부터 실무 도면화, 실시간 3D 렌더링, 최종 포트폴리오 북 바인딩까지 이어지는 체계적 4단계 완성 로드맵.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {curriculum.map((item) => (
            <div
              key={item.step}
              className="relative p-7 bg-stone-50 border border-stone-200 flex flex-col justify-between hover:border-stone-400 transition-colors"
            >
              <div>
                <span className="font-serif text-3xl font-light text-stone-400">
                  {item.step}
                </span>
                <h3 className="text-base font-medium text-stone-900 mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80">
                <div className="text-[11px] font-mono text-stone-500 mb-1.5 uppercase">Master Tools:</div>
                <div className="flex flex-wrap gap-1">
                  {item.tools.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] bg-white border border-stone-200 text-stone-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Student Placement Highlight / Quote */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-6">
        <div className="bg-stone-950 text-stone-100 p-8 sm:p-12 md:p-16 relative overflow-hidden">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="text-xs uppercase tracking-widest text-stone-400 font-mono">
              Student Success Stories
            </div>
            <blockquote className="text-lg sm:text-2xl font-serif font-light leading-relaxed text-stone-100">
              “비전공자로서 공간 디자인 취업을 준비하며 막막했지만, KD아카데미의 1:1 도면 디렉팅과 D5 Render 하이퍼리얼 렌더링 수업 덕분에 상위권 인테리어 스튜디오에 원하는 조건으로 합격했습니다.”
            </blockquote>
            <div className="text-xs text-stone-400 font-mono">
              — 강지훈 실장 (KD 12기 수료 / 현 OOO 인테리어 아키텍처 시니어 디자이너)
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
