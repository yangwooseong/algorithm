let getRow = function (rowIndex) {
  let current = [1]

  while (rowIndex > 0) {
    const nextRow = [1].concat(
      current.map((val, idx) =>
        idx === current.length - 1 ? 1 : current[idx] + current[idx + 1],
      ),
    )
    current = nextRow.slice()
    console.log(current)
    rowIndex -= 1
  }

  return current
}

getRow(10)
