import { InjectorConfig } from './services';
new InjectorConfig(); // initializes Injector registrations

import * as m from 'mithril';
import { AppComponent } from './components/app/app.component';

export class Index {
  constructor() {
  }

	view() {
		return (
			<div>
				<AppComponent name="Cat" />
			</div>
		)
	}
}

m.mount(document.body, Index);
