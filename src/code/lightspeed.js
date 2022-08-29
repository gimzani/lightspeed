
const KM_SOL = 300000;
const MM_SOL = 300;

export function setSpeedValues(speed, speedUnit) {
  let speedVals = null;
  if(speedUnit === "Kps") {
    speedVals = setByKps(speed);
  }
  if(speedUnit === "Mps") {
    speedVals = setByMps(speed);
  }
  if(speedUnit === "C") {
    speedVals = setByC(speed);
  }
  return speedVals;
}

//------------------

function setByKps(speed) {  
  let kps = speed;
  let mps = kps * .001;
  let gps = mps * .001;
  let c = mps / MM_SOL;
  return { kps, mps, gps, c }
}

function setByMps(speed) {
  let kps = speed * 1000;
  let mps = speed;
  let gps = mps * .001;
  let c = mps / MM_SOL;
  return { kps, mps, gps, c }
}

function setByC(speed) {
  let c = speed;
  let kps = c * KM_SOL;
  let mps = c * MM_SOL;
  let gps = mps * .001;
  return { kps, mps, gps, c }
} 

//------------------


export function getTimeValues(distance, speed) {
  let timeVals = { y:0, d:0, h:0, m:0 };
  timeVals.y = parseFloat(distance / speed);
  timeVals.d = yearsToDays(timeVals.y);
  timeVals.h = yearsToHours(timeVals.y);
  timeVals.m = yearsToMinutes(timeVals.y);
  return timeVals;
}

    
export function kilometersToLightYears(km) {
  return km * 0.00000000000010570;
}

export function megametersToLightYears(mm) {      
  return mm * 0.00000000010570;
}
  
export function yearsToDays(y) {
  return y * 365;
}

export function daysToHours(d) {
  return d * 24;
} 

export function hoursToMinutes(h) {
  return h * 60;
}

export function  minutesToSeconds(m) {
  return  m * 60;
}

export function yearsToHours(y) {
  let d = yearsToDays(y)
  return daysToHours(d);
}

export function yearsToMinutes(y) {
  let d = yearsToDays(y)
  let h = daysToHours(d);
  return hoursToMinutes(h);
}

export function yearsToSeconds(y) {
  let d = yearsToDays(y)
  let h = daysToHours(d);
  let m = hoursToMinutes(h)
  return minutesToSeconds(m);
}