import react from 'react'
import { InputSelectStyle } from './InputSelectStyle'

type InputSelectProps = {
    onChange?: (e:any) => void
    options: any
}
export const InputSelect =({onChange, options}: InputSelectProps)=>{

return(
    <InputSelectStyle onChange={onChange}>
        <option value="">Nenhum</option>
        {options && options.map((o: any) => {
            return (
                <option value={o.id}>{o.name}</option>
            )
        })}
    </InputSelectStyle>
    )
}