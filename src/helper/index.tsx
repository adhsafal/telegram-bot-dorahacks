import riskImage from "../images/staking.svg";
import price_draw from "../images/price_draw.svg";
import regular_drawer from "../images/regular_draws.svg";
import community from "../images/community.svg";
import { ReactElement } from "react";

export type cardType = {
  title: string;
  description: string;
  img: string | ReactElement;
};

export const CardData: cardType[] = [
  {
    title: "No-Risk Staking",
    description: "Choose a pool and stake your cryptocurrency safely.",
    img: riskImage,
  },
  {
    title: "Enter the Prize Draw",
    description: "Automatic Entry: More stakes, higher chances.",
    img: price_draw,
  },
  {
    title: "Regular Draws",
    description: "Pools schedule draws with randomly selected winners.",
    img: regular_drawer,
  },
  {
    title: "Join the Community",
    description: "Auto-join Telegram Groups for updates, weekly winners.",
    img: community,
  },
];

export const quickStep: cardType[] = [
  {
    title: "Open Ton Pools App",
    description: "Explore the available pools.",
    img: (
      <svg
        width="16"
        height="22"
        viewBox="0 0 16 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 1V3C11 3.55228 10.5523 4 10 4H6C5.44772 4 5 3.55228 5 3V1M11 1H5M11 1C13.2091 1 15 2.79086 15 5V17C15 19.2091 13.2091 21 11 21H5C2.79086 21 1 19.2091 1 17V5C1 2.79086 2.79086 1 5 1M5 18H11"
          stroke="#FDFCFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Connect Your Wallet",
    description: "Link your crypto wallet to start staking.",
    img: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.75 7.74988H21C21.6904 7.74988 22.25 8.30952 22.25 8.99988V20.9999C22.25 21.6902 21.6904 22.2499 21 22.2499H3C2.30964 22.2499 1.75 21.6902 1.75 20.9999V7.74988Z"
          fill="white"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M1.67865 7.19846L11.4478 1.85223C11.69 1.71966 11.9939 1.80857 12.1264 2.05081L17.4727 11.8199L7.26491 17.4062L1.67865 7.19846Z"
          stroke="white"
        />
        <circle cx="18" cy="15" r="2" fill="#1C276E" />
      </svg>
    ),
  },
  {
    title: "Choose a Pool",
    description: "Select a pool and stake your funds.",
    img: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1_1_2693" fill="white">
          <rect x="1" y="1" width="10" height="10" rx="1" />
        </mask>
        <rect
          x="1"
          y="1"
          width="10"
          height="10"
          rx="1"
          fill="white"
          stroke="white"
          strokeWidth="3"
          mask="url(#path-1-inside-1_1_2693)"
        />
        <mask id="path-2-inside-2_1_2693" fill="white">
          <rect x="1" y="13" width="10" height="10" rx="1" />
        </mask>
        <rect
          x="1"
          y="13"
          width="10"
          height="10"
          rx="1"
          stroke="white"
          strokeWidth="3"
          mask="url(#path-2-inside-2_1_2693)"
        />
        <mask id="path-3-inside-3_1_2693" fill="white">
          <rect x="14" y="2" width="8" height="8" rx="1" />
        </mask>
        <rect
          x="14"
          y="2"
          width="8"
          height="8"
          rx="1"
          stroke="white"
          strokeWidth="3"
          mask="url(#path-3-inside-3_1_2693)"
        />
        <mask id="path-4-inside-4_1_2693" fill="white">
          <rect x="15" y="15" width="6" height="6" rx="1" />
        </mask>
        <rect
          x="15"
          y="15"
          width="6"
          height="6"
          rx="1"
          fill="white"
          stroke="white"
          strokeWidth="3"
          mask="url(#path-4-inside-4_1_2693)"
        />
      </svg>
    ),
  },
  {
    title: "Wait for the Draw",
    description: "Watch the countdown and check if you win.",
    img: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 0.999999C15.7763 1 18.4666 1.96263 20.6127 3.72387C22.7588 5.48512 24.2278 7.936 24.7694 10.6589C25.311 13.3818 24.8918 16.2083 23.5831 18.6568C22.2743 21.1052 20.1571 23.0241 17.5922 24.0866C15.0273 25.149 12.1733 25.2892 9.51659 24.4833C6.85987 23.6774 4.56478 21.9752 3.02237 19.6668C1.47996 17.3585 0.785663 14.5867 1.05778 11.8238C1.3299 9.0609 2.5516 6.47783 4.51472 4.51472"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M13 4C14.78 4 16.5201 4.52784 18.0001 5.51677C19.4802 6.50571 20.6337 7.91131 21.3149 9.55585C21.9961 11.2004 22.1743 13.01 21.8271 14.7558C21.4798 16.5016 20.6226 18.1053 19.364 19.364C18.1053 20.6226 16.5016 21.4798 14.7558 21.8271C13.01 22.1743 11.2004 21.9961 9.55585 21.3149C7.91131 20.6337 6.50571 19.4802 5.51677 18.0001C4.52784 16.5201 4 14.78 4 13"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14 7C15.3261 7 16.5979 7.63214 17.5355 8.75736C18.4732 9.88258 19 11.4087 19 13C19 14.5913 18.4732 16.1174 17.5355 17.2426C16.5979 18.3679 15.3261 19 14 19"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export const howToParticipate: cardType[] = [
  {
    title: "Stake Your Tokens",
    description: "Minimum Entry: 1 TON = 1 Lottery Ticket",
    img: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="15" cy="9" r="7.5" stroke="white" />
        <circle cx="9" cy="15" r="8.5" fill="white" stroke="#1C276E" />
      </svg>
    ),
  },
  {
    title: "Join the Community",
    description: "Join pool's Telegram for updates.",
    img: (
      <svg
        width="26"
        height="24"
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#1C276E" />
        <circle opacity="0.2" cx="18" cy="6" r="2.5" stroke="white" />
        <path
          opacity="0.2"
          d="M14.5 11C14.5 10.7239 14.7239 10.5 15 10.5H21C21.2761 10.5 21.5 10.7239 21.5 11V17C21.5 18.933 19.933 20.5 18 20.5C16.067 20.5 14.5 18.933 14.5 17V11Z"
          stroke="white"
        />
        <path
          d="M11.3333 19.5C11.6095 19.5 11.8333 19.2761 11.8333 19C11.8333 18.7239 11.6095 18.5 11.3333 18.5V19.5ZM9.5 15V17.6667H10.5V15H9.5ZM9.5 17.6667C9.5 18.6792 10.3208 19.5 11.3333 19.5V18.5C10.8731 18.5 10.5 18.1269 10.5 17.6667H9.5ZM14 10.5C11.5147 10.5 9.5 12.5147 9.5 15H10.5C10.5 13.067 12.067 11.5 14 11.5V10.5Z"
          fill="white"
        />
        <path
          opacity="0.2"
          d="M23.3333 19.5C23.0572 19.5 22.8333 19.2761 22.8333 19C22.8333 18.7239 23.0572 18.5 23.3333 18.5V19.5ZM24.5 14V18.3333H23.5V14H24.5ZM24.5 18.3333C24.5 18.9777 23.9777 19.5 23.3333 19.5V18.5C23.4254 18.5 23.5 18.4254 23.5 18.3333H24.5ZM22 11.5C23.3807 11.5 24.5 12.6193 24.5 14H23.5C23.5 13.1716 22.8284 12.5 22 12.5V11.5Z"
          fill="white"
        />
        <circle cx="10" cy="4" r="4" fill="white" />
        <path
          d="M6 8.5C5.17157 8.5 4.5 9.17157 4.5 10V18C4.5 21.0376 6.96243 23.5 10 23.5C13.0376 23.5 15.5 21.0376 15.5 18V10C15.5 9.17157 14.8284 8.5 14 8.5H6Z"
          fill="white"
          stroke="#1C276E"
        />
        <path
          d="M3.66667 19.5C3.94281 19.5 4.16667 19.2761 4.16667 19C4.16667 18.7239 3.94281 18.5 3.66667 18.5V19.5ZM2.5 13V18.3333H3.5V13H2.5ZM2.5 18.3333C2.5 18.9777 3.02233 19.5 3.66667 19.5V18.5C3.57462 18.5 3.5 18.4254 3.5 18.3333H2.5ZM5 10.5C3.61929 10.5 2.5 11.6193 2.5 13H3.5C3.5 12.1716 4.17157 11.5 5 11.5V10.5Z"
          fill="white"
        />
        <path
          d="M16.3333 19.5C16.0572 19.5 15.8333 19.2761 15.8333 19C15.8333 18.7239 16.0572 18.5 16.3333 18.5V19.5ZM17.5 13V18.3333H16.5V13H17.5ZM17.5 18.3333C17.5 18.9777 16.9777 19.5 16.3333 19.5V18.5C16.4254 18.5 16.5 18.4254 16.5 18.3333H17.5ZM15 10.5C16.3807 10.5 17.5 11.6193 17.5 13H16.5C16.5 12.1716 15.8284 11.5 15 11.5V10.5Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    title: "Wait for the Draw",
    description: "Stay tuned for the prize draw countdown!",
    img: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 0.999999C15.7763 1 18.4666 1.96263 20.6127 3.72387C22.7588 5.48512 24.2278 7.936 24.7694 10.6589C25.311 13.3818 24.8918 16.2083 23.5831 18.6568C22.2743 21.1052 20.1571 23.0241 17.5922 24.0866C15.0273 25.149 12.1733 25.2892 9.51659 24.4833C6.85987 23.6774 4.56478 21.9752 3.02237 19.6668C1.47996 17.3585 0.785663 14.5867 1.05778 11.8238C1.3299 9.0609 2.5516 6.47783 4.51472 4.51472"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M13 4C14.78 4 16.5201 4.52784 18.0001 5.51677C19.4802 6.50571 20.6337 7.91131 21.3149 9.55585C21.9961 11.2004 22.1743 13.01 21.8271 14.7558C21.4798 16.5016 20.6226 18.1053 19.364 19.364C18.1053 20.6226 16.5016 21.4798 14.7558 21.8271C13.01 22.1743 11.2004 21.9961 9.55585 21.3149C7.91131 20.6337 6.50571 19.4802 5.51677 18.0001C4.52784 16.5201 4 14.78 4 13"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14 7C15.3261 7 16.5979 7.63214 17.5355 8.75736C18.4732 9.88258 19 11.4087 19 13C19 14.5913 18.4732 16.1174 17.5355 17.2426C16.5979 18.3679 15.3261 19 14 19"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Win Rewards",
    description:
      "Winners announced in Telegram, rewards sent to wallets directly.",
    img: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#1C276E" />
        <path
          d="M6.5594 3.08879L5.08884 4.55935C4.08833 5.55986 4.41469 7.25449 5.71521 7.81186L8.2887 8.91478C9.94814 9.62597 11.626 7.9481 10.9148 6.28865L9.81191 3.71517C9.25454 2.41464 7.55991 2.08828 6.5594 3.08879Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M17.1491 3.08879L18.6197 4.55935C19.6202 5.55986 19.2938 7.25449 17.9933 7.81186L15.4198 8.91478C13.7604 9.62597 12.0825 7.9481 12.7937 6.28865L13.8966 3.71517C14.454 2.41464 16.1486 2.08828 17.1491 3.08879Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <rect
          x="2.75"
          y="7.75"
          width="18.5"
          height="14.5"
          rx="2.25"
          fill="#1C276E"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M12 7.99976V13.9998C12 14.552 12.4477 14.9998 13 14.9998H21"
          stroke="white"
          strokeWidth="1.5"
        />
        <path d="M2 14.9998H9" stroke="white" strokeWidth="1.5" />
        <path d="M12 22L12 17" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
];
