import { Virtuoso } from "react-virtuoso";

export default function ReactVirtuoso({list}) {
  return (
    <Virtuoso
      style={{ height: "100%" }}
      // totalCount={200}
      data={list}
      itemContent={(index,item) => <div>Item {item}</div>}
    />
  );
}
