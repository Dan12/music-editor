import { EventManager } from '../utils/event-manager';
import { ReleaseFileEvent } from './release-file';
import { ToggleFileBrowserEvent } from './toggle-file-browser';
import { DragFileEvent } from './drag-file';

export function registerEvents(): void {
  EventManager.register(new ReleaseFileEvent());

  EventManager.register(new ToggleFileBrowserEvent());

  EventManager.register(new DragFileEvent());
}
