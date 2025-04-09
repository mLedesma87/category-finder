import { Category } from "../types/category.type";
import CategoryClass from "../models/category.model";

/**
 * 
 * @param {categories} - Array of categories to search through
 * @param {categoryName} categoryName - Name of category to find
 * @returns - String separated by / with list of categories found or null if not found
 */
const getCategoryPath = (categories: Category[], categoryName: string): string | null => {
    const path = findSubcategoryPath(categories, categoryName);
    if (path) {
        return formatCategoryPath(path);
    }
    return path;
};

/**
 * 
 * @param {categories} - Array of categories to search through
 * @param {categoryName} categoryName - Name of category to find
 * @returns - Array of categories found or null if not found
 */
const findSubcategoryPath = (categories: Category[], categoryName: string): string[] | null => {
    for (const category of categories) {
        const categoryClass = new CategoryClass(category);
        if (category.name === categoryName) {
            return [categoryClass.getName()];
        }
        const subPath = findSubcategoryPath(categoryClass.getSubcategories(), categoryName);
        if (subPath) {
            return [categoryClass.getName(), ...subPath];
        }
    }
    return null;
}

/**
 * 
 * @param {path[]} - Array of categories found
 * @returns - String with path formatted as /category1/category2/category3
 */
const formatCategoryPath = (path: string[]): string => {
    return '/' + path.join('/');
}

export { getCategoryPath, formatCategoryPath, findSubcategoryPath }