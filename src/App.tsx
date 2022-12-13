import Countdown from 'react-countdown';
import './App.css'
import { NewyearCountdown } from './components/Countdown'
import { DisplayableCountdownInfo, TimeZoneString } from './constants';

function getCurrentTimezone(): TimeZoneString {
    return Intl.DateTimeFormat().resolvedOptions().timeZone as TimeZoneString;
}

const TIMEZONES: DisplayableCountdownInfo[] = [
    { timezone: "Europe/London", dispName: "London, England" },
    { timezone: "America/Toronto", dispName: "Toronto" },
    { timezone: "Europe/Berlin", dispName: "Berlin" },
    { timezone: getCurrentTimezone(), dispName: "Here" }
];

function App() {
    return (
        <div className="App">
            <div className="countdown-flex-container">
                {TIMEZONES.map((value, index) => (
                    <NewyearCountdown key={index} {...value} />
                ))}
            </div>
        </div>
    );
}

export default App
