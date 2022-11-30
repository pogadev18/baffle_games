export const authenticatedStatuses = {
  authenticated: 'authenticated',
  unauthenticated: 'unauthenticated'
}

export const games = [
  {
    id: '329jgfdjxwjh3989sxxwl23',
    ticketPrice: 1,
    totalSum: 7000,
    bigPrize: 1400,
    winners: 1441
  },
  {
    id: 'fsdifsd377zx0x93298',
    ticketPrice: 1,
    totalSum: 14000,
    bigPrize: 2800,
    winners: 1441
  },
  {
    id: 'vcddslj683dkgvds9348skx',
    ticketPrice: 1,
    totalSum: 35000,
    bigPrize: 7000,
    winners: 1441
  }
]

export type GameInfo = {
  id: string;
  ticketPrice: number;
  totalSum: number;
  bigPrize: number;
  winners: number;
}