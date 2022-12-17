import { createContext } from "react";

export const ConfettiStarterContext = createContext<{
    setShouldConfetti: React.Dispatch<React.SetStateAction<boolean>> | null
}>({setShouldConfetti: null});
