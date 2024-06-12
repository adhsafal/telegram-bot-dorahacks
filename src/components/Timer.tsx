import { useState, useEffect, useCallback } from "react";

interface TimeLeftProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const formatTime = (time: number) => String(time).padStart(2, "0");

interface TimerProps {
  initialTime: TimeLeftProps;
}

export default function Timer({ initialTime }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeftProps>(initialTime);

  const countdown = useCallback(() => {
    setTimeLeft((prevTimeLeft) => {
      const { days, hours, minutes, seconds } = prevTimeLeft;
      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        return prevTimeLeft;
      }

      let newDays = days,
        newHours = hours,
        newMinutes = minutes,
        newSeconds = seconds - 1;

      if (newSeconds < 0) {
        newSeconds = 59;
        newMinutes -= 1;
      }
      if (newMinutes < 0) {
        newMinutes = 59;
        newHours -= 1;
      }
      if (newHours < 0) {
        newHours = 23;
        newDays -= 1;
      }

      return {
        days: newDays,
        hours: newHours,
        minutes: newMinutes,
        seconds: newSeconds,
      };
    });
  }, []);

  useEffect(() => {
    const timerId = setInterval(countdown, 1000);
    return () => clearInterval(timerId);
  }, [countdown]);

  const renderTime = (time: string) => (
    <>
      <p className="bg-[#181F271A] px-[4px] py-[2px] max-w-max rounded-[4px]">
        {time[0]}
      </p>
      <p className="bg-[#181F271A] px-[4px] py-[2px] max-w-max rounded-[4px]">
        {time[1]}
      </p>
    </>
  );

  return (
    <>
      <div className="flex flex-col max-w-max">
        <div className="text-sm leading-normal text-[#181F27] font-semibold flex gap-[2px]">
          {renderTime(formatTime(timeLeft.days))}
          <p className="px-[4px] py-[2px] max-w-max">:</p>
          {renderTime(formatTime(timeLeft.hours))}
          <p className="px-[4px] py-[2px] max-w-max">:</p>
          {renderTime(formatTime(timeLeft.minutes))}
          <p className="px-[4px] py-[2px] max-w-max">:</p>
          {renderTime(formatTime(timeLeft.seconds))}
        </div>
        <div className="flex justify-between text-[#181F27] text-xs font-normal leading-normal">
          <p className="px-2">DAY</p>
          <p className="px-2">HR</p>
          <p className="px-2">MIN</p>
          <p className="px-2">SEC</p>
        </div>
      </div>
    </>
  );
}
