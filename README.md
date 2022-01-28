# Simple JavaScript Pagination Usage
![GIF_2022-01-25_오후_9-56-32](https://user-images.githubusercontent.com/35192352/151121363-a834a2ef-c6b8-4046-b5c3-c40fb6c52f10.gif)

### npm Site
https://www.npmjs.com/package/jy-paginate

### npm install
`npm install jy-paginate`

### Pagination Usage
* **totalCount** (required) - the total number of items to be paged
* **currentPage** (optional) - the current active page, defaults to the first page
* **pageSize** (optional) - the number of items per page, defaults to 10
* **maxPages** (optional) - the maximum number of page navigation links to display, defaults to 10

### pagiantion(1000)
`{totalCount: 1000,
currentPage: 1,
startPage: 1,
endPage: 10,
totalPage: 100,
pageList: [
1, 2, 3, 4,  5,
6, 7, 8, 9, 10
]}
`

### pagiantion(1000, 20)
`
{
totalCount: 1000,
currentPage: 20,
startPage: 11,
endPage: 20,
totalPage: 100,
pageList: [
11, 12, 13, 14, 15,
16, 17, 18, 19, 20
]
}
`

### pagination(1000, 20, 5)
`{
totalCount: 1000,
currentPage: 20,
startPage: 11,
endPage: 20,
totalPage: 200,
pageList: [
11, 12, 13, 14, 15,
16, 17, 18, 19, 20
]
}
`

### pagination(1000, 20, 5, 5)
`{
totalCount: 1000,
currentPage: 20,
startPage: 16,
endPage: 20,
totalPage: 200,
pageList: [ 16, 17, 18, 19, 20 ]
}
`
