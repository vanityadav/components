type ENode<T> = {
  next?: ENode<T>;
  value: T;
};

class EventQueue<T> {
  public length: number;
  private head?: ENode<T>;
  private tail?: ENode<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  addEvent(value: T) {
    const node: ENode<T> = { value };

    this.length++;
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  protected removeEvent() {
    if (this.length === 0) return undefined;

    this.length--;
    const head = this.head?.value;
    this.head = this.head?.next;

    return head;
  }

  getEventQueueSize() {
    return this.length;
  }

  peek() {
    return this.head?.value;
  }

  getEventQueue() {
    const values: T[] = [];
    this.makeQueue(this.head, values);
    return values;
  }

  private makeQueue(node: ENode<T> | undefined, list: T[]) {
    if (!node) return null;

    list.push(node.value);

    if (node.next) {
      this.makeQueue(node.next, list);
    }
  }
}
