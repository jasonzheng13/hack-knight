import { Link } from 'react-router-dom';            // Link for navigating to /schedule without a page refresh
import CountdownTimer from './CountdownTimer';       // import the countdown as its own component to keep this file clean

export default function Hero() {
  return (
    <section className="section-wrapper flex flex-col items-center justify-center min-h-[80vh] text-center pt-32">

      <h1 className="font-display font-bold text-hero text-text-primary mb-4">HackKnight 2026</h1>                      {/* main page heading — biggest text on the page */}
      <p className="font-mono text-ultraviolet text-xl tracking-widest uppercase mb-8">October 17th - 19th, 2026</p>             {/* event date subtitle */}

      <p className="section-subtitle max-w-2xl text-center mx-auto">
        HackKnight is a 48-hour hackathon where students come together to create
        innovative projects. We are a student run organization dedicated to providing
        a great event for students to learn and grow. Join us for a weekend of coding,
        learning, and fun!
      </p>                                          {/* event description paragraph */}

      <CountdownTimer />                            {/* renders the countdown block — it's its own component */}

      <div className="flex gap-4 mt-12">                                         {/* wrapper to group the two side-by-side buttons */}
        <button className="btn-primary">Register Now</button>               {/* primary CTA — no functionality yet */}
        <Link to="/schedule" className="btn-outline">View Schedule</Link>   {/* navigates to the full /schedule page */}
      </div>

    </section>
  );
}