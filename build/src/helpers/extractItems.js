"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractItems = void 0;
function extractItems(menuList) {
    const menus = [...menuList];
    const items = [];
    for (const level1 of menus) {
        for (const level2 of level1.menu_sections) {
            for (const level3 of level2.menu_items) {
                try {
                    const newItem = {
                        title: level3.name,
                        description: level3.description,
                        price: level3.pricing[0].price
                    };
                    items.push(newItem);
                }
                catch (_a) { }
            }
        }
    }
    return items;
}
exports.extractItems = extractItems;
