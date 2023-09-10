import { InputComponent } from "../../styles/input";

export default function Inputs({ value }) {
  return (
    <InputComponent>
      <input disabled value={value} />
    </InputComponent>
  );
}
