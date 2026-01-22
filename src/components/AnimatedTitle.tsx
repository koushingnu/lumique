const AnimatedTitle = () => {
  const title = "Lumique";

  return (
    <div className="flex justify-center items-center space-x-1 md:space-x-2">
      {title.split("").map((char, index) => (
        <span
          key={index}
          className={`drop-in delay-${index} text-5xl md:text-7xl lg:text-8xl text-neutral-900 tracking-wider`}
          style={{
            fontFamily: "var(--font-noto-serif-jp)",
            fontWeight: "300",
            letterSpacing: "0.05em",
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedTitle;
 