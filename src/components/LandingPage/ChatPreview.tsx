import type React from "react";
import { useEffect, useState } from "react";
import "./css/ChatPreview.css"

type Phase = "typing-client" | "thinking" | "typing-bot" | "done";

const CLIENT_TEXT = "I need an online banking platform supporting one million users.";
const LOOP_PAUSE_MS = 3000;

const ChatPreview: React.FC = () => {
    const [phase, setPhase] = useState<Phase>("typing-client");
    const [clientDisplayed, setClientDisplayed] = useState("");
    const [dotCount, setDotCount] = useState(0);
    const [showBot, setShowBot] = useState(false);
    const [cycle, setCycle] = useState(0);

    // Phase 1: type out client text
    useEffect(() => {
        if (phase !== "typing-client") return;
        if (clientDisplayed.length < CLIENT_TEXT.length) {
            const t = setTimeout(() => {
                setClientDisplayed(CLIENT_TEXT.slice(0, clientDisplayed.length + 1));
            }, 25); // typing speed
            return () => clearTimeout(t);
        } else {
            const t = setTimeout(() => setPhase("thinking"), 400); // pause before thinking
            return () => clearTimeout(t);
        }
    }, [phase, clientDisplayed]);

    // Phase 2: animate "Thinking..." dots
    useEffect(() => {
        if (phase !== "thinking") return;
        const interval = setInterval(() => {
            setDotCount((d) => (d + 1) % 4); // 0,1,2,3 dots looping
        }, 400);
        const timeout = setTimeout(() => {
            clearInterval(interval);
            setPhase("typing-bot");
            setShowBot(true);
        }, 3200); // total "thinking" duration
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [phase]);

     // Phase 4: once done, pause, then reset everything and loop
    useEffect(() => {
        if (phase !== "done") return;
        const t = setTimeout(() => {
            setClientDisplayed("");
            setDotCount(0);
            setShowBot(false);
            setPhase("typing-client");
            setCycle((c) => c + 1); // forces BotResponse to remount fresh next time
        }, LOOP_PAUSE_MS);
        return () => clearTimeout(t);
    }, [phase]);

    return (
        <div className="chat-preview-container">
            <div className="client-chat-wrapper">
                <div style={{ width: "60%" }}>
                    {clientDisplayed.length > 0 && (
                        <div className="client-chat-container">
                            <p className="client-chat-text">
                                {clientDisplayed}
                                {phase === "typing-client" && <span className="cursor" />}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {phase === "thinking" && (
                <div className="chat-bot-wrapper">
                    <div style={{ width: "40%" }}>
                        <div className="chat-bot-chat-container">
                            <p className="chat-bot-text">
                                Thinking{".".repeat(dotCount)}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {showBot && (
                <div className="chat-bot-wrapper">
                    <div style={{ width: "80%" }}>
                        <div className="chat-bot-chat-container">
                            <BotResponse key={cycle} onDone={() => setPhase("done")} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

type LineType = "label" | "row" | "value" | "divider" | "action";

interface Line {
    type: LineType;
    text: string;
}

const lines: Line[] = [
    { type: "label", text: "Recommendation" },
    { type: "row", text: "Architecture Style" },
    { type: "value", text: "Microservices" },
    { type: "row", text: "Confidence" },
    { type: "value", text: "92%" },
    { type: "row", text: "Reasoning" },
    { type: "value", text: "High scalability" },
    { type: "value", text: "Independent deployment" },
    { type: "divider", text: "" },
    { type: "action", text: "📄 Generate ADR" },
    { type: "action", text: "📊 Generate Diagram" },
];

const BotResponse: React.FC<{ onDone: () => void }> = ({ onDone }) => {
    const [lineIndex, setLineIndex] = useState(0);   // which line we're on
    const [charIndex, setCharIndex] = useState(0);    // how many chars typed on current line

    useEffect(() => {
        if (lineIndex >= lines.length) {
            onDone();
            return;
        }

        const currentLine = lines[lineIndex];

        // Dividers have no text to type — just show them and move on after a short pause
        if (currentLine.type === "divider") {
            const t = setTimeout(() => {
                setLineIndex((i) => i + 1);
                setCharIndex(0);
            }, 300);
            return () => clearTimeout(t);
        }

        if (charIndex < currentLine.text.length) {
            const t = setTimeout(() => {
                setCharIndex((c) => c + 1);
            }, 50); // typing speed per character
            return () => clearTimeout(t);
        } else {
            // finished this line — pause briefly, then move to next line
            const t = setTimeout(() => {
                setLineIndex((i) => i + 1);
                setCharIndex(0);
            }, 300);
            return () => clearTimeout(t);
        }
    }, [lineIndex, charIndex]);

    const renderLine = (line: Line, i: number, isCurrent: boolean) => {
        const displayText = isCurrent ? line.text.slice(0, charIndex) : line.text;
        const showCursor = isCurrent && line.type !== "divider";

        switch (line.type) {
            case "divider":
                return <hr key={i} className="chat-bot-divider" />;
            case "label":
                return (
                    <p key={i} className="chat-bot-label">
                        {displayText}{showCursor && <span className="cursor cursor-light" />}
                    </p>
                );
            case "row":
                return (
                    <div key={i} className="chat-bot-row">
                        <span className="chat-bot-check">✓</span> {displayText}
                        {showCursor && <span className="cursor cursor-light" />}
                    </div>
                );
            case "value":
                return (
                    <p key={i} className="chat-bot-value">
                        {displayText}{showCursor && <span className="cursor cursor-light" />}
                    </p>
                );
            case "action":
                return (
                    <p key={i} className="chat-bot-action">
                        {displayText}{showCursor && <span className="cursor cursor-light" />}
                    </p>
                );
            default:
                return null;
        }
    };

    return (
        <>
            {lines.slice(0, lineIndex + 1).map((line, i) =>
                renderLine(line, i, i === lineIndex)
            )}
        </>
    );
};

export default ChatPreview;