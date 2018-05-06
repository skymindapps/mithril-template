export interface IItemService {
  getAll(): Item[];
  getById(id: number): Item | undefined;
}

export class ItemService implements IItemService {
  private readonly _items: Item[];

  constructor() {
    this._items = [
      { id: 1, title: "One" },
      { id: 3, title: "Three" },
      { id: 2, title: "Two" }
    ];
  }

  public getAll(): Item[] {
    return this._items.map(x => { return { id: x.id, title: x.title}; });
  }

  public getById(id: number): Item | undefined {
    return this._items.find(x => x.id === id);
  }
}

export interface Item {
  id: number;
  title: string;
}