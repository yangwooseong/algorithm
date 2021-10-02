var QueueProto = Object.create(Array.prototype)
QueueProto.enqueue = Array.prototype.push
QueueProto.dequeue = Array.prototype.shift
QueueProto.front = function () {
  if (this.length !== undefined && this.length > 0) {
    return this[0]
  }
}

var MyStack = function () {
  this.queue = Object.create(QueueProto)
}

MyStack.prototype.push = function (x) {
  this.queue.push(x)
  const length = this.queue.length
  for (i = 0; i < length - 1; i++) {
    const first = this.queue.dequeue()
    this.queue.enqueue(first)
  }
}

MyStack.prototype.pop = function () {
  return this.queue.dequeue()
}

MyStack.prototype.top = function () {
  return this.queue.front()
}

MyStack.prototype.empty = function () {
  return this.queue.length === 0
}
