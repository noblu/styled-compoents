import ListNft from "../ListNft/ListNft";
import Pagination from "../Pagination/Pagination";

function TabPane(props: any) {
  const { className } = props;
  return (
    <>
      <div
        className={className}
        id="pills-auction"
        role="tabpanel"
        aria-labelledby="pills-auction-tab"
      >
        <ListNft />
        <Pagination />
      </div>
    </>
  );
}

export default TabPane;
