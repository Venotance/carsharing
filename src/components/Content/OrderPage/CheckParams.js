export function checkParams(value1) {
    if ((value1 == "")||(value1 == null)){
      return 0;
    } else {
      return 1;
    }
  }
// export function checkParams(value1,value2) {
//     if ((value1 == "")||(value1 == null)){
//       return [0, value2];
//     } else {
//       return [1, value2];
//     }
//   }