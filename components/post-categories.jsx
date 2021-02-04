export default function PostCategories({ categoryList })
{
	return(
    <section id="categories-box">
      {categoryList.map(category =>
        <li id="categories" key={category}>
          <a id="category-single">{category}</a>
        </li>
      )}
    </section>
	);
}
