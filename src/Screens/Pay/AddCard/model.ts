export interface BanksModel {
    id: number,
    name: string,
    code: string,
    bin: number,
    shortName: string,
    logo: string,
    transferSupported: number,
    lookupSupported: number
}