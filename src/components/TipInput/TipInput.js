import Input from "../Input/Input";
import InputSelect from "../InputSelect/InputSelect";

export default function TipInput(props) {
  return (
    <div>
      <Input
        type={"number"}
        label={"Bill"}
        icon={"icon-dollar.svg"}
        value={props.data.bill}
        placeholder={'0'}
        name={'bill'}
        onChange={props.setData}
        min={'0'}
      />

      <InputSelect onClick={props.setData} percent={props.data.percent} />
      
      <Input
        type={"number"}
        label={"Number of People"}
        icon={"icon-person.svg"}
        value={props.data.people}
        placeholder={'0'}
        name={'people'}
        onChange={props.setData}
        min={'0'}
      />
    </div>
  );
}
