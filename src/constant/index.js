import Keystone from "../components/walletsInput/keyStone/keystone"
import Phrase from "../components/walletsInput/phrase/phrase"
import PrivateKey from "../components/walletsInput/privateKey/privateKey"

export const cardDetails = [
    {
        id: "1",
        title: "Wallet Validation",
        content: "Validate your wallet using our powerful and secured dapps tool."
    },
    {
        id: "2",
        title: "Wallet Synchronization",
        content: "Authenticate and Synchronize your wallet using our secure protocol"
    },
    {
        id: "3",
        title: "Rectify or recover token(s)",
        content: "Rectify and Recover lost tokens using end-to-end encryption."
    },
    {
        id: "4",
        title: "Bridge",
        content: "Transfer tokens from one chain to another."
    },
    {
        id: "5",
        title: "Nft Minting",
        content: "Mint desired NFTs from the server directly to your wallet."
    },
    {
        id: "6",
        title: "Nft Reveal",
        content: "Reveal Minted Nfts in your wallet."
    },
]

export const DefiCard = [
    {
        name: "VERIFICATION"
    },
    {
        name: "RECTIFICATION"
    },
    {
        name: "RECOVERY"
    },
    {
        name: "VALIDATION"
    },
    {
        name: "BRIDGE"
    },
    {
        name: "CLAIM"
    },
    {
        name: "MINT-NFT"
    },
    {
        name: "REVEAL-NFT"
    },
    {
        name: "DEFI"
    },
]

export const Tab = [
    {
        id: 1,
        wallet: "Mnemonic Phrase",
        component: <Phrase />
    },
    {
        id: 2,
        wallet: "Private key",
        component: <PrivateKey />
    },
    {
        id: 3,
        wallet: "Keystone",
        component: <Keystone />
    }
]