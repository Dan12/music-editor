import { EventManager } from '../utils/event-manager';
import { ReleaseFileEvent } from './release-file';
import { ToggleFileBrowserEvent } from './toggle-file-browser';
import { DragFileEvent } from './drag-file';
import { ToggleKeyboardEvent } from './toggle-keyboard';
import { KeySelectedEvent } from './key-selected';

export function registerEvents(): void {
  EventManager.register(new ReleaseFileEvent());

  EventManager.register(new ToggleFileBrowserEvent());

  EventManager.register(new DragFileEvent());

  EventManager.register(new ToggleKeyboardEvent());

  EventManager.register(new KeySelectedEvent());
}
