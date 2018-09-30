module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) {
    return false
  }
  let arrspl = [];
  for (let i = 0; i < str.length; i++) 
  {
  for (let j = 0; j < bracketsConfig.length; j++) 
  {
  if (str[i] == bracketsConfig[j][0]) 
  {
    arrspl.push(str[i]);
    }
  if (str[i] == bracketsConfig[j][0]) 
  {
    arrspl.pop(str[i]);
    }
  }
  }
  if (arrspl == 0) 
  {
    return true
  }
  else 
  {
    return false
}
}