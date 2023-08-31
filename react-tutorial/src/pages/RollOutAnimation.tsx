import "./Home.css";

interface Props {
  cardText: string;
}

const RollOutAnimation = ({ cardText = "hello" }: Props) => {
  return (
    <div key={cardText} className="roll-out">
      {cardText}
    </div>
  );
};

export default RollOutAnimation;
