// 1st problem
function kilometerToMeter(kilometer) {
  if(typeof(kilometer) != "number") 
    return "Invalid input 🚫🚫🚫. Please, provide a valid number...";
  else if(kilometer < 0) 
    return "Distance can not be negative ⚠⚠⚠";
  return kilometer * 1000;
}


// 2nd problem
function budgetCalculator(clockCount, mobileCount, laptopCount) {
  var clockPrice = 50;
  var mobilePrice = 100;
  var laptopPrice = 500;

  if( typeof(clockCount) != "number" || typeof(mobileCount) != "number" || typeof(laptopCount) != "number")
    return "Invalid input 🚫🚫🚫. Please, provide valid number...";
  else if(clockCount < 0 || mobileCount < 0 || laptopCount < 0)
    return "Value can not be negative ⚠⚠⚠";
  else
    return clockPrice * clockCount + mobilePrice * mobileCount + laptopPrice * laptopCount;
}


// 3rd problem
function hotelCost(totalDays) {
  var cost = [100, 80, 50];

  if(typeof(totalDays) != "number")
    return "Invalid input 🚫🚫🚫";
  else if(totalDays < 0)
    return "Value can not be negative ⚠⚠⚠";
  else if(totalDays < 11)
    return totalDays * cost[0];
  else if(totalDays < 21)
    return 10 * cost[0] + (totalDays - 10) * cost[1];
  else
    return 10 * cost[0] + 10 * cost[1] + (totalDays - 20) * cost[2];
}

// 4th problem

function megaFriend(friends) {
  var megaLength = 0;
  var mega = [];
  for(var i = 0; i < friends.length; i++) {
    var friend = friends[i];
    if(friend.length > megaLength) {
      mega = [];
      mega.push(friend);
      megaLength = friend.length;
    }
    else if(friend.length === megaLength) {
      mega.push(friend);
      megaLength = friend.length;
    }
  }
  return mega;
}

