interface MapProps {
  // color: string;
  // height: string;
  // width: string;
  className: string;
}

export const Map = ({ className }: MapProps) => {
  return (
    <div>
      <h2>Map</h2>
      <div className={`mx-auto rounded-md my-4 ${className}`}></div>
    </div>
  );
};
