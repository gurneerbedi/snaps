import "./App.scss";
import { useState } from "react";
import PhotoCardList from "./components/PhotoCardList/PhotoCardList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Hero from "./components/Hero/Hero";
import { useWindowWidth } from "./hooks/useWindowWidth";

function App() {
    const [selectedFilter, setSelectedFilter] = useState(undefined);
    const [filtersOpen, setFiltersOpen] = useState(false);
    const width = useWindowWidth();

    return (
        <>
            {width >= 1280 ? (
                <div className="app-content">
                    <div>
                        <Header
                            showClose={false}
                            handleButtonClick={() =>
                                setFiltersOpen(!filtersOpen)
                            }
                            filtersOpen={filtersOpen}
                        />
                        <Hero />
                        <PhotoCardList filter={selectedFilter} />
                    </div>
                    {filtersOpen && (
                        <Filters
                            showClose
                            selectedFilter={selectedFilter}
                            setSelectedFilter={setSelectedFilter}
                            handleClose={() => setFiltersOpen(false)}
                        />
                    )}
                </div>
            ) : (
                <div className="app-content">
                    <Header
                        handleButtonClick={() => setFiltersOpen(!filtersOpen)}
                        filtersOpen={filtersOpen}
                    />
                    {filtersOpen ? (
                        <Filters
                            selectedFilter={selectedFilter}
                            setSelectedFilter={setSelectedFilter}
                            handleClose={() => setFiltersOpen(false)}
                        />
                    ) : (
                        <Hero />
                    )}
                    <PhotoCardList filter={selectedFilter} />
                </div>
            )}

            <Footer />
        </>
    );
}

export default App;
