import { MenuCategory } from "@/lib/interfaces";
import { sortByProperty } from "@/lib/utils";
import MenuItem from "./MenuItem";

export default function MenuSection({ category }: { category: MenuCategory }) {
  const sortedItems = sortByProperty(category.items, "name");
  return (
    <section className="mb-16">
      <h2>{category.name}</h2>
      <p>{category.description}</p>
      <div className="gap-7 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-3">
        {sortedItems.map((item) => {
          return <MenuItem key={item.name} item={item} />;
        })}
      </div>
    </section>
  );
}
