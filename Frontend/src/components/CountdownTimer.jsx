import { useState, useEffect } from "react";

export default function CountdownTimer() {

  const targetDate = new Date("2026-10-09T00:00:00").getTime();

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
        days: Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="hero-buttons flex w-full mt-2 mb-0">
      <div
        className="border border-ultraviolet rounded-[1.25rem] sm:rounded-[2rem] px-3 py-2.5 sm:px-8 sm:py-5 bg-void/80"
      >
        <div className="flex gap-1.5 sm:gap-6 items-center justify-center">

          <div className="flex flex-col items-center">
            <span className="timer-digit">{formatNumber(timeLeft.months)}</span>
            <small className="timer-label">MONTHS</small>
          </div>

          <span className="font-mono text-sm sm:text-xl mb-3 sm:mb-4 text-text-muted">:</span>

          <div className="flex flex-col items-center">
            <span className="timer-digit">{formatNumber(timeLeft.days)}</span>
            <small className="timer-label">DAYS</small>
          </div>

          <span className="font-mono text-sm sm:text-xl mb-3 sm:mb-4 text-text-muted">:</span>

          <div className="flex flex-col items-center">
            <span className="timer-digit">{formatNumber(timeLeft.hours)}</span>
            <small className="timer-label">HOURS</small>
          </div>

          <span className="font-mono text-sm sm:text-xl mb-3 sm:mb-4 text-text-muted">:</span>

          <div className="flex flex-col items-center">
            <span className="timer-digit">{formatNumber(timeLeft.minutes)}</span>
            <small className="timer-label">MINUTES</small>
          </div>

          <span className="font-mono text-sm sm:text-xl mb-3 sm:mb-4 text-text-muted">:</span>

          <div className="flex flex-col items-center">
            <span className="timer-digit">{formatNumber(timeLeft.seconds)}</span>
            <small className="timer-label">SECONDS</small>
          </div>

        </div>
      </div>
    </div>
  );
}
