// Code your solution in this file!
function distanceFromHqInBlocks (input) 
{
  //returns the number of blocks given a value
  let block = input;
  blockNumber = Math.abs(input - 42); //this bc starts on 42nd street?
  return blockNumber
}
 
function distanceFromHqInFeet (input) 
{
  //1 block = 264 feet
  return distanceFromHqInBlocks(input) * 264
}

function distanceTravelledInFeet( int1, int2)
{
  return Math.abs((int1 -int2) *264)
}

function calculatesFarePrice(int1, int2)
{
  let cost; //define variable
  calculatedFeet = distanceTravelledInFeet(int1, int2)
  if (calculatedFeet <= 400)
  {
    cost = 0;
  }
  else if (calculatedFeet >400 && calculatedFeet <=2000)
  {
    cost = 0.02 * Math.abs(400-calculatedFeet);
  }
  else if (calculatedFeet > 2000 && calculatedFeet < 2500)
  {
    cost = 25
  }
  else
  {
    return 'cannot travel that far'
  }
  return cost;
}