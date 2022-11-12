import { InputComponent } from './styles'

export default function Input({value}) {
  return (
    <InputComponent>
      <input disabled value={value}/>
    </InputComponent>
  )
}
