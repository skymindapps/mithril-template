import * as m from 'mithril';
import { Children, ClassComponent, Vnode, VnodeDOM } from 'mithril';
import * as t from 'i18n4v';
import { Inject, IItemService, Item } from '../../../services';
import { TYPES } from '../../../configs/injector.config';

interface Attrs {
  key: string;
}
export class ItemDetailsComponent implements ClassComponent<Attrs> {
  @Inject(TYPES.ItemService)
  private _itemService: IItemService;

  public item: Item;

  constructor() {
    this.item = { id: -1, title: '' };
  }

  public view(vnode: Vnode<Attrs, this>): Children {
    return (
      <div class="item-details">
        <div class="input">
          <label>
            <span>{t('itemDetails.title.label')}:</span><bR/>
            <input type="text" placeholder={t('itemDetails.title.placeholder')} value={this.item.title} />
          </label>
        </div>
        <button>{t('itemDetails.save')}</button>
      </div>
    );
  }

  public oncreate(vnode: VnodeDOM<Attrs, this>) {
    const id = parseInt(vnode.attrs.key);
    if (!isNaN(id)) {
      const item = this._itemService.getById(id);
      if (item) {
        this.item.title = item.title;
        m.redraw(); // because we don't have a true m.request
      }
    }
  }
}