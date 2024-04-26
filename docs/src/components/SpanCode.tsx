interface SpanCodeProps {
  text: string;
  color: "primary" | "red" | "yellow" | "purple" | "white" | "grey";
}

export default function SpanCode(props: SpanCodeProps) {
  const { text, color } = props;
  const fixedColors = {
    red: "text-red-400",
    yellow: "text-yellow-400",
    purple: "text-purple-400",
    white: "text-white",
    primary: "text-primary",
    grey: "text-white/60",
  };
  return <span className={fixedColors[color]}>{text}</span>;
}
