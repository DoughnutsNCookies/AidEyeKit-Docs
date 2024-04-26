interface SpanCodeProps {
  text: string;
  color: "primary" | "red" | "yellow" | "purple" | "white";
}

export default function SpanCode(props: SpanCodeProps) {
  const { text, color } = props;
  return (
    <span
      className={
        color == "primary" || color == "white"
          ? `text-${color}`
          : `text-${color}-400`
      }
    >
      {text}
    </span>
  );
}
