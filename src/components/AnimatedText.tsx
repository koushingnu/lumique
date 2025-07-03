interface AnimatedTextProps {
  text: string;
  baseDelay: number;
  className?: string;
  style?: React.CSSProperties;
  letterClassName?: string;
  randomness?: number;
}

const AnimatedText = ({
  text,
  baseDelay,
  className = "",
  style = {},
  letterClassName = "",
  randomness = 0.3, // ランダム性の範囲（秒）
}: AnimatedTextProps) => {
  // 文字配列を作成し、各文字にランダムな遅延を割り当てる
  const letters = text.split("").map((char, index) => ({
    char,
    delay: baseDelay + Math.random() * randomness,
  }));

  return (
    <span className={className} style={style}>
      {letters.map(({ char, delay }, index) => (
        <span
          key={index}
          className={`drop-in inline-block ${letterClassName}`}
          style={{
            ...style,
            animationDelay: `${delay}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;
