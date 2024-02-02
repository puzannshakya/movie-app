import NavigationMenu from "../components/navigation/NavigationMenu";
import { getMovies, getTVs } from "./../services/api";
import { useEffect, useState } from "react";
import CardList from "../components/list/CardList";
import DropdownMenu from "./../components/dropdownmenu/DropDownMenu";
import Loader from "../components/loader/Loader";
import Search from "./Search";
import { Text } from "react-native";

const Main = ({ navigation }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [TvShows, setTVShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tabOption, setTabOption] = useState(0);
  const [selectedDropDownMovies, setSelectedDropDownMovies] =
    useState("now_playing");
  const [selectedDropDownTV, setSelectedDropDownTV] = useState("airing_today");

  const optionSelected = (param) => {
    setLoading(true);
    setSelectedDropDownMovies(param);
    getMovies(param).then((data) => {
      setPopularMovies(data);
      setLoading(false);
    });
  };

  const optionSelectedFromTV = (param) => {
    setLoading(true);
    setSelectedDropDownTV(param);
    getTVs(param).then((data) => {
      setTVShows(data);
      setLoading(false);
    });
  };
  useEffect(() => {
    setLoading(true);
    getMovies("now_playing").then((data) => {
      setPopularMovies(data);
      setLoading(false);
    });
    getTVs("airing_today").then((data) => {
      setTVShows(data);
    });
  }, []);

  return (
    <>
      <NavigationMenu
        onSelect={(selectedOption) => {
          setTabOption(selectedOption);
        }}
      />
      {tabOption == 1 && (
        <>
          <Search navigation={navigation} />
        </>
      )}

      {loading ? (
        <Loader />
      ) : (
        <>
          {tabOption == 0 && (
            <>
              <DropdownMenu
                options={["now_playing", "popular", "top_rated", "upcoming"]}
                selectedDropDown={selectedDropDownMovies}
                onSelect={(selectedOption) => {
                  optionSelected(selectedOption);
                }}
              />
              <CardList
                mediaData={popularMovies}
                navigation={navigation}
                media="movie"
              />
            </>
          )}

          {tabOption == 2 && (
            <>
              <DropdownMenu
                options={["airing_today", "on_the_air", "popular", "top_rated"]}
                selectedDropDown={selectedDropDownTV}
                onSelect={(selectedOption) => {
                  optionSelectedFromTV(selectedOption);
                }}
              />
              <CardList
                mediaData={TvShows}
                navigation={navigation}
                media="tv"
              />
            </>
          )}
        </>
      )}
    </>
  );
};
export default Main;
