import React from "react";
import { withdraw } from "../utils/api";

function Admin() {
    return (
        <div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-orange-700 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={withdraw}
                >
                    Withdraw
                </button>
            </div>
        </div>
    );
}

export default Admin;
