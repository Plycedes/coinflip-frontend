import { ethers } from "ethers";
import { abi, contractAddress } from "../constants";

let signer, provider;

export const connect = async () => {
    if (window.ethereum !== null) {
        await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        return "0x";
    } else {
        console.log("Metamask not found");
        return "";
    }
};

export const play = async (bet, guess) => {
    try {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        console.log("Mining");
        const tx = await contract.play(guess, { value: ethers.parseEther(bet) });
        const response = await contract.getResult();
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const withdraw = async () => {
    try {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        console.log("Mining");
        const tx = await contract.withdraw();
        tx.wait();
    } catch (error) {
        console.log(error);
    }
};
