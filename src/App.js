import logo from "./logo.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QrCodeGenerator from "./components/qr-core-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tab/tab-test";
import ModalTest from "./components/custom-modal/modal-test";
import GitHubProfile from "./components/github-profile-finder";
import SearchAutoComplete from "./components/auto-complete-search";
import TicTacToe from "./components/tic-tac-toe";
import OutsideClick from "./components/use-outside-click";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/resize-window/test";
import ScrollTopBotom from "./components/scroll-top-bottom";

function App() {
  return (
    <div className="App">
      {/* <Accordian />
      <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* ----------------------------------------- Load More Product component */}
      {/* <LoadMoreData /> */}

      {/* ----------------------------------------- Tree view Menu */}

      {/* <TreeView menus={menus} />
      
      */}

      {/* ----------------------------------------- QR code generator */}

      {/* <QrCodeGenerator /> */}

      {/*-----------------------------------------  Light and Dart Theme */}
      {/* <LightDarkMode />
       */}

      {/*-----------------------------------------  Scroll Indicator */}
      {/* <ScrollIndicator
        url={`https://dummyjson.com/products?limit=100&select=title,price`}
      /> */}

      {/* ----------------------------------------- Custom Tab componenet */}
      {/* <TabTest /> */}

      {/* ----------------------------------------- Modal Component */}
      {/* <ModalTest /> */}

      {/* ----------------------------------------- GitHub profile finder */}

      {/* <GitHubProfile /> */}

      {/* ----------------------------------------- Search Box autocomplete */}

      {/* <SearchAutoComplete /> */}

      {/* ----------------------------------------- Tic Tak Toe */}
      {/* <TicTacToe /> */}

      {/* ----------------------------------------- Close modal on outside click */}
      {/* <UseOnclickOutsideTest /> */}

      {/* ----------------------------------------- Window resize custom hook */}
      {/* <UseWindowResizeTest /> */}

      {/* ----------------------------------------- Scroll to top and bottom */}
      <ScrollTopBotom />
    </div>
  );
}

export default App;
