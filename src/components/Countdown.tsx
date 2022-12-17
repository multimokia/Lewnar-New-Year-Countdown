import Countdown from "react-countdown"
import { TimeZoneString } from "../constants";
import { useContext, useState } from "react";
import { ConfettiStarterContext } from "../hooks/context";
function convertTimezone(date: Date, timeZone: TimeZoneString) {
    return new Date(date.toLocaleString("en-US", {timeZone: timeZone}));
}
function randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const NewyearCountdown: React.FC<{timezone: TimeZoneString, dispName?: string}> = ({timezone, dispName}) => {
    const [countdownComplete, setCountdownComplete] = useState(false);
    const ctx = useContext(ConfettiStarterContext);

    return (
        <div
            className={
                countdownComplete ? "frosted-container countdown-container block countdown-complete" : "frosted-container countdown-container block"
            }
        >
            <div>
                <h2>{dispName ? dispName : timezone}</h2>
                <h3>
                    <Countdown
                        date={convertTimezone(new Date(2023, 0, 1), timezone)}
                        // date={Date.now() + randomIntFromInterval(0, 50000)}
                        onComplete={() => {
                            setCountdownComplete(true);
                            ctx.setShouldConfetti!(true);
                        }}
                    />
                </h3>
            </div>
        </div>
    );
}
