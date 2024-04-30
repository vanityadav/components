class Provider<T> {
  constructor() {}

  emit(event: T) {}
}

const n = new Provider<string>();

const q = new EventQueue<string>();
