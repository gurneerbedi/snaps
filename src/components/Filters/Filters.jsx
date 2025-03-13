import { useState, useEffect } from "react";
import Tag from "../Tag/Tag";
import * as apiService from "../../services/apiService";
import "./Filters.scss";

const Filters = ({ selectedFilter, setSelectedFilter }) => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        async function getTags() {
            const data = await apiService.getTags();
            setTags(data);
        }

        getTags();
    }, []);

    return (
        <section className="filters">
            <h3 className="filters__header">Filters</h3>
            <div className="filters__list">
                {tags.map((filter) => (
                    <Tag
                        key={filter}
                        clickable
                        text={filter}
                        filled={selectedFilter === filter}
                        className="filters__tag"
                        handleClick={() => {
                            selectedFilter === filter
                                ? setSelectedFilter(undefined)
                                : setSelectedFilter(filter);
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Filters;
