const a1 = { name: 'a1', render() { return [b1, b2] } }
const b1 = { name: 'b1', render() { return [c1] } }
const b2 = { name: 'b2', render() { return [] } }
const c1 = { name: 'c1', render() { return [d1] } }
const d1 = { name: 'd1', render() { return [] } }

function Node (instance, returnNode, siblingNode, childNode) {
  return {
    instance,
    returnNode,
    siblingNode,
    childNode,
  }
}

function linking(children, parent) {
  const firstChild = children.reduceRight((prev, current) => {
    const node = Node(current);
    node.returnNode = parent;
    node.siblingNode = prev;
    return node;
  }, null);
  return parent.childNode = firstChild;
}

function process(node) {
  console.log(node.instance.name);
  const children = node.instance.render();
  const linked = linking(children, node);
  return linked;
}

function walk(rootNode) {
  let current = rootNode;

  while (1) {
    const child = process(current);
    if (child) {
      current = child;
      continue;
    }
    if (current === rootNode) {
      return;
    }
    while(!current.siblingNode) {
      if (!current.returnNode || current.returnNode === rootNode) {
        return;
      }
      current = current.returnNode;
    }
    current = current.siblingNode;
  }
}

walk(Node(a1, null, null));
