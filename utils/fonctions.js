export const devideTime = (timeLeft) => {
  let localtTimeLeft = timeLeft,
    days,
    hours,
    minutes;

  const represent = (time) => time >= 10 ? time : "0" + time;

  days = Math.floor(localtTimeLeft / (24 * 3600));
  localtTimeLeft -= 24 * 3600 * days;
  hours = represent(Math.floor(localtTimeLeft / 3600));
  localtTimeLeft -= hours * 3600;
  minutes = represent(Math.floor(localtTimeLeft / 60));
  localtTimeLeft -= minutes * 60;



  return [String(days), String(hours), String(minutes), String(represent(localtTimeLeft))];
}
