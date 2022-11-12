import { ButtonContainer } from "./styles"

export default function Button({label, onClick}) {
  return (
    <div>
      <ButtonContainer onClick={onClick}>{label}</ButtonContainer>
    </div>
  )
}
