export const contractAddress = "0xD55364214eFAc23a7C0d665eC3B91C03CD48c286";

export const abi = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    { stateMutability: "payable", type: "fallback" },
    {
        inputs: [],
        name: "getResult",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "i_owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "guess", type: "uint256" }],
        name: "play",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    { inputs: [], name: "withdraw", outputs: [], stateMutability: "payable", type: "function" },
    { stateMutability: "payable", type: "receive" },
];
