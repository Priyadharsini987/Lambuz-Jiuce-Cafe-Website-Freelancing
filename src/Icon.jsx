// Simple line icons in the style of the cafe's printed menu (original artwork).
const paths = {
  sundae: (
    <>
      <path d="M14 26h36c0 12-8 20-18 20S14 38 14 26z" />
      <path d="M32 46v9M22 55h20" />
      <path d="M20 26c0-8 6-12 12-12s12 4 12 12" />
      <circle cx="32" cy="9" r="3" />
    </>
  ),
  shake: (
    <>
      <path d="M20 24h24l-3 31H23z" />
      <path d="M18 24c0-8 6-11 14-11s14 3 14 11" />
      <path d="M37 4l-4 9" />
      <circle cx="30" cy="9" r="2.5" />
    </>
  ),
  cookie: (
    <>
      <circle cx="32" cy="32" r="20" />
      <circle cx="32" cy="32" r="11" />
      <path d="M32 21v22M21 32h22" />
    </>
  ),
  brownie: (
    <>
      <rect x="12" y="24" width="40" height="24" rx="4" />
      <path d="M12 32c6 5 8-4 14 0s8-4 14 0 8-3 12 0" />
      <path d="M22 40h2M34 40h2M44 42h2" />
    </>
  ),
  sandwich: (
    <>
      <path d="M8 40 32 14l24 26z" />
      <path d="M8 40h48v10H8z" />
      <path d="M18 40l14-14 14 14" />
    </>
  ),
  bullet: (
    <>
      <path d="M8 34c0-8 6-12 14-12h20c8 0 14 4 14 12s-6 12-14 12H22C14 46 8 42 8 34z" />
      <path d="M22 27v14M32 27v14M42 27v14" />
    </>
  ),
  burger: (
    <>
      <path d="M10 28c0-11 10-16 22-16s22 5 22 16z" />
      <path d="M8 35h48" />
      <path d="M10 42h44c0 9-4 12-9 12H19c-5 0-9-3-9-12z" />
      <path d="M22 20h2M32 17h2M42 20h2" />
    </>
  ),
  wrap: (
    <>
      <path d="M14 46 40 14l10 8L24 54z" />
      <path d="M40 14c4-3 11 1 10 8" />
      <path d="M20 42l12 10" />
    </>
  ),
  fries: (
    <>
      <path d="M16 34h32l-4 21H20z" />
      <path d="M22 34V14M30 34V8M38 34V12M46 34V18" />
    </>
  ),
  pin: (
    <>
      <path d="M32 58S14 40 14 26a18 18 0 0 1 36 0c0 14-18 32-18 32z" />
      <circle cx="32" cy="26" r="6" />
    </>
  ),
};

export default function Icon({ name, size = 56, stroke = 2.6 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.shake}
    </svg>
  );
}
