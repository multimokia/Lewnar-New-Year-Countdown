import Countdown from "react-countdown"
import { TimeZoneString } from "../constants";

function convertTimezone(date: Date, timeZone: TimeZoneString) {
    return new Date(date.toLocaleString("en-US", {timeZone: timeZone}));
}

export const NewyearCountdown: React.FC<{timezone: TimeZoneString, dispName?: string}> = ({timezone, dispName}) => {
    return (
        <div className="frosted-container countdown-container block">
            <div>
                <h2>{dispName ? dispName : timezone}</h2>
                <h3><Countdown date={convertTimezone(new Date(2023, 0, 1), timezone)}/></h3>
            </div>
        </div>
    );
}
