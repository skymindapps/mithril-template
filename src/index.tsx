import { InjectorConfig } from './configs/injector.config';
new InjectorConfig(); // initializes Injector registrations

import * as m from 'mithril';
import { AppComponent } from './components/app/app.component';

export class Index {
  constructor() {
  }

	view() {
		return (
			<div>
				<AppComponent name="Smølf" />
			</div>
		)
	}
}

m.mount(document.body, Index);
