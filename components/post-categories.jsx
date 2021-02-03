export default function PostCategories({ categoryList })
{
	return(
    <div id="categories-box">
      {categoryList.map(category =>
        <li id="categories" key={category}>
          <a id="category-single">{category}</a>
        </li>
      )}
    </div>
	);
}
