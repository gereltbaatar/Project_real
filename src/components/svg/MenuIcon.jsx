export const MenuIcon = ({ handleClickMenu }) => {
  return (
    <button onClick={handleClickMenu} className=" lg:hidden flex rounded-lg">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="#1A1A1A">
        <path
          d="M5 8H13.75M5 12H19M10.25 16L19 16"
          stroke="#1A1A1A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};
