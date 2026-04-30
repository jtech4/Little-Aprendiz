import { useState, useEffect, useCallback } from 'react';

const NAV_LINKS = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Programs', href: '#programs' },
  { label: 'Admission', href: '#admission' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

const TESTIMONIALS = [
  {
    name: 'Nicole L.',
    role: 'Parent',
    text: "Ms. Roman's enthusiasm and love for her students makes me smile each time I drop my daughter off at school. I feel comforted knowing Ms. Roman truly cares about my child - she always makes a point to provide feedback at the end of every day and bridge concepts we review at home into her school day.\n\nHer curriculum not only prepares your child academically for kindergarten, but also focuses on strengthening social and interpersonal skills. She makes each child feel important and she works with each parent to ensure your child is growing into a confident, caring, and inquisitive person. We feel very lucky to have Ms. Roman in our lives.",
    stars: 5,
    avatar: '',
  },
  {
    name: 'Matt B.',
    role: 'Parent',
    text: "Ms. Roman has been our daughter's teacher at her preschool and she has been amazing! During her time with Ms. Roman, not only did our daughter (now 4.5) learn social and developmentally appropriate interactions and interpersonal skills, but she has grown academically beyond our expectations.\n\nNot to mention, Ms. Roman is also full of love! She gives every child personal attention, care, and ensures that each individual is valued and feels safe at school. Great teaching, consistent practice, and reinforcement of skills necessary for our 4 year old to be ready for TK this coming year have been highlights.\n\nAs an elementary school Principal, I have no doubt that Ms. Roman's teaching has been above and beyond in setting our daughter on the right path for a successful education.",
    stars: 5,
    avatar: '',
  },
  {
    name: 'Carolina G.',
    role: 'Parent',
    text: "My daughter started at Little Aprendiz last year, and the improvement she has had in her speech and social skills is amazing. I'm forever grateful to Miss Roman and Leo. Being a working mom and having peace of mind when I leave my daughter at school is priceless. I love Little Aprendiz. I love the application they use, so I can see updates during the day of what my daughter is doing. Amazing place.",
    stars: 5,
    avatar: '',
  },
];

const BASICS = [
  { icon: 'ri-shield-check-line', label: 'Background Check', value: 'Yes' },
  { icon: 'ri-restaurant-line', label: 'Meals', value: 'Breakfast and Lunch' },
  { icon: 'ri-cake-line', label: 'Snacks', value: '1 per day' },
  { icon: 'ri-drop-line', label: 'Potty Training', value: 'Not Required' },
  { icon: 'ri-calendar-line', label: 'Schedules', value: '2, 3 and 5 days per week' },
  { icon: 'ri-global-line', label: 'Language(s) Supported', value: 'Spanish' },
  { icon: 'ri-group-line', label: 'Ratio', value: '1:4 teachers to children' },
  { icon: 'ri-money-dollar-circle-line', label: 'Pay Schedules', value: 'Monthly' },
  { icon: 'ri-heart-line', label: 'Subsidized Care', value: 'Not Accepted' },
  { icon: 'ri-book-open-line', label: 'Philosophy', value: 'Language Immersion · Play-based' },
];

const HERO_SLIDES = [
  '/assets/background.webp',
  '/assets/art-activity.jpg',
  '/assets/outdoor-parachute.jpg',
  '/assets/meal-time.jpg',
  '/assets/animal-mask-play.jpg',
  '/assets/neighborhood-walk.jpg',
  '/assets/ground-learning.jpg',
  '/assets/outdoor-pet-activity.jpg',
];

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-800 bg-[#FFFAF6]">
      {/* ── NAVBAR ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#FF8B7B]/30">
              <img
                src="/assets/logo.jpeg"
                alt="Little Aprendiz Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`font-bold text-lg md:text-xl whitespace-nowrap transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              Little Aprendiz
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap hover:text-[#FF8B7B] ${
                  scrolled ? 'text-gray-600' : 'text-white/90'
                }`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2tHCSJEuOkH04SiajERCp8TgdNH0niy_ZackQkUXitZEYOPg5PKCPSbgl-u0I9TUSYtCucZRS5"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#FF8B7B] hover:bg-[#ff7060] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-calendar-line"></i>
              Schedule a Tour
            </a>
            {/* Hamburger */}
            <button
              className={`md:hidden w-8 h-8 flex items-center justify-center cursor-pointer ${scrolled ? 'text-gray-700' : 'text-white'}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className={`text-xl ${menuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-left text-gray-700 font-medium py-2 border-b border-gray-50 cursor-pointer hover:text-[#FF8B7B]"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#tour')}
              className="mt-2 bg-[#FF8B7B] text-white font-semibold py-3 rounded-full cursor-pointer whitespace-nowrap"
            >
              Schedule a Tour
            </button>
          </div>
        )}
      </header>

      {/* ── HERO SLIDESHOW ── */}
      <section className="relative min-h-[560px] md:min-h-[680px] flex items-center overflow-hidden">
        {/* Slides */}
        {HERO_SLIDES.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/20"></div>
          </div>
        ))}

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 w-full py-24 md:py-32">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 bg-[#FF8B7B]/90 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
              <i className="ri-global-line"></i>
              Spanish Immersion Program
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
              Little Aprendiz
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-medium mb-3 leading-relaxed">
              A Spanish Immersion &amp; Early Childhood Education Program
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollTo('#tour')}
                className="flex items-center justify-center gap-2 bg-[#FF8B7B] hover:bg-[#ff7060] text-white font-bold px-8 py-4 rounded-full text-base transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-calendar-check-line"></i>
                Schedule a Tour
              </button>
              <button
                onClick={() => scrollTo('#programs')}
                className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors cursor-pointer whitespace-nowrap border border-white/40"
              >
                Learn More
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>


      </section>

      {/* ── SPANISH IMMERSION STRIP ── */}
      <section className="bg-[#FFF0EB] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
            {[
              { icon: 'ri-global-line', title: 'Bilingual Learning', desc: 'Children learn Spanish naturally through daily immersive activities, songs, and play.' },
              { icon: 'ri-chat-voice-line', title: 'Native-Level Fluency', desc: 'Our curriculum is designed to build genuine bilingual confidence from an early age.' },
              { icon: 'ri-heart-2-line', title: 'Emotional Intelligence', desc: 'We nurture self-awareness, empathy, and social skills to help children thrive in relationships and life.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FF8B7B]/15 flex-shrink-0">
                  <i className={`${item.icon} text-[#FF8B7B] text-xl`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section id="philosophy" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden flex-shrink-0 bg-[#F4F9F6]" style={{ height: '420px' }}>
              <img
                src="/assets/teachers.jpg"
                alt="Philosophy - Play-based learning"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-[#FF8B7B] text-xs font-bold uppercase tracking-widest mb-3 block">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-5 leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
                Language Immersion &amp; Play-Based Learning
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                At Little Aprendiz, we believe that the earliest years of a child&apos;s life are the most powerful window for language acquisition. Our Spanish immersion environment allows children to absorb a second language the same way they learned their first — naturally, joyfully, and without pressure.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                Our play-based curriculum is rooted in the understanding that children learn best through exploration, creativity, and meaningful relationships. Every activity — from morning circle to outdoor play — is intentionally designed to nurture curiosity, build social-emotional skills, and lay a strong academic foundation.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Language Immersion', 'Play-Based', 'Child-Led', 'Montessori Inspired'].map((tag) => (
                  <span key={tag} className="bg-[#FFF0EB] text-[#FF8B7B] text-xs font-semibold px-4 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS / TOUR PROGRAM ── */}
      <section id="programs" className="py-16 md:py-24 bg-[#F4F9F6]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-[#5BAD8F] text-xs font-bold uppercase tracking-widest mb-3 block">Tour Our Program</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
              A Day at Little Aprendiz
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Every day is filled with purposeful play, Spanish language activities, creative arts, and warm community. Here&apos;s a glimpse into our world.
            </p>
          </div>

          {/* Basics Grid from screenshot */}
          <div className="bg-white rounded-3xl p-6 md:p-10 mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <i className="ri-list-check-2 text-[#5BAD8F]"></i>
              Program Basics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
              {BASICS.map((b) => (
                <div key={b.label} className="flex items-start gap-3 border-b border-gray-50 pb-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F4F9F6] flex-shrink-0">
                    <i className={`${b.icon} text-[#5BAD8F] text-base`}></i>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-700">{b.label}</p>
                    <p className="text-sm text-[#5BAD8F] font-medium">{b.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo & Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { img: '/assets/interactive-learning-spaces.jpg', label: 'Interactive Learning Spaces' },
              { img: '/assets/outdoor-space.jpg', label: 'Safe Outdoor Play' },
              { img: '/assets/meal-time.jpg', label: 'Meal Time' },
              { img: '/assets/story-time.webp', label: 'Story Time' },
              { img: '/assets/motor-movement.jpg', label: 'Motor & Movement' },
              { img: '/assets/math-science2.jpg', label: 'Math & Science' },
            ].map((item) => (
              <div key={item.label} className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ height: '220px' }}>
                <img src={item.img} alt={item.label} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-4 left-4 text-white font-semibold text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Daily Routine */}
          <div className="mt-10 bg-white rounded-3xl p-6 md:p-10">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <i className="ri-time-line text-[#5BAD8F]"></i>
              Daily Routine
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { time: '8:00 AM', activity: 'Arrival &amp; Greetings' },
                { time: '8:30 AM', activity: 'Breakfast' },
                { time: '9:00 AM', activity: 'Indoor Small Group Activities' },
                { time: '10:00 AM', activity: 'Buenos Días "Circle Time"' },
                { time: '10:15 AM', activity: 'Music &amp; Movement' },
                { time: '10:20 AM', activity: 'Outdoor Play' },
                { time: '11:00 AM', activity: 'Bathroom/Diapering – Individual Reading' },
                { time: '11:30 AM', activity: 'Family Style Lunch' },
                { time: '12:00 PM', activity: 'Story Time' },
                { time: '12:10 PM', activity: 'Nap Time' },
                { time: '3:00 PM', activity: 'Afternoon Snack' },
                { time: '3:15 PM', activity: 'Indoor Free Play' },
                { time: '3:30 PM', activity: 'Outdoor Play' },
                { time: '4:00 PM', activity: 'Departure' },
              ].map((r) => (
                <div key={r.time} className="flex items-center gap-4 py-2 border-b border-gray-50">
                  <span className="text-[#5BAD8F] font-bold text-sm w-20 flex-shrink-0">{r.time}</span>
                  <span className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: r.activity }}></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ADMISSION ── */}
      <section id="admission" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FF8B7B] text-xs font-bold uppercase tracking-widest mb-3 block">Admission</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
              How to Join Our Family
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              We welcome families from all backgrounds. Our enrollment process is simple and starts with a tour so you can experience Little Aprendiz firsthand.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-0 md:gap-0 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-[#FFD5CC]" style={{ zIndex: 0 }}></div>
            {[
              { step: '01', icon: 'ri-calendar-check-line', title: 'Schedule a Tour', desc: 'Book a tour to visit our space and meet our teachers.' },
              { step: '02', icon: 'ri-map-pin-line', title: 'Visit Campus', desc: 'Come with your child and experience the warm, bilingual environment in which your child will thrive.' },
              { step: '03', icon: 'ri-file-text-line', title: 'Submit Application', desc: 'Complete our enrollment form with your child\'s information and your family\'s needs.' },
              { step: '04', icon: 'ri-checkbox-circle-line', title: 'Welcome to the Family!', desc: 'Once accepted, we\'ll guide you through orientation and your child\'s first day.' },
            ].map((s) => (
              <div key={s.step} className="flex-1 flex flex-col items-center text-center px-4 md:px-6 mb-8 md:mb-0 relative z-10">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#FFF0EB] border-4 border-white mb-4">
                  <i className={`${s.icon} text-[#FF8B7B] text-2xl`}></i>
                </div>
                <span className="text-[#FF8B7B] text-xs font-bold mb-1">Step {s.step}</span>
                <h4 className="font-bold text-gray-800 mb-2">{s.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Info Cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: 'ri-user-line', label: 'Program Type', value: 'Family Child Care' },
              { icon: 'ri-shield-line', label: 'License Number', value: '304313423' },
              { icon: 'ri-group-2-line', label: 'Age Range', value: '1 year – 5 years' },
            ].map((c) => (
              <div key={c.label} className="bg-[#FFFAF6] rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FF8B7B]/10 flex-shrink-0">
                  <i className={`${c.icon} text-[#FF8B7B] text-xl`}></i>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">{c.label}</p>
                  <p className="font-bold text-gray-800">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHEDULE A TOUR ── */}
      <section id="tour" className="py-16 md:py-24 bg-[#FFF0EB]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
            <div className="w-full lg:w-5/12">
              <span className="text-[#FF8B7B] text-xs font-bold uppercase tracking-widest mb-3 block">Book a Visit</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-5 leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
                Schedule a Tour
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                We&apos;d love to show you around! Schedule a tour to meet our teachers, explore our classrooms, and see our Spanish immersion school. Tours are available Monday through Friday after school ends.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: 'ri-time-line', text: 'Monday – Friday, Upon Availability' },
                  { icon: 'ri-phone-line', text: '(714) 951-8609' },
                  { icon: 'ri-map-pin-line', text: 'Huntington Beach, CA 92648' },
                ].map((i) => (
                  <div key={i.text} className="flex items-center gap-3">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FF8B7B]/15 flex-shrink-0">
                      <i className={`${i.icon} text-[#FF8B7B]`}></i>
                    </div>
                    <span className="text-gray-600 text-sm">{i.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-7/12 flex items-center justify-center">
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2tHCSJEuOkH04SiajERCp8TgdNH0niy_ZackQkUXitZEYOPg5PKCPSbgl-u0I9TUSYtCucZRS5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#FF8B7B] hover:bg-[#ff7060] text-white font-bold px-12 py-5 rounded-full text-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-calendar-check-line"></i>
                Schedule a Tour
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS / TESTIMONIALS ── */}
      <section id="reviews" className="py-16 md:py-24 bg-[#FFFAF6]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <span className="text-[#FF8B7B] text-xs font-bold uppercase tracking-widest mb-3 block">Parent Reviews</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
              What Families Are Saying
            </h2>
            <a
              href="https://www.yelp.com/biz/little-aprendiz-huntington-beach"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-full hover:border-[#FF8B7B] transition-colors cursor-pointer"
            >
              <i className="ri-star-fill text-yellow-400"></i>
              See all reviews on Yelp
              <i className="ri-external-link-line text-gray-400 text-xs"></i>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 whitespace-pre-line">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-[#FFF0EB] text-[#FF8B7B] font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENROLLMENT FORM ── */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
            <div className="w-full lg:w-5/12">
              <span className="text-[#5BAD8F] text-xs font-bold uppercase tracking-widest mb-3 block">Enrollment</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-5 leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
                Ready to Enroll?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                After your tour, we&apos;d love to welcome your child to the Little Aprendiz family. Fill out the form and our enrollment specialist will reach out to guide you through the next steps.
              </p>
              <div className="rounded-2xl overflow-hidden bg-[#F4F9F6]" style={{ height: '220px' }}>
                <img
                  src="/assets/ready-to-enroll.webp"
                  alt="Enrollment"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="w-full lg:w-7/12 flex items-center justify-center">
              <a
                href="https://app.lillio.com/online_registration/apply/little-aprendiz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#5BAD8F] hover:bg-[#4a9a7e] text-white font-bold px-12 py-5 rounded-full text-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-file-text-line"></i>
                Submit Enrollment Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section id="location" className="py-16 md:py-24 bg-[#F4F9F6]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <span className="text-[#5BAD8F] text-xs font-bold uppercase tracking-widest mb-3 block">Find Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
              Location &amp; Hours
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Map */}
            <div className="w-full lg:w-3/5 rounded-3xl overflow-hidden" style={{ minHeight: '380px' }}>
              <iframe
                title="Little Aprendiz Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1657.1!2d-118.00280!3d33.68950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000004!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* Info */}
            <div className="w-full lg:w-2/5 bg-white rounded-3xl p-6 md:p-8 flex flex-col gap-6">
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-4">Little Aprendiz</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: 'ri-map-pin-line', label: 'Address', value: 'Huntington Beach, CA 92648' },
                    { icon: 'ri-time-line', label: 'Hours', value: 'Monday – Friday\n8:00am – 4:00pm' },
                    { icon: 'ri-group-2-line', label: 'Age Range', value: '1 year – 5 years' },
                    { icon: 'ri-calendar-line', label: 'Established Since', value: '2018' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F4F9F6] flex-shrink-0">
                        <i className={`${item.icon} text-[#5BAD8F]`}></i>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                        <p className="text-gray-700 text-sm font-semibold whitespace-pre-line">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#2D3A35] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
                  <img
                    src="/assets/logo.jpeg"
                    alt="Little Aprendiz"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-bold text-lg">Little Aprendiz</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                A Spanish Immersion &amp; Early Childhood Education Program in Huntington Beach, CA.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white/90">Quick Links</h4>
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <button
                      onClick={() => scrollTo(l.href)}
                      className="text-white/60 hover:text-[#FF8B7B] text-sm transition-colors cursor-pointer"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white/90">Contact</h4>
              <div className="flex flex-col gap-3">
                {[
                  { icon: 'ri-phone-line', text: '(714) 951-8609' },
                  { icon: 'ri-mail-line', text: 'littleaprendizca@gmail.com' },
                  { icon: 'ri-map-pin-line', text: 'Huntington Beach, CA 92648' },
                  { icon: 'ri-time-line', text: 'Mon–Fri, 8:00am–4:00pm' },
                ].map((c) => (
                  <div key={c.text} className="flex items-center gap-2 text-white/60 text-sm">
                    <i className={`${c.icon} text-[#FF8B7B]`}></i>
                    {c.text}
                  </div>
                ))}
                <div className="flex items-center gap-3 mt-2">
                  <a
                    href="https://www.yelp.com/biz/little-aprendiz-huntington-beach"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FF8B7B] transition-colors cursor-pointer"
                  >
                    <i className="ri-star-fill text-white text-xs"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/little_aprendiz/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FF8B7B] transition-colors cursor-pointer"
                  >
                    <i className="ri-instagram-line text-white"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/littleaprendiz/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FF8B7B] transition-colors cursor-pointer"
                  >
                    <i className="ri-facebook-circle-line text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs">&copy; 2018 Little Aprendiz. All rights reserved.</p>
            <p className="text-white/40 text-xs">License #304313423 · Huntington Beach, CA</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
