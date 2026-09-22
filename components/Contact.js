// components/Contact.js
window.Contact = function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    course: 'portfolio',
    background: 'non-major',
    message: ''
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [activeFaq, setActiveFaq] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('이름과 연락처를 입력해 주세요.');
      return;
    }
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "비전공자인데 포트폴리오 제작 및 취업이 가능한가요?",
      a: "네, KD아카데미 수강생의 약 65%가 비전공자입니다. 2D CAD 기초 설계부터 스케치업 모델링, D5 Render/V-Ray 렌더링까지 단계별 1:1 커리큘럼으로 비전공자도 실무 수준의 완성도 높은 포트폴리오를 만들 수 있습니다."
    },
    {
      q: "포트폴리오 1권을 완성하는 데 평균 소요 기간은 얼마인가요?",
      a: "개인별 주당 작업 시간에 따라 차이가 있으나, 마스터 취업반 기준 통상 3개월~5개월 동안 2~3개의 개별 프로젝트(주거, 상업 등)와 도면집, 북바인딩을 완벽하게 완성합니다."
    },
    {
      q: "상담 시 기존에 작업했던 파일이나 스케치를 가져가도 되나요?",
      a: "네, 적극 권장합니다. 현재 수준과 목표하는 스튜디오 스타일에 맞추어 1:1 진단과 맞춤형 커리큘럼 설계를 도와드립니다."
    }
  ];

  return (
    <section id="contact" className="py-24 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] text-stone-500 font-mono">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-950">
            1:1 포트폴리오 상담 & 수강 문의
          </h2>
          <p className="text-stone-600 text-sm font-light">
            목표하는 인테리어 스튜디오에 맞는 최적의 포트폴리오 전략을 무료로 진단해 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-stone-200 shadow-sm">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 bg-stone-900 text-white rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-stone-900">상담 신청이 접수되었습니다.</h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto font-light">
                  {formData.name}님, 남겨주신 연락처({formData.phone})로 담당 멘토가 24시간 이내에 1:1 포트폴리오 진단 일정을 안내해 드리겠습니다.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', course: 'portfolio', background: 'non-major', message: '' }); }}
                  className="mt-6 px-6 py-2.5 text-xs uppercase tracking-wider font-semibold bg-stone-900 text-white"
                >
                  새로운 상담 신청하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-2">
                      이름 (성함) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="예: 홍길동"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-300 focus:border-stone-900 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-2">
                      연락처 (휴대폰) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-300 focus:border-stone-900 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-2">
                      희망 과정
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-300 focus:border-stone-900 focus:bg-white focus:outline-none transition-colors"
                    >
                      <option value="portfolio">인테리어 취업 포트폴리오 마스터반</option>
                      <option value="rendering">3D 실시간 렌더링 (D5 / V-Ray) 특화반</option>
                      <option value="cad">2D CAD & 실시설계 실무 도면반</option>
                      <option value="consult">기존 포트폴리오 1:1 크리틱/리터칭</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-2">
                      전공 여부
                    </label>
                    <select
                      value={formData.background}
                      onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-300 focus:border-stone-900 focus:bg-white focus:outline-none transition-colors"
                    >
                      <option value="non-major">비전공자 (첫 시작)</option>
                      <option value="major">관련 전공자 (실내건축/건축/디자인)</option>
                      <option value="employed">현직 실무자 (이직 / 역량 강화)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-2">
                    목표 스튜디오 및 상담 희망 사항
                  </label>
                  <textarea
                    rows="4"
                    placeholder="원하시는 취업 분야, 목표 스튜디오, 또는 평소 궁금하셨던 점을 편하게 적어주세요."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-300 focus:border-stone-900 focus:bg-white focus:outline-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs font-semibold uppercase tracking-widest bg-stone-950 text-white hover:bg-stone-800 transition-all duration-200 shadow-md active:scale-95"
                >
                  무료 1:1 포트폴리오 진단 신청
                </button>
              </form>
            )}
          </div>

          {/* Right: Info & FAQ */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            {/* Campus Info Box */}
            <div className="bg-white p-8 border border-stone-200 space-y-4">
              <h3 className="text-base font-medium text-stone-900">
                KD Academy 본원 캠퍼스
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                서울특별시 서초구 강남대로 000 KD디자인타워 4-5F <br />
                (강남역 / 신논현역 도보 3분)
              </p>

              <div className="pt-2 border-t border-stone-100 space-y-2 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span className="text-stone-400">상담 및 교육 시간:</span>
                  <span>평일 10:00 - 21:30 / 주말 10:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">대표 문의 전화:</span>
                  <span className="font-mono font-medium text-stone-900">02-555-7890</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">이메일:</span>
                  <span className="font-mono">contact@kd-academy.kr</span>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="bg-white p-8 border border-stone-200 space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-stone-900">
                자주 묻는 질문 (FAQ)
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div key={idx} className="border-b border-stone-100 pb-3">
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full text-left flex items-center justify-between text-xs font-medium text-stone-800 hover:text-stone-950 py-1"
                      >
                        <span>{faq.q}</span>
                        <span className="text-stone-400 ml-2">{isOpen ? '−' : '+'}</span>
                      </button>
                      {isOpen && (
                        <p className="mt-2 text-xs text-stone-600 font-light leading-relaxed pl-1">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
