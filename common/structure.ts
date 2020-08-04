interface NodeSimple<T> {
  val: T;
  nextNode: NodeSimple<T> | undefined;
}

function createNodeSimple<T>(val: T): NodeSimple<T> {
  return {
    val,
    nextNode: undefined,
  };
}

interface NodeTree<T> {
  val: T;
  children: NodeTree<T>[] | undefined;
}

function createNodeTree<T>(val: T): NodeTree<T> {
  return {
    val,
    children: undefined,
  };
}
