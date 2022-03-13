function printStr(sel1, sel2) {
  const helper = (sel) => {
    let targetEl
    let returnedText = ''
    if (typeof sel === 'string') {
      targetEl = document.querySelector(sel)
    } else {
      targetEl = sel
    }

    if (!targetEl) return ''
    for (let i = 0; i < targetEl.childNodes.length; i++) {
      const node = targetEl.childNodes[i]
      if (node.nodeType === 3) {
        if (returnedText && node.nodeValue.trim()) returnedText += ' '
        returnedText += node.nodeValue.trim()
      } else if (node.nodeType === 1) {
        if (returnedText) returnedText += ' '
        returnedText += helper(node).trim()
      }
    }
    // console.log(returnedText)
    return returnedText
  }

  return Array.from(arguments)
    .map((sel) => helper(sel))
    .join(' ')
}

console.log(printStr('.c-2', '.c-3'))
