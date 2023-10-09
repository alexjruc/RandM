const paginationLogic = (currentPage, residents) =>{
    if(residents.length ===0 ) {
        return {
            pages: [1],
            residentsInPage: []
        }
    }

    const REDISENTS_POR_PAGE = 12;
    const totalPages = Math.ceil(residents.length / REDISENTS_POR_PAGE);

    const sliceEnd = REDISENTS_POR_PAGE * currentPage;
    const sliceStart = sliceEnd - REDISENTS_POR_PAGE;
    const residentsInPage = residents.slice(sliceStart, sliceEnd);

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
        
    }

    return {
        pages,
        residentsInPage
    }
}

export {
    paginationLogic
}