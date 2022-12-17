import { useState } from 'react';
import Confetti from 'react-confetti';;
import './App.css'
import { NewyearCountdown } from './components/Countdown'
import { DisplayableCountdownInfo, TimeZoneString } from './constants';
import { ConfettiStarterContext } from './hooks/context';

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
    const [shouldConfetti, setShouldConfetti] = useState(false);

    return (
        <div className="App">
            <Confetti
                recycle={false}
                run={shouldConfetti}
                width={window.innerWidth}
                height={document.body.scrollHeight}
                onConfettiComplete={(confettiInstance) => {
                    confettiInstance?.reset()
                    setShouldConfetti(false);
                }}
            />
            <ConfettiStarterContext.Provider value={{setShouldConfetti}}>
                <div className="countdown-flex-container">
                    {TIMEZONES.map((value, index) => (
                        <NewyearCountdown key={index} {...value} />
                    ))}
                </div>
            </ConfettiStarterContext.Provider>
        </div>
    );
}

export default App
