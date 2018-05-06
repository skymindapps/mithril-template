import * as m from 'mithril';
import { ClassComponent, Vnode } from 'mithril';
import * as t from 'i18n4v';
import { Inject, IItemService, Item } from '../../../services';
import { TYPES } from '../../../configs/injector.config';

export class ItemListComponent implements ClassComponent {
  @Inject(TYPES.ItemService)
  private _itemService: IItemService;
  private readonly _items: Item[];

  constructor() {
    this._items = [];
  }

  view(vnode: Vnode) {
    return (
      <div class="item-list">
        <ul>
          {
            this._items.map(x => (
              <li>
                <a href="javascript:void(0)" onclick={() => this._navigate(x)}>{x.title}</a>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }

  oncreate(vnode: Vnode) {
    this._items.length = 0;
    this._itemService.getAll().map(x => this._items.push({ id: x.id, title: x.title }));
    m.redraw(); // because it is not a true m.request that is performed
  }

  private _navigate(item: Item): void {
    m.route.set(`/items/${item.id}`);
  }
}