import { ProgressContainer } from "./Style";
const ProgressBar = (props) => {
  return (
    <div className="flex-col items-center border rounded bg-gray-300 p-1 shadow-xl">
      <ProgressContainer width={props.width}>
        <progress value={props.value} max={100} />
        <span>{props.value}</span>
        <span> {props.stats}</span>
      </ProgressContainer>
    </div>
  );
};

export default ProgressBar;
