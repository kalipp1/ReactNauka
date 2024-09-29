export const strContains = ( cardTitle, searchString ) => {
    return(cardTitle.toLowerCase().includes(String(searchString).toLowerCase()));
}