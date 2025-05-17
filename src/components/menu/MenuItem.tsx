import { MenuItemInfo } from "@/lib/interfaces";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";

export default function MenuItem({ item }: { item: MenuItemInfo }) {
  return (
    <div className="flex items-start gap-4">
      <Image
        src={item.image}
        alt={item.name}
        width={900}
        height={900}
        className="md:block hidden border rounded-2xl w-24 2xl:w-32 h-24 2xl:h-32 object-cover object-center aspect-4/6"
      />
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <div className="w-7/8">
            <h3>{item.name}</h3>
          </div>
          <p className="lg:block md:hidden">{item.description}</p>
        </div>
        <div className="mt-8 md:mt-5 h-1/2">{formatCurrency(item.price)}</div>
      </div>
    </div>
  );
}
