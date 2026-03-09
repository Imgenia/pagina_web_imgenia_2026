interface ImgeniaTextProps {
  className?: string;
}

export default function ImgeniaText({ className = '' }: ImgeniaTextProps) {
  return (
    <span
      className={`font-bold bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: 'linear-gradient(90deg, #00b8e6 0%, #7b5fa6 25%, #e91e8c 55%, #2b3fa6 100%)',
      }}
    >
      imgenia.
    </span>
  );
}
