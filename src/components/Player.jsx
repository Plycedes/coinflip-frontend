import React, { useState } from "react";
import { play } from "../utils/api.js";
import { Loader, Result } from "../components";
import { Dropdown } from "primereact/dropdown";

function Player() {
    const [bet, setBet] = useState("");
    const [guess, setGuess] = useState("");
    const [result, setResult] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [coinData, setCoinData] = useState("Guess the outcome");

    const playGame = async () => {
        console.log("Playing");
        setIsLoading(true);
        const res = await play(bet, guess);
        setResult(res);
        setIsLoading(false);
        setShowResult(true);
        setTimeout(() => {
            setShowResult(false);
        }, 4000);
        console.log(res);
    };

    const coin = [
        { name: "Head", code: "1" },
        { name: "Tail", code: "0" },
    ];

    return (
        <div className="h-screen flex justify-center items-center ">
            {isLoading && <Loader />}
            {showResult && <Result result={result} />}
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Bet
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="bet"
                        type="text"
                        placeholder="Enter the betting amount"
                        value={bet}
                        onChange={(e) => setBet(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Guess
                    </label>
                    <Dropdown
                        value={guess}
                        onChange={(e) => {
                            setGuess(e.value.code);
                            setCoinData(e.value.name);
                        }}
                        options={coin}
                        optionLabel="name"
                        placeholder={coinData}
                        className="w-full md:w-14rem opacity-100"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-orange-700 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={playGame}
                    >
                        Play
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Player;
