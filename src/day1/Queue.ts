type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head: Node<T>;
    private tail: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {}
    deque(): T | undefined {}
    peek(): T | undefined {
        return this.head?.value;
    }
}
