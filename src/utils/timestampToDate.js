const timestampToDate = (timestamp) => {
    const asDate = new Date(timestamp);
    return asDate.toLocaleDateString();
};

export default timestampToDate;
