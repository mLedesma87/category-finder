import { getCategoryPath, formatCategoryPath, findSubcategoryPath } from "./categoryFinder";

describe('getCategoryPath', () => {
    const categories = [
        {
            name: 'category1',
            subcategories: [
                {
                    name: 'category2',
                    subcategories: []
                },
                {
                    name: 'category3',
                    subcategories: [
                        {
                            name: 'category4',
                            subcategories: [
                                {
                                    name: 'category7',
                                    subcategories: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'category5',
            subcategories: []
        }
    ];

    test('should return the correct path for category4', () => {
        expect(getCategoryPath(categories, 'category4')).toBe('/category1/category3/category4');
    });

    test('should return the correct path for category2', () => {
        expect(getCategoryPath(categories, 'category2')).toBe('/category1/category2');
    });

    test('should return the correct path for category5', () => {
        expect(getCategoryPath(categories, 'category5')).toBe('/category5');
    });

    test('should return the correct path for category7', () => {
        expect(getCategoryPath(categories, 'category7')).toBe('/category1/category3/category4/category7');
    });

    test('should return null for a non-existent category', () => {
        expect(getCategoryPath(categories, 'nonExistentCategory')).toBe(null);
    });

    test('should return null if categories is empty', () => {
        expect(getCategoryPath([], 'nonExistentCategory')).toBe(null);
    });

    test('should return null if categoryName is empty', () => {
        expect(getCategoryPath(categories, '')).toBe(null);
    });
})

describe('formatCategoryPath', () => {

    const path = ['category1', 'category2', 'category3'];

    test('should format the path correctly', () => {
        expect(formatCategoryPath(path)).toBe('/category1/category2/category3');
    }
    );
    test('should return an empty string for an empty path', () => {
        const path: string[] = [];
        expect(formatCategoryPath(path)).toBe('/');
    }
    );
    test('should return the correct path for a single category', () => {
        const path = ['category1'];
        expect(formatCategoryPath(path)).toBe('/category1');
    }
    );
    test('should return the correct path for a single category with special characters', () => {
        const path = ['category 1'];
        expect(formatCategoryPath(path)).toBe('/category 1');
    }
    );
    test('should return the correct path for multiple categories with special characters', () => {
        const path = ['category 1', 'category 2', 'category 3'];
        expect(formatCategoryPath(path)).toBe('/category 1/category 2/category 3');
    }
    );
})

describe('findSubcategoryPath', () => {
    test('should return the correct path for category4', () => {
        const categories = [
            {
                name: 'category1',
                subcategories: [
                    {
                        name: 'category2',
                        subcategories: []
                    },
                    {
                        name: 'category3',
                        subcategories: [
                            {
                                name: 'category4',
                                subcategories: []
                            }
                        ]
                    }
                ]
            }
        ];
        expect(findSubcategoryPath(categories, 'category4')).toEqual(['category1', 'category3', 'category4']);
    }
    );
    test('should return the correct path for category2', () => {
        const categories = [
            {
                name: 'category1',
                subcategories: [
                    {
                        name: 'category2',
                        subcategories: []
                    }
                ]
            }
        ];
        expect(findSubcategoryPath(categories, 'category2')).toEqual(['category1', 'category2']);
    }
    );
    test('should return the correct path for category5', () => {
        const categories = [
            {
                name: 'category5',
                subcategories: []
            }
        ];
        expect(findSubcategoryPath(categories, 'category5')).toEqual(['category5']);
    }
    );
    test('should return null for a non-existent category', () => {
        const categories = [
            {
                name: 'category1',
                subcategories: []
            }
        ];
        expect(findSubcategoryPath(categories, 'nonExistentCategory')).toBe(null);
    }
    );
})