
import "./App.css";

const courses = [
  {
    name: "JEE Preparation",
    description: "Build strong concepts and prepare with focused practice.",
    fee: "From ₹3,000/month",
  },
  {
    name: "NEET Preparation",
    description: "Study biology, physics and chemistry with expert guidance.",
    fee: "From ₹3,000/month",
  },
  {
    name: "Foundation Classes",
    description: "Strengthen your maths and science fundamentals.",
    fee: "From ₹1,500/month",
  },
];

function App() {
  // Replace this with the real business WhatsApp number.
  const whatsapp = "https://wa.me/919876543210";

  return (
    <>
      <header className="navbar">
        <a className="logo" href="#home">
          BrightPath<span> Academy</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              LEARN SMARTER. ACHIEVE MORE.
            </span>

            <h1>Your future<br />starts with the<br /><span>right guidance.</span></h1>

            <p>
              Discover a better way to learn with structured
              courses, regular practice and personalised support.
            </p>

            <a className="button" href="#courses">
              Explore courses →
            </a>

            <div className="hero-note">
              <span>✓</span> Learn at your own pace
              <span>✓</span> Stay focused on your goals
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-top">
              <span>YOUR LEARNING JOURNEY</span>
              <span className="star">✦</span>
            </div>

            <div className="book-art">✎</div>
            <h2>Small steps.<br />Big achievements.</h2>
            <p>Build knowledge, confidence and skills every day.</p>

            <div className="visual-bottom">
              <span>FOCUS</span>
              <span>·</span>
              <span>PRACTICE</span>
              <span>·</span>
              <span>GROW</span>
            </div>
          </div>
        </section>

        <section className="courses section" id="courses">
          <div className="section-heading">
            <span className="eyebrow">FIND YOUR PATH</span>
            <h2>Courses designed for your goals.</h2>
            <p>Choose a programme that matches your ambitions.</p>
          </div>

          <div className="course-grid">
            {courses.map((course, index) => (
              <article className="course-card" key={course.name}>
                <div className="course-number">
                  0{index + 1}
                </div>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <strong>{course.fee}</strong>
                <a href={whatsapp} target="_blank" rel="noreferrer">
                  Enquire now ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="about section" id="about">
          <span className="eyebrow">WHY BRIGHTPATH?</span>
          <h2>Learning that moves you forward.</h2>
          <p>
            We believe every student can improve with clear
            explanations, consistent practice and the right support.
            Our learning approach helps you take the next step with confidence.
          </p>
        </section>

        <section className="contact section" id="contact">
          <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
          <h2>Ready to begin?</h2>
          <p>Talk to us about courses, fees and admissions.</p>
          <a className="button" href={whatsapp} target="_blank" rel="noreferrer">
            Chat on WhatsApp →
          </a>
        </section>
      </main>

      <footer>
        <a className="logo" href="#home">BrightPath Academy</a>
        <p>© {new Date().getFullYear()} BrightPath Academy. Demo website.</p>
      </footer>
    </>
  );
}

export default App;
