import { useEffect, useState, type CSSProperties } from "react";

type Segment =
    | {
          text: string;
          className?: string;
      }
    | {
          break: true;
      };

interface TypingTextProps {
    segments: Segment[];
    style?: CSSProperties;
    className?: string;
    speed?: number;
    pause?: number;
}

const TypingText = ({
    segments,
    style,
    className,
    speed = 50,
    pause = 0,
}: TypingTextProps) => {
    const [visibleChars, setVisibleChars] = useState(0);

    // Count total characters (ignoring line breaks)
    const totalChars = segments.reduce((sum, segment) => {
        if ("break" in segment) return sum;
        return sum + segment.text.length;
    }, 0);

    useEffect(() => {
        if (visibleChars >= totalChars) return;

        const timeout = setTimeout(() => {
            setVisibleChars((v) => v + 1);
        }, visibleChars === 0 ? pause : speed);

        return () => clearTimeout(timeout);
    }, [visibleChars, totalChars, speed, pause]);

    let charsLeft = visibleChars;

    return (
        <div style={style} className={className}>
            {segments.map((segment, index) => {
                if ("break" in segment) {
                    return <br key={index} />;
                }

                const visibleText = segment.text.slice(
                    0,
                    Math.max(0, charsLeft)
                );

                charsLeft -= segment.text.length;

                return (
                    <span key={index} className={segment.className}>
                        {visibleText}
                    </span>
                );
            })}
        </div>
    );
};

export default TypingText;