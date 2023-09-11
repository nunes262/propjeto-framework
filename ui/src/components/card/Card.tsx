import react from 'react'
import { CardStyle } from './CardStyle'

type CardProps={
    country?:any
    capital?:any
    continent?:any
}
export const Card = ({ country, capital, continent }: CardProps) => {

return(
<CardStyle>
<div className="card">
      <h2>{country}</h2>
      <p>Capital Federal: {capital}</p>
      <p>Continente: {continent}</p>
    </div>
</CardStyle>
);
};