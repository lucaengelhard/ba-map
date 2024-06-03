export default function BGGrid({ width }: { width: number }) {
  const numColumns = Math.floor(window.innerWidth / width) + 1;
  const numRows = Math.floor(window.innerHeight / width) + 1;
  const squares = [];

  for (let row = 0; row <= numRows; row++) {
    for (let col = 0; col <= numColumns; col++) {
      squares.push(
        <div
          key={`${row}-${col}`}
          className="border border-main grow aspect-square"
          style={{ width: width, height: width }}
        ></div>
      );
    }
  }

  return (
    <div className="flex opacity-35 flex-wrap fixed top-0 left-0 -z-40">
      {squares}
    </div>
  );
}
