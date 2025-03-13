import "./HomePage.scss";
import { useState } from "react";
import PhotoCardList from "../../components/PhotoCardList/PhotoCardList";
import Header from "../../components/Header/Header";
import Filters from "../../components/Filters/Filters";
import Hero from "../../components/Hero/Hero";
import Button from "../../components/Button/Button";
import FilterIcon from "../../components/FilterIcon/FilterIcon";

function HomePage() {
    const [selectedFilter, setSelectedFilter] = useState(undefined);
    const [filtersOpen, setFiltersOpen] = useState(false);

    return (
        <>
            <div className="home">
                <Header
                    RightSideButton={() => (
                        <Button
                            onClick={() => setFiltersOpen(!filtersOpen)}
                            selected={filtersOpen}
                            variant="secondary"
                        >
                            Filters
                            <FilterIcon />
                        </Button>
                    )}
                />
                <div className="home__content">
                    {filtersOpen && (
                        <Filters
                            showClose
                            selectedFilter={selectedFilter}
                            setSelectedFilter={setSelectedFilter}
                            handleClose={() => setFiltersOpen(false)}
                        />
                    )}
                    <div className="home__always-shown">
                        <Hero />
                        <PhotoCardList filter={selectedFilter} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
