function pagination(
	totalCount: number,
	currentPage: number = 1,
	pageSize: number = 10,
	maxPages: number = 10,
): Object {

	try {
		if (totalCount == null) {
			throw new Error('required is totalCount');
		}
	} catch (e) {
		console.log(e);
	}

	let totalPage = Math.ceil(totalCount / pageSize);

	if (currentPage > totalPage) {
		currentPage = totalPage;
	}

	let startPage = Math.floor((currentPage - 1) / maxPages) * maxPages + 1;

	let endPage = startPage + maxPages - 1;

	if (endPage > totalPage) {
		endPage = totalPage;
	}

	let pageList = [];

	for (let i = startPage; i <= endPage; i++) {
		pageList.push(i);
	}

	return {
		totalCount: totalCount,
		currentPage: currentPage,
		startPage: startPage,
		endPage: endPage,
		totalPage: totalPage,
		pageList: pageList,
	};
}

export { pagination };