const profileNavbar = (props: any) => {
  console.log(props);
  return (
    <ul className="flex -top-1">
      <li>
        <div className="flex relative cursor-pointer hover:opacity-70">
          <div className="bg-purple-600 relative left-6 p-1px rounded-full z-10">
            <img
              src={props.data.photoURL}
              className="rounded-full"
              width="35px"
              alt=""
            />
          </div>
          <div className="bg-gray-300 relative p-113 rounded-full h-full top-0.5">
            <div className="bg-white pl-8 rounded-full text-mute pr-4 py-1 flex text-main font-medium">{props.data.displayName} <svg viewBox="0 0 24 24" color="text" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path></svg></div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default profileNavbar;
