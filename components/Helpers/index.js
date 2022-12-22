export const PriceFormated = (value) => {
  return new Intl.NumberFormat('de-DE', {
    
    currency: 'USD',
    // style: 'currency'
  }).format(value)
}