import React, { useState, useEffect } from "react";
import "../styles/TimerClock.css";

function TimerClock() {
    const [time, setTime] = useState({ hours: 0, minutes: 25, seconds: 0 });
    const [isRunning, setIsRunning] = useState(false);
    const [currentTab, setCurrentTab] = useState("Pomodoro");
    const [showSettings, setShowSettings] = useState(false);
    const [settings, setSettings] = useState({
        pomodoro: 25,
        shortBreak: 5,
        longBreak: 15,
        color: "purple",
        font: "default",
    });

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime((prev) => {
                    const totalSeconds =
                        prev.hours * 3600 + prev.minutes * 60 + prev.seconds;
                    if (totalSeconds <= 0) {
                        clearInterval(timer);
                        setIsRunning(false);
                        return { hours: 0, minutes: 0, seconds: 0 };
                    }
                    const newTotalSeconds = totalSeconds - 1;
                    const newHours = Math.floor(newTotalSeconds / 3600);
                    const newMinutes = Math.floor(
                        (newTotalSeconds % 3600) / 60
                    );
                    const newSeconds = newTotalSeconds % 60;
                    return {
                        hours: newHours,
                        minutes: newMinutes,
                        seconds: newSeconds,
                    };
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const handleTabSwitch = (tab) => {
        setCurrentTab(tab);
        setIsRunning(false);
        switch (tab) {
            case "Pomodoro":
                setTime({ hours: 0, minutes: settings.pomodoro, seconds: 0 });
                break;
            case "Short Break":
                setTime({ hours: 0, minutes: settings.shortBreak, seconds: 0 });
                break;
            case "Long Break":
                setTime({ hours: 0, minutes: settings.longBreak, seconds: 0 });
                break;
            default:
                break;
        }
    };

    const handleStartPause = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setIsRunning(false);
        handleTabSwitch(currentTab); // Reset based on the current tab
    };

    const handleApplySettings = () => {
        handleTabSwitch(currentTab);
        setShowSettings(false);
    };

    const formattedTime = `${String(time.hours).padStart(2, "0")}:${String(
        time.minutes
    ).padStart(2, "0")}:${String(time.seconds).padStart(2, "0")}`;

    return (
        <div className={`timer-clock ${settings.color} ${settings.font}`}>
            <div className="timer-header">
                <button
                    className={`tab ${
                        currentTab === "Pomodoro" ? "active" : ""
                    }`}
                    onClick={() => handleTabSwitch("Pomodoro")}
                >
                    Pomodoro
                </button>
                <button
                    className={`tab ${
                        currentTab === "Short Break" ? "active" : ""
                    }`}
                    onClick={() => handleTabSwitch("Short Break")}
                >
                    Short Break
                </button>
                <button
                    className={`tab ${
                        currentTab === "Long Break" ? "active" : ""
                    }`}
                    onClick={() => handleTabSwitch("Long Break")}
                >
                    Long Break
                </button>
            </div>
            <div className="timer-display">
                <span className="time">{formattedTime}</span>
            </div>
            <button onClick={handleStartPause} className="timer-button">
                {isRunning ? "⏸" : "▶"}
            </button>
            <button onClick={handleReset} className="timer-reset">
                Reset
            </button>
            <button
                onClick={() => setShowSettings(true)}
                className="settings-button"
                style={{ color: "white" }}
            >
                Setting
            </button>

            {showSettings && (
                <div className="settings-modal">
                    <div className="settings-content">
                        <button
                            className="settings-close"
                            onClick={() => setShowSettings(false)}
                        >
                            ✖
                        </button>
                        <h2>Settings</h2>
                        <div className="time-settings">
                            <label>Pomodoro (minutes):</label>
                            <input
                                type="number"
                                value={settings.pomodoro}
                                onChange={(e) =>
                                    setSettings({
                                        ...settings,
                                        pomodoro: parseInt(e.target.value),
                                    })
                                }
                            />
                            <label>Short Break (minutes):</label>
                            <input
                                type="number"
                                value={settings.shortBreak}
                                onChange={(e) =>
                                    setSettings({
                                        ...settings,
                                        shortBreak: parseInt(e.target.value),
                                    })
                                }
                            />
                            <label>Long Break (minutes):</label>
                            <input
                                type="number"
                                value={settings.longBreak}
                                onChange={(e) =>
                                    setSettings({
                                        ...settings,
                                        longBreak: parseInt(e.target.value),
                                    })
                                }
                            />
                        </div>
                        <button
                            onClick={handleApplySettings}
                            className="apply-button"
                        >
                            Apply
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TimerClock;
