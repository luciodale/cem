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

export function Facebook({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="256"
      height="256"
      className={className}
    >
      <path d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h6v-5.5H6V8h2V6a3 3 0 0 1 3-3h2v2.5h-1c-.552 0-1-.052-1 .5v2h2.5l-1 2.5H11V16h3c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"></path>
    </svg>
  );
}

export function Instagram({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="256"
      height="256"
      className={className}
    >
      <path d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"></path>
      <path d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"></path>
      <circle cx="12.3" cy="3.7" r=".533"></circle>
    </svg>
  );
}

export function LinkedIn({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="256"
      height="256"
      className={className}
    >
      <path d="M0 5h3.578v11H0zM13.324 5.129c-.038-.012-.074-.025-.114-.036a2.32 2.32 0 0 0-.145-.028A3.207 3.207 0 0 0 12.423 5c-2.086 0-3.409 1.517-3.845 2.103V5H5v11h3.578v-6s2.704-3.766 3.845-1v7H16V8.577a3.568 3.568 0 0 0-2.676-3.448z"></path>
      <circle cx="1.75" cy="1.75" r="1.75"></circle>
    </svg>
  );
}

export function YouTube({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="256"
      height="256"
      className={className}
    >
      <path
        fill-rule="evenodd"
        d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438zM6 11.5v-6l5 3-5 3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function GrapeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="9.5" cy="15.5" r="2.5"></circle>
      <circle cx="14.5" cy="15.5" r="2.5"></circle>
      <circle cx="12" cy="20" r="2.5"></circle>
      <path d="M12 8.5c0-2.33-.18-7 2.5-7m-2 2c1 2 8 6 8 2 0-2.5-5 .88-5 2"></path>
      <circle cx="17" cy="11" r="2.5"></circle>
      <path
        stroke="white"
        d="M9.5 5.5c1-1 2.49 0 2.5 0M3.5 8.09a5.7 5.7 0 0 0 3.08-.31 1.85 1.85 0 0 0-.3.84 2.37 2.37 0 0 1 1.72.1 3.58 3.58 0 0 0 .31-.64s1 .06 1.26 1.53h.06a3.18 3.18 0 0 0 .94-2.16A2.16 2.16 0 0 0 10 6.18a3.64 3.64 0 0 1-.56-.88 3.64 3.64 0 0 1-.3-1A2.16 2.16 0 0 0 8.55 3c-.72-.69-1.38-.47-2.07-.5a3 3 0 0 1 .51 2 4.05 4.05 0 0 0-3 0A2.18 2.18 0 0 0 5.74 6 5.7 5.7 0 0 0 3.5 8.09z"
      ></path>
      <circle cx="12" cy="11" r="2.5"></circle>
      <circle cx="7" cy="11" r="2.5"></circle>
    </svg>
  );
}
