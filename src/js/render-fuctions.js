export function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="item-imagesList js-item-imagesList">
        <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" width = "360"/>
             </a>
            <div>
                <span>
                  <p><b>Likes</b></p>
                  <p>${likes}</p>
                </span>
        
                <span>
                  <p><b>Views</b></p>
                  <p>${views}</p>
                </span>
                <span>
                  <p><b>Comments</b></p>
                  <p>${comments}</p>
                </span>
                <span>
                  <p><b>Downloads</b></p>
                  <p>${downloads}</p>
                </span>
            </div>
       
      </li>`
    )
    .join('');
}
