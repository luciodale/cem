export function Whiteboard({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      viewBox="0 0 24 24"
      width="256"
      height="256"
      className={className}
    >
      <path
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M1.5,1.5h21l0,0V15c0,0.8-0.7,1.5-1.5,1.5H3c-0.8,0-1.5-0.7-1.5-1.5V1.5L1.5,1.5z"
      ></path>
      <circle
        cx="12"
        cy="22"
        r=".5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></circle>
      <line
        x1="12"
        x2="12"
        y1="21.5"
        y2="16.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></line>
      <rect
        width="3"
        height="4"
        x="4.5"
        y="9.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></rect>
      <rect
        width="3"
        height="7"
        x="10.5"
        y="6.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></rect>
      <rect
        width="3"
        height="9"
        x="16.5"
        y="4.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></rect>
    </svg>
  );
}

export function Bulb({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 128 128"
      width="256"
      height="256"
      className={className}
    >
      <path
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
        d="M77 100c0-19 9-24 9-24 12.5-12.5 13.12-32.13.63-44.63a32 32 0 0 0-45.25 0C28.88 43.87 29.5 63.5 42 76c0 0 9 5 9 24ZM70 124H58M74 112H54M63 4v6M14 53h6M108 53h4M28.35 87.65l4.24-4.24M94.82 21.18l2.83-2.83M28.35 18.35l4.24 4.24M94.82 84.82l2.83 2.83"
      ></path>
    </svg>
  );
}

export function Leaf({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      viewBox="0 0 24 24"
      width="256"
      height="256"
      className={className}
    >
      <path
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.7 1.5c-4.1 0-9.2 2.9-9.2 6.6 0 .9.4 1.8 1.1 2.4.6.7 1.5 1 2.4 1.1 3.6 0 6.6-5.2 6.6-9.2-.1-.5-.5-.9-.9-.9h0zM2.3 6.5c4.1 0 9.2 2.9 9.2 6.6 0 .9-.4 1.8-1.1 2.4-.6.7-1.5 1-2.4 1.1-3.6 0-6.6-5.1-6.6-9.2.1-.5.5-.9.9-.9z"
      ></path>
      <path
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 4.5c-3.8 1.9-7 5.1-7 12v6c0-7.5-3.6-11-8-13"
      ></path>
    </svg>
  );
}
