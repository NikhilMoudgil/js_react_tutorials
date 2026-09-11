import { useEffect, useState } from "react";
import "./App.css";

import { ThemeProvider } from "./contexts/Theme";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

function App() {

    const [themeMode, setThemeMode] = useState("light");

    const lightTheme = () => {
        setThemeMode("light");
    };

    const darkTheme = () => {
        setThemeMode("dark");
    };

    // Actual change in theme
    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(themeMode);
    }, [themeMode]);

    return (
        <ThemeProvider
            value={{
                themeMode,
                lightTheme,
                darkTheme,
            }}
        >
            <div className="min-h-screen bg-white dark:bg-gray-900 py-10">

                <div className="w-full max-w-sm mx-auto flex justify-end mb-6">
                    <ThemeButton />
                </div>

                <Card />

            </div>
        </ThemeProvider>
    );
}

export default App;