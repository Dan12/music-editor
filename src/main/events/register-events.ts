import { EventManager } from '../utils/event-manager';
import { ReleaseFileEvent } from './release-file';
import { ToggleFileBrowserEvent } from './toggle-file-browser';

export function registerEvents(): void {
  EventManager.register(new ReleaseFileEvent());

  EventManager.register(new ToggleFileBrowserEvent());
}
