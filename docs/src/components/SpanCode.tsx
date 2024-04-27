interface SpanCodeProps {
  text: string;
  color:
    | "primary"
    | "red"
    | "purple"
    | "white"
    | "grey"
    | "orange"
    | "cyan"
    | "green";
}

export default function SpanCode(props: SpanCodeProps) {
  const { text, color } = props;
  const fixedColors = {
    red: "text-red-300",
    purple: "text-purple-300",
    orange: "text-orange-400",
    cyan: "text-cyan-300",
    green: "text-green-300",
    white: "text-white",
    primary: "text-primary",
    grey: "text-white/60",
  };
  return <span className={fixedColors[color]}>{text}</span>;
}
