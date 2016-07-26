abstract class EditorEvent {

    abstract getName(): string;

    abstract eventFired(eventClass: EditorEvent): void;

    abstract getArgs(): any;
}