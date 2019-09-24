interface Item {
  date: number;
  [key: string]: any;
}

interface GroupedItems {
  [key: string]: {
    [key: string]: Item[];
  };
}

/**
 * Takes in an array of items and converts it into a structured object like:
 *
 * ```
 * {
 *   2019: {
 *     7: {
 *       // the items
 *     }
 *   }
 * }
 * ```
 * @param items - An array of objects with a date property
 */
function groupByYearAndMonth(items: Item[]): GroupedItems {
  let groupedItems = items.reduce((total, item) => {
    let month = new Date(item.date).getMonth();
    let year = new Date(item.date).getFullYear();

    // Check if year exists on total array
    if (!total[`${year}`]) {
      // If year does not exit on total, add it to the array
      total[`${year}`] = {};
    }

    // Check if the month exists in the year
    if (!total[`${year}`][`${month}`]) {
      // If year does not exist on total, add it to the array
      total[`${year}`][`${month}`] = [];
    }

    // Add the item to the correct month
    total[`${year}`][`${month}`].push(item);

    return total;
  }, {});

  return groupedItems;
}

export default groupByYearAndMonth;
