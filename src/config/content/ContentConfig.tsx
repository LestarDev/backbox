
export type category = "Weapon" | "Food" | "Nature" | "Empty" | "Backpack";

type item = {
    name: string,
    category: category,
    price: number,
    description: string,
    value: number,
    size: number[],
    img?: string
}

export default item;