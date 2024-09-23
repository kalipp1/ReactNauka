export const strContains = ( cardTitle, searchString ) => {
    return(cardTitle.toLowerCase().includes(searchString.toLowerCase()));
}