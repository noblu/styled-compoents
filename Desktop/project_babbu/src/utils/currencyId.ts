import { Currency, ETHER, Token } from 'wowdiex-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'CMC'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
