import * as m from 'mithril';
import { Children, ClassComponent, Vnode } from 'mithril';
import * as t from 'i18n4v';
import { Inject, IItemService, Item } from '../../../services';
import { TYPES } from '../../../configs/injector.config';

export class ItemDetailsComponent implements ClassComponent {
  @Inject(TYPES.ItemService)
  private _itemService: IItemService;

  public item: Item;

  constructor() {
    this.item = { id: -1, title: '' };
  }

  public view(vnode: Vnode): Children {
    return (
      <div class="item-details">
        <label>
          <span>{t('itemDetails.id.label')}:</span>
          <input type="number" value={this.item.id} />
        </label>
        <label>
          <span>{t('itemDetails.title.label')}:</span>
          <input type="number" value={this.item.id} />
        </label>
      </div>
    );
  }

  public oncreate(vnode: Vnode): any {
    // something here to get the id of the item and then load it
  }
}