import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';

import { TodoistV1 } from './v1/TodoistV1.node';
import { TodoistV2 } from './v2/TodoistV2.node';
import { TodoistV3 } from './v3/TodoistV3.node';

export class Todoist extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Todoist',
			name: 'todoist',
			icon: 'file:todoist.svg',
			group: ['output'],
			defaultVersion: 3,
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Consume Todoist API',
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new TodoistV1(baseDescription),
			2: new TodoistV2(baseDescription),
			3: new TodoistV3(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
