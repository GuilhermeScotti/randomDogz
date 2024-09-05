import { useState } from "react";
import "./App.css";
import BanSideBar from "./components/BanSideBar";
import HistoryBar from "./components/HistoryBar";
import MainDog from "./components/MainDog";

const App = () => {
  const [dog, setDog] = useState("");
  const [dogInfo, setDogInfo] = useState("");
  const [dogHistory, setDogHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [banedNames, setBanedNames] = useState([]);
  const [banedLifeSpans, setBanedLifeSpans] = useState([]);
  const [banedBreedGroups, setBanedBreedGroups] = useState([]);
  const [isBanned, setIsBanned] = useState(false);

  const getDogs = async () => {
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key":
        "live_CV7JbMjXinehwpk0FKAh0cx65NqsHFrEqvOWx4Gk3eHNFZbxtoc6XWTowUwdWMXH",
    });

    var requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    setIsBanned(false);

    const response = await fetch(
      "https://api.thedogapi.com/v1/images/search?format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
      requestOptions
    ).catch(console.error);

    const data = await response.json();
    const localInfo = data[0].breeds[0];

    setDogInfo(localInfo);

    if (
      banedNames.includes(localInfo.name) ||
      banedLifeSpans.includes(localInfo.life_span) ||
      banedBreedGroups.includes(localInfo.breed_group)
    ) {
      setIsBanned(true);
    } else {
      setDog(data[0]);
    }

    setDogHistory([
      ...dogHistory,
      { name: data[0].breeds[0].name, url: data[0].url },
    ]);
  };

  const banName = () => {
    setBanedNames([...banedNames, dogInfo.name]);
  };

  const banLifeSpan = () => {
    setBanedLifeSpans([...banedLifeSpans, dogInfo.life_span]);
  };

  const banBreedGroup = () => {
    setBanedBreedGroups([...banedBreedGroups, dogInfo.breed_group]);
  };

  const handleFetchDog = async () => {
    if (isLoading) {
      alert("Please wait for the current request to finish");
      return;
    }

    setIsLoading(true);
    const data = await getDogs();
    setIsLoading(false);
  };

  return (
    <>
      <div>
        <div>
          <h1 className="title">Random Dogs!</h1>
        </div>

        <MainDog
          dog={dog}
          dogInfo={dogInfo}
          banName={banName}
          banLifeSpan={banLifeSpan}
          banBreedGroup={banBreedGroup}
          isBanned={isBanned}
        />

        <button
          onClick={handleFetchDog}
          style={{
            backgroundColor: isLoading && "#007bff",
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
        >
          {isLoading ? "Loading..." : "Fetch Dog"}
        </button>
      </div>

      <HistoryBar dogHistory={dogHistory} />

      <BanSideBar
        banedNames={banedNames}
        setBanedNames={setBanedNames}
        banedLifeSpans={banedLifeSpans}
        setBanedLifeSpans={setBanedLifeSpans}
        banedBreedGroups={banedBreedGroups}
        setBanedBreedGroups={setBanedBreedGroups}
      />
    </>
  );
};

export default App;
