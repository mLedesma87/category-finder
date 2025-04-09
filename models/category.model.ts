import { Category } from '../types/category.type';

class CategoryClass {
    name: string;
    subcategories: Category[];

    constructor({name, subcategories} : Category) {
        this.name = name;
        this.subcategories = subcategories;
    }

    getName(): string {
        return this.name;
    }
    getSubcategories(): Category[] {
        return this.subcategories;
    }
}
export default CategoryClass;