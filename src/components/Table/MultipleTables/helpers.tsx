import { Row, Table } from "@tanstack/react-table";

export function getColumnElements(table: Table<any>, typeOfTable: string) {
    switch (typeOfTable) {
        case 'left':
            return table.getLeftHeaderGroups() || [];
        case 'center':
            return table.getCenterHeaderGroups() || [];
        case 'right':
            return table.getRightHeaderGroups() || [];
        default:
            return [];
    }
}

export function getRowsElements(row: any, typeOfTable: string) {
    switch (typeOfTable) {
        case 'left':
            return row.getLeftVisibleCells() || [];
        case 'center':
            return row.getCenterVisibleCells() || [];
        case 'right':
            return row.getRightVisibleCells() || [];
        default:
            return [];
    }
}