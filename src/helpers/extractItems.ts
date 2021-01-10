import {MenuItem} from '../types'
export function extractItems(menuList: any[]) : MenuItem[] {
    const menus = [...menuList];
    
    const items : MenuItem[] = [];
    
    for (const level1 of menus) {
        for (const level2 of level1.menu_sections) {
        for (const level3 of level2.menu_items) {
            try {
                const newItem  : MenuItem = {
                    title: level3.name,
                    description: level3.description,
                    price: level3.pricing[0].price
                };
                items.push(newItem);
            }
            catch {}
        }
        }
    }
    return items;
    
}