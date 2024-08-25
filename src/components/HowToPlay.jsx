import React from "react";
import { ListItem } from "../components";

function HowToPlay() {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
                <div className="bg-white p-7 rounded-md">
                    <h1 className="font-bold text-xl mb-2">How to play</h1>
                    <ul className="space-y-3">
                        <ListItem text="Connect to this website using your metamask wallet." />
                        <ListItem text="Enter the amount you are willing to wager." />
                        <ListItem text="Select the predicted outcome of the coin." />
                        <ListItem text="If your prediction is correct, you will be rewarded with double the amount of your wager." />
                        <ListItem text="If incorrect, you will lose your amount wagered." />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HowToPlay;
