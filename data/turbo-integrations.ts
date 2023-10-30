export const integrationCategories = [
  "general",
  "protocols",
  "services",
] as const

interface TurboIntegration {
  name: string
  href: string
  url: string
  description: string
  imgLight: string
  imgDark: string
  category: (typeof integrationCategories)[number]
}

export const turboIntegrations = {
  siwe: {
    name: "SIWE",
    href: "/integration/sign-in-with-ethereum",
    url: "https://login.xyz/",
    description:
      "Sign-In with Ethereum is Web3 authentication using an Ethereum account.",
    category: "general",
    imgLight: "/integrations/siwe.svg",
    imgDark: "/integrations/siwe.svg",
  },
  erc20: {
    name: "ERC20",
    href: "/integration/erc20",
    url: "https://eips.ethereum.org/EIPS/eip-20",
    description: "ERC20 is a standard for fungible tokens on EVM chains",
    category: "protocols",
    imgLight: "/integrations/erc20.png",
    imgDark: "/integrations/erc20.png",
  },
  erc721: {
    name: "ERC721",
    href: "/integration/erc721",
    url: "https://eips.ethereum.org/EIPS/eip-721",
    description: "ERC721 is a standard for non-fungible tokens on EVM chains",
    category: "protocols",
    imgLight: "/integrations/erc721-icon.png",
    imgDark: "/integrations/erc721-icon.png",
  },
  erc1155: {
    name: "ERC1155",
    href: "/integration/erc1155",
    url: "https://eips.ethereum.org/EIPS/eip-1155",
    description: "ERC1155 is a multi-token standard on EVM chains",
    category: "protocols",
    imgLight: "/integrations/erc1155-icon.png",
    imgDark: "/integrations/erc1155-icon.png",
  },
  etherscan: {
    name: "Etherscan",
    href: "/integration/etherscan",
    url: "https://etherscan.io",
    description:
      "Etherscan is the leading block explorer and search, API & analytics platform for Ethereum.",
    category: "general",
    imgLight: "/integrations/etherscan-light.svg",
    imgDark: "/integrations/etherscan-dark.svg",
  },
  litProtocol: {
    name: "Lit Protocol",
    href: "/integration/lit-protocol",
    url: "https://litprotocol.com/",
    description:
      "Lit is distributed key management for encryption, signing, and compute.",
    category: "services",
    imgLight: "/integrations/lit-protocol.png",
    imgDark: "/integrations/lit-protocol.png",
  },
  connext: {
    name: "Connext",
    href: "/integration/connext",
    url: "https://docs.connext.network/",
    description:
      "Connext is a modular protocol for securely passing funds and data between chains.",
    category: "protocols",
    imgLight: "/integrations/connext.png",
    imgDark: "/integrations/connext.png",
  },
  starter: {
    name: "Starter Template",
    href: "/integration/starter",
    url: "https://docs.turboeth.xyz/overview",
    description:
      "Use this template to get started building integrations with TurboETH.",
    category: "general",
    imgLight: "/logo-gradient.png",
    imgDark: "/logo-gradient.png",
  },
} as const
