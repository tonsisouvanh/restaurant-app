import spinner from "../assets/images/spinner.svg";
const FullSpinner = () => {
  return (
    // <div className="absolute bg-black bg-opacity-50 flex items-center justify-center left-0 right-0 bottom-0 top-0 z-50">
    <div className="bg-black bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-50">
      <div>
        <img src={spinner} alt="Loading..." className="h-24" />
      </div>
    </div>
  );
};

export default FullSpinner;
