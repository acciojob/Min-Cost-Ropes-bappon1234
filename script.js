function mincost(arr)
{ 
  if (!arr || arr.length <= 1) {
    return 0;
  }

  let totalCost = 0;
  let ropes = [...arr];

  while (ropes.length > 1) {
    
    ropes.sort((a, b) => b - a);

    const first = ropes.pop();
    const second = ropes.pop();

    const currentCost = first + second;
    totalCost += currentCost;

    
    ropes.push(currentCost);
  }

  return totalCost;
}

module.exports=mincost;
