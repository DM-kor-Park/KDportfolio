// components/Footer.js
window.Footer = function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-white"></span>
              <span className="text-xl font-serif tracking-wider font-semibold text-white">
                KD ACADEMY
              </span>
            </div>
            <p className="text-stone-400 text-xs max-w-sm font-light leading-relaxed">
              인테리어 건축 디자인 포트폴리오 전문 아카데미. 
              시공 실무와 하이퍼리얼 3D 렌더링을 겸비한 공간 디렉터를 양성합니다.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-stone-300 hover:text-white uppercase tracking-widest text-xs transition-colors"
          >
            <span>맨 위로 이동</span>
            <span className="p-2 border border-stone-700 group-hover:border-white transition-colors">
              ↑
            </span>
          </button>
        </div>

        <div className="pt-8 border-t border-stone-900 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-stone-300 font-medium block mb-2">CAMPUS LOCATION</span>
            <p className="font-light leading-relaxed text-stone-400">
              서울시 서초구 강남대로 000 KD디자인타워 4-5F <br />
              지하철 2호선 / 신분당선 강남역 9번 출구 도보 3분
            </p>
          </div>

          <div>
            <span className="text-stone-300 font-medium block mb-2">CONTACT</span>
            <p className="font-light leading-relaxed text-stone-400">
              Tel: 02-555-7890 <br />
              Email: portfolio@kd-academy.kr <br />
              Instagram: @kd_academy_interior
            </p>
          </div>

          <div>
            <span className="text-stone-300 font-medium block mb-2">OPERATING HOURS</span>
            <p className="font-light leading-relaxed text-stone-400">
              월 - 금 : 10:00 - 21:30 <br />
              토 - 일 : 10:00 - 18:00 (사전 예약제 1:1 상담 운영)
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 font-mono text-[11px]">
          <div>
            © {new Date().getFullYear()} KD Academy of Interior Architecture. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-stone-300">개인정보처리방침</a>
            <a href="#" className="hover:text-stone-300">이용약관</a>
            <a href="#" className="hover:text-stone-300">오시는 길</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
