import react from 'react'
import { InputTextStyle } from './InputTextStyle'

type InputTextProps = {
    onChange?: (e:any) => void
    placeholder: string
}
export const InputText =({onChange, placeholder}: InputTextProps)=>{

return(
    <InputTextStyle
        onChange={onChange}
        placeholder={placeholder}
    />
    )
}