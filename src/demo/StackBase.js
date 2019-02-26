const a1 = { name: 'a1', render() { return [b1, b2] } }
const b1 = { name: 'b1', render() { return [c1] } }
const b2 = { name: 'b2', render() { return [] } }
const c1 = { name: 'c1', render() { return [d1] } }
const d1 = { name: 'd1', render() { return [] } }

function process(instance) {
  console.log(instance.name);
}

function walk(instance) {
  process(instance);
  const children = instance.render()
  children.forEach(walk);
}

walk(a1);
