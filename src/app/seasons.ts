import { Season } from './season';
var SeasonsMaker: Season[] = [];
var i: number;
const establishmentYear = 1878;
for (i=0; i<140; i++) {
  SeasonsMaker[i] = {startYear:i + establishmentYear};
}

export const SEASONS :Season[] = SeasonsMaker;
