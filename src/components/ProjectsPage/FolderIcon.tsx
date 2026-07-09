type FolderIconProps = {
    color: string;
    darkColor: string;
};

export default function FolderIcon({
    color,
    darkColor
}: FolderIconProps) {
  return (
    <svg
      width={270*0.75}
      height={210*0.75}
      viewBox="0 0 270 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M.752 15.938l-.69 178c-.034 8.861 7.14 16.062 16 16.062H254c8.836 0 16-7.163 16-16V45.885c0-8.837-7.164-16-16-16H121.832a16 16 0 01-10.972-4.355L88.387 4.355A16 16 0 0077.415 0H16.75C7.94 0 .786 7.126.751 15.938z"
        fill={color}
      />
      <path
        d="M0 194V70.6c0-8.837 7.163-16 16-16h238c8.837 0 16 7.163 16 16V194c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16z"
        fill={darkColor}
      />
    </svg>
  )
}
